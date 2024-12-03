declare const PostStats: import("svelte").Component<{
    post: import("../ThreadLoader.svelte").ThreadContent["post"];
    url: string | null;
}, {}, "">;
type PostStats = ReturnType<typeof PostStats>;
export default PostStats;
