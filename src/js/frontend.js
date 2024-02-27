/* +-----------------------------------------+
|           GLOBALS AREA             		 |
+-----------------------------------------+ */

window.DEBUG = true;
if (window.DEBUG) document.body.classList.add("debug--enabled");

/* +-----------------------------------------+
|           IMPORTS AREA             		 |
+-----------------------------------------+ */

// CSS
import "../scss/frontend.scss";

// Elementor
import parallax from "./libs/elementor/parallax";

// GSAP
import initGsap from "./libs/gsap/initGsap";
import initTriggers from "./libs/gsap/initTriggers";

// Utilities
import exitLoader from "./utils/exitLoader";

/* +-----------------------------------------+
|           EVENTS AREA             		 |
+-----------------------------------------+ */

// DOC Ready
function documentReady() {
    parallax();
    initGsap();
}
document.addEventListener(`DOMContentLoaded`, documentReady, false);

// WINDOW Load
function windowLoad() {
    initTriggers();
    exitLoader("#siteLoader");
}
window.addEventListener(`load`, windowLoad, false);

// WINDOW Scroll
function windowScroll() {}
window.addEventListener(`scroll`, windowScroll, { passive: true });
