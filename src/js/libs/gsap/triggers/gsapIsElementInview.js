import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function initGsapIsElementInview(elementId) {
    if (!elementId) return;

    const cleanElementId = elementId.replace(/[^a-z0-9-_]/gi, "");
    const isInviewClass = `${cleanElementId}--is-inview`;

    ScrollTrigger.create({
        trigger: elementId,
        start: "top bottom",
        end: "bottom top",

        toggleClass: {
            targets: "body",
            className: isInviewClass,
        },

        markers: window.DEBUG,
    });
}
