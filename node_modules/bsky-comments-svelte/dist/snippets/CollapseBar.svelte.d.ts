declare const CollapseBar: import("svelte").Component<{
    collapsed: boolean;
    setCollapsed: (collapsed: boolean) => void;
}, {}, "">;
type CollapseBar = ReturnType<typeof CollapseBar>;
export default CollapseBar;
