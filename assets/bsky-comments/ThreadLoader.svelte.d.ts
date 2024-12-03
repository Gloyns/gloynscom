import { AtpAgent } from '@atproto/api';
import { type PostView } from '@atproto/api/dist/client/types/app/bsky/feed/defs.js';
export interface ThreadContent {
    post: PostView;
    replies: ThreadContent[];
}
export interface ThreadLoaderOptions {
    agent?: AtpAgent;
    sortBy?: 'likes' | 'recent';
    filterFn?: (post: PostView) => boolean;
}
export declare class ThreadLoader {
    content: ThreadContent | null;
    postUrl: string | null;
    loading: boolean;
    error: Error | null;
    constructor(uri: string, options?: ThreadLoaderOptions);
}
