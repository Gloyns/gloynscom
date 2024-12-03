import type { ThreadContent } from './ThreadLoader.svelte.js';
import type { Snippets } from "./snippets/utils.js";
import Comment from './Comment.svelte';
interface Props {
    view: ThreadContent;
    isTopLevel?: true;
    snippets?: {
        ErrorSnippet?: Snippets['ErrorSnippet'];
        PostSnippet?: Snippets['PostSnippet'];
        SeeMoreSnippet?: Snippets['SeeMoreSnippet'];
        CollapseBarSnippet?: Snippets['CollapseBarSnippet'];
    };
}
declare const Comment: import("svelte").Component<Props, {}, "">;
type Comment = ReturnType<typeof Comment>;
export default Comment;
