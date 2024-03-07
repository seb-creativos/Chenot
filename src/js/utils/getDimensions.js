/**
 * Get the specified dimensions (height, width, or both) of the selectors.
 * @param {string} dimension 'height', 'width', or 'both' to specify which dimensions to get.
 * @param  {...any} selectors Selectors of the elements to measure.
 */
const getDimensions = (dimension, ...selectors) => {
    selectors.forEach((selector) => {
        if (typeof selector !== "string") {
            console.error(
                `Each selector should be a string, but got ${typeof selector}: ${selector}`
            );
            return;
        }

        const target = document.querySelector(selector);

        if (!target) {
            console.warn(`No element matches the selector "${selector}".`);
            return;
        }

        const rect = target.getBoundingClientRect();
        const targetName = selector.replace(/[^a-zA-Z0-9 _-]/g, "");

        if (dimension === "height" || dimension === "both") {
            document.documentElement.style.setProperty(
                `--${targetName}-height`,
                `${rect.height}px`
            );
        }

        if (dimension === "width" || dimension === "both") {
            document.documentElement.style.setProperty(
                `--${targetName}-width`,
                `${rect.width}px`
            );
        }
    });
};

export default getDimensions;
