import { type ThreadLoaderOptions } from './ThreadLoader.svelte.js';
import type { Snippets } from "./snippets/utils.js";
interface Props {
    uri: string;
    LoadingOptions?: ThreadLoaderOptions;
    LoaderSnippet?: Snippets['LoaderSnippet'];
    ErrorSnippet?: Snippets['ErrorSnippet'];
    PostStatsSnippet?: Snippets['PostStatsSnippet'];
    PostSnippet?: Snippets['PostSnippet'];
    SeeMoreSnippet?: Snippets['SeeMoreSnippet'];
    CollapseBarSnippet?: Snippets['CollapseBarSnippet'];
}
declare const BlueskyComments: import("svelte").Component<Props, {}, "">;
type BlueskyComments = ReturnType<typeof BlueskyComments>;
export default BlueskyComments;
