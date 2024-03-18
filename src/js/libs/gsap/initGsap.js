import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function initGsap() {
    gsap.defaults({
        ease: "power2.out", // Default: "power1.out"
    });

    ScrollSmoother.create({
        effects: true, // Default: "false"
        // smooth: 1.6, // Default: 0.8
        // speed: 1,
        // ease: "power4.out", // Default: "expo"
        // smoothTouch: 0.1, // Default: "false"
        // ignoreMobileResize: true, // Default: "false"
    });

    ScrollTrigger.normalizeScroll(!ScrollTrigger.isTouch);
}
