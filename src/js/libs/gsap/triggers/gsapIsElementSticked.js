import { createDebugLogger } from "../../../utils/initDebug";
const debug = false;
const consoleLog = createDebugLogger(debug);

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
            consoleLog(
                `<body> %cgot%c the class: %c${isStickedClass}%c.`,
                "success"
            );
        },

        onLeaveBack: () => {
            document.body.classList.remove(isStickedClass);
            consoleLog(
                `<body> %clost%c the class: %c${isStickedClass}%c.`,
                "error"
            );
        },

        markers: debug,
    });
}
