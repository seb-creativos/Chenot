import { createDebugLogger } from "./initDebug";
const debug = true;
const consoleLog = createDebugLogger(debug);

/**
 * Initializes and manages an offcanvas menu, including opening and closing mechanics,
 * backdrop handling, and ESC key functionality to close the menu.
 */
export default function initOffcanvas() {
    // Create the backdrop element that will be toggled alongside the offcanvas menu
    const backdrop = document.createElement("div");
    backdrop.classList.add("offcanvas-backdrop");

    let backdropVisible = false;
    let activeOffcanvas = null;

    /**
     * Shows or hides the backdrop. Manages appending and removing the backdrop
     * from the DOM, as well as handling its fade-in and fade-out animations.
     * @param {boolean} show - If true, shows the backdrop; otherwise, hides it.
     */
    function showBackdrop(show) {
        backdropVisible = show;

        if (show) {
            if (!document.body.contains(backdrop))
                document.body.appendChild(backdrop);
            requestAnimationFrame(() => {
                backdrop.classList.add("offcanvas-backdrop--is-active");
            });
            consoleLog("%cBackdrop is now active.", "info");

            backdrop.addEventListener("click", closeOffcanvas, { once: true });
        } else {
            backdrop.classList.remove("offcanvas-backdrop--is-active");
            consoleLog("%cInitiating backdrop removal.", "info");

            backdrop.addEventListener("transitionend", destroyBackdrop, {
                once: true,
            });
        }
    }

    /**
     * Handles the end of the backdrop's transition, ensuring it is removed from the DOM
     * only after it has fully transitioned to being invisible. This prevents flickering
     * or premature removal during rapid toggling.
     */
    function destroyBackdrop() {
        if (!backdropVisible && document.body.contains(backdrop)) {
            document.body.removeChild(backdrop);
            consoleLog(
                "%cBackdrop finished transitioning%c, hence it was %cfully removed%c from the DOM.",
                "warning"
            );
        }
    }
}
