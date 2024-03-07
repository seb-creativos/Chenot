export default function offcanvas() {
    const offcanvasTogglers = document.querySelectorAll(
        '[data-toggle="offcanvas"]'
    );

    offcanvasTogglers.forEach((toggler) => {
        toggler.addEventListener("click", function () {
            const targetId = this.getAttribute("data-target");
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.classList.toggle("offcanvas--showing");
                this.classList.toggle("offcanvas-toggler--active");

                if (targetElement.classList.contains("offcanvas--showing")) {
                    window.debugLog(
                        `%cOffcanvas "${targetId}" is now showing.`,
                        window.debugStyles.success
                    );
                } else {
                    window.debugLog(
                        `%cOffcanvas "${targetId}" is now hidden.`,
                        window.debugStyles.info
                    );
                }
            } else {
                window.debugLog(
                    `%cOffcanvas target "${targetId}" not found.`,
                    window.debugStyles.error
                );
            }
        });
    });
}
