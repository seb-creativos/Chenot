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

    let activeOffcanvas = null;
    let backdropVisible = false;

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

    /**
     * Closes the offcanvas menu, if one is currently open. This involves hiding
     * the offcanvas element, removing any active states, and hiding the backdrop.
     */
    function closeOffcanvas() {
        if (activeOffcanvas) {
            activeOffcanvas.classList.remove("offcanvas--is-active");
            document.body.classList.remove("offcanvas--is-active");
            document
                .querySelector(".menu-icon")
                ?.classList.remove("menu-icon--is-active");

            consoleLog(
                `Offcanvas %c${activeOffcanvas.id}%c is now %chidden%c.`,
                "error"
            );

            activeOffcanvas = null;
            showBackdrop(false);
        } else {
            consoleLog("%cNo active offcanvas to close.", "warning");
        }
    }

    // Set up event listeners for all toggler elements
    document
        .querySelectorAll('[data-toggle="offcanvas"]')
        .forEach((toggler) => {
            toggler.addEventListener("click", function () {
                const targetElement = document.getElementById(
                    this.getAttribute("data-target")
                );

                if (!targetElement) {
                    consoleLog("%cOffcanvas target not found.", "error");
                    return;
                }

                const isActive = targetElement.classList.toggle(
                    "offcanvas--is-active"
                );
                document.body.classList.toggle(
                    "offcanvas--is-active",
                    isActive
                );
                this.querySelector(".menu-icon")?.classList.toggle(
                    "menu-icon--is-active",
                    isActive
                );

                activeOffcanvas = isActive ? targetElement : null;
                showBackdrop(isActive);

                consoleLog(
                    `Offcanvas %c${targetElement.id}%c is now %c${
                        isActive ? "visible" : "hidden"
                    }%c.`,
                    isActive ? "success" : "error"
                );
            });
        });

    // Allow closing the offcanvas menu by pressing the ESC key
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" || event.keyCode === 27) {
            if (activeOffcanvas) {
                consoleLog("%cESC key pressed. Closing offcanvas.", "warning");
                closeOffcanvas();
            }
        }
    });
}
