import initGsapAos from "./triggers/gsapAos";
import initGsapIsElementSticked from "./triggers/gsapIsElementSticked";
import initGsapIsElementInview from "./triggers/gsapIsElementInview";

export default function initTriggers() {
    initGsapAos();
    initGsapIsElementSticked("#site-header");
    initGsapIsElementInview("#site-footer");
}
