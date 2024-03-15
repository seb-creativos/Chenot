import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function initGsapIsInview(triggerId) {
    const cleanTriggerId = triggerId.replace(/[^a-z0-9-_]/gi, "");
    const isInviewClass = `${cleanTriggerId}--is-inview`;

    ScrollTrigger.create({
        trigger: triggerId,
        start: "top bottom",
        end: "bottom top",

        toggleClass: {
            targets: "body",
            className: isInviewClass,
        },

        markers: window.DEBUG,
    });
}
