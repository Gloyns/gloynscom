import { AtpAgent } from '@atproto/api';
import { isThreadViewPost } from '@atproto/api/dist/client/types/app/bsky/feed/defs.js';
function processUri(uri) {
    if (uri.startsWith('at://')) {
        return uri;
    }
    else if (uri.startsWith('https://bsky.app')) {
        const parts = uri.replace('https://bsky.app/profile/', '').split('/');
        const handle = parts[0];
        const postId = parts[2];
        return `at://${handle}/app.bsky.feed.post/${postId}`;
    }
    else {
        throw new Error('Invalid URI');
    }
}
export class ThreadLoader {
    content = $state(null);
    postUrl = $state(null);
    loading = $state(false);
    error = $state(null);
    constructor(uri, options = {}) {
        this.loading = true;
        const agent = options.agent ?? new AtpAgent({ service: 'https://public.api.bsky.app' });
        // handle defaults
        const sortBy = options.sortBy ?? 'likes';
        // @ts-expect-error for some reason post.record is typed to {} which fails when we try to access text
        const filterFn = options.filterFn ?? ((post) => post.record?.text !== '📌');
        agent
            .getPostThread({ uri: processUri(uri) })
            .then((res) => res.data.thread)
            .then((thread) => {
            if (thread.notFound === true) {
                this.error = new Error('Post not found');
            }
            else if (thread.blocked === true) {
                this.error = new Error('Post is blocked');
            }
            else if (!isThreadViewPost(thread)) {
                this.error = new Error('Invalid thread');
            }
            return thread;
        })
            .then((thread) => {
            const isValidReply = (reply) => {
                return isThreadViewPost(reply) && filterFn(reply.post);
            };
            if (isValidReply(thread)) {
                const processReplies = (replies) => {
                    if (!replies)
                        return [];
                    return replies
                        .filter(isValidReply)
                        .map((reply) => ({
                        post: reply.post,
                        replies: processReplies(reply.replies)
                    }))
                        .sort((a, b) => {
                        if (sortBy === 'likes') {
                            return (b.post.likeCount ?? 0) - (a.post.likeCount ?? 0);
                        }
                        else {
                            return (new Date(b.post.indexedAt).getTime() - new Date(a.post.indexedAt).getTime());
                        }
                    });
                };
                this.content = {
                    post: thread.post,
                    replies: processReplies(thread.replies)
                };
            }
            return thread;
        })
            .then((thread) => {
            // Extract DID and RKEY from AT URI to construct bsky.app URL
            const uriParts = thread.post.uri.split('/');
            const did = uriParts[2];
            const rkey = uriParts[4];
            if (uriParts[3] === 'app.bsky.feed.post') {
                this.postUrl = `https://bsky.app/profile/${did}/post/${rkey}`;
            }
            return thread;
        })
            .catch((err) => {
            this.error = err;
        })
            .finally(() => (this.loading = false));
    }
}
