import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function initGsapIsElementSticked(elementId) {
    if (!elementId) return;

    const cleanElementId = elementId.replace(/[^a-z0-9-_]/gi, "");
    const isStickedClass = `${cleanElementId}--is-sticked`;

    const distanceToElement = document.querySelector(elementId).offsetTop;

    ScrollTrigger.create({
        trigger: document.body,
        start: `top+=${distanceToElement} top`,
        end: "bottom top",

        onEnter: () => {
            document.body.classList.add(isStickedClass);
            window.debugLog(
                `Body got the class: %c${isStickedClass}`,
                window.debugStyles.action
            );
        },

        onLeaveBack: () => {
            document.body.classList.remove(isStickedClass);
            window.debugLog(
                `Body lost the class: %c${isStickedClass}`,
                window.debugStyles.error
            );
        },

        markers: window.DEBUG,
    });
}
