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

// GSAP
import initGsap from "./libs/gsap/initGsap";
import initTriggers from "./libs/gsap/initTriggers";

/* +-----------------------------------------+
|           EVENTS AREA             		 |
+-----------------------------------------+ */

// DOC Ready
function documentReady() {
    initGsap();
}
document.addEventListener(`DOMContentLoaded`, documentReady, false);

// WINDOW Load
function windowLoad() {
    initTriggers();
}
window.addEventListener(`load`, windowLoad, false);

// WINDOW Scroll
function windowScroll() {}
window.addEventListener(`scroll`, windowScroll, { passive: true });
