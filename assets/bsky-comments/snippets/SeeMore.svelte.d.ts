declare const SeeMore: import("svelte").Component<{
    showMore(): void;
    remaining: number;
}, {}, "">;
type SeeMore = ReturnType<typeof SeeMore>;
export default SeeMore;
