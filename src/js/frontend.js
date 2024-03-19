/* +-----------------------------------------+
|           IMPORTS AREA             		 |
+-----------------------------------------+ */

// CSS
import "../scss/frontend.scss";

// Elementor
import setParallax from "./libs/elementor/setParallax";

// GSAP
import initGsap from "./libs/gsap/initGsap";
import initTriggers from "./libs/gsap/initTriggers";

// Utilities
import exitLoader from "./utils/exitLoader";
import offcanvas from "./utils/offcanvas";
import getScrollProgress from "./utils/getScrollProgress";
import initVideos from "./utils/initVideos";

/* +-----------------------------------------+
|           EVENTS AREA             		 |
+-----------------------------------------+ */

// DOC Ready
function documentReady() {
    setParallax();
    initGsap();
    initTriggers();

    offcanvas();

    initVideos();
}
document.addEventListener(`DOMContentLoaded`, documentReady, false);

// WINDOW Load
function windowLoad() {
    exitLoader("#siteLoader");
}
window.addEventListener(`load`, windowLoad, false);

// WINDOW Scroll
function windowScroll() {
    getScrollProgress();
}
window.addEventListener(`scroll`, windowScroll, { passive: true });
