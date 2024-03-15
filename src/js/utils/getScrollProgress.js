/**
 * Get to know the current scroll progress.
 *
 * Divide the current scroll position by the total scrollable area.
 * The scrollable area is the total height of the document minus the viewport height.
 */
const getScrollProgress = () => {
    const documentScrollableArea =
        document.documentElement.scrollHeight - window.innerHeight;
    const currentScrollProgress = window.scrollY / documentScrollableArea;

    document.documentElement.style.setProperty(
        `--scroll-progress`,
        `${currentScrollProgress}`
    );
};

export default getScrollProgress;
