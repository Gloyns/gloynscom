declare const Post: import("svelte").Component<{
    post: import("../ThreadLoader.svelte").ThreadContent["post"];
    collapsed: boolean;
    setCollapsed: (collapsed: boolean) => void;
}, {}, "">;
type Post = ReturnType<typeof Post>;
export default Post;
