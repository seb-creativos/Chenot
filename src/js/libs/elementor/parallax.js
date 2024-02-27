export default function parallax() {
    document.querySelectorAll("[data-parallax] img, [data-parallax] video").forEach((element) => {
        element.setAttribute("data-speed", "auto");
    });
}
