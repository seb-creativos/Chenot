/**
 * Execute in windowLoad() so the loader
 * goes away as soon as the page is loaded.
 * Remove it from the DOM after X seconds, just in case.
 */
export default function exitLoader(target) {
    const loaderElement = document.querySelector(target);

    if (loaderElement) {
        document.documentElement.classList.add("was-loaded");

        debugLog("%cLoader has been dismissed.", window.debugStyles.info);

        // Escape the Loader
        setTimeout(() => {
            loaderElement.remove();

            debugLog(
                "%cLoader has been destroyed.",
                window.debugStyles.success
            );
        }, 7000);
    }
}
