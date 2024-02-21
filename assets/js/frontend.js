// ======================
// GLOBALS
// ======================

window.DEBUG = false;
if (window.DEBUG) document.body.classList.add("debug--enabled");

// ======================
// EVENT LISTENERS
// ======================

// DOC Ready
function documentReady() {}
document.addEventListener(`DOMContentLoaded`, documentReady, false);

// WINDOW Load
function windowLoad() {}
window.addEventListener(`load`, windowLoad, false);

// WINDOW Scroll
function windowScroll() {}
window.addEventListener(`scroll`, windowScroll, { passive: true });
