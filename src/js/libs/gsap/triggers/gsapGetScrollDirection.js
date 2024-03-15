import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function initGsapGetScrollDirection() {
    ScrollTrigger.create({
        onUpdate: (self) => {
            if (self.direction > 0) {
                document.body.classList.add("is-scrolling--down");
                document.body.classList.remove("is-scrolling--up");
            } else {
                document.body.classList.add("is-scrolling--up");
                document.body.classList.remove("is-scrolling--down");
            }
        },
    });
}
