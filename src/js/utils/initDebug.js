const debugStyles = {
    default: "",
    highlight:
        "background-color: #ffc107; color: #282828; padding: 4px 12px; border-radius: 5px;",
    action: "color: #4fd1c5;",
    error: "color: #ef476f;",
    success: "color: #06d6a0;",
    info: "color: #118ab2;",
};

/**
 * Creates a debug logger that respects the given debug flag.
 * @param {boolean} debugEnabled - Whether debugging is enabled for the logger.
 * @returns {Function} A debug logging function.
 */
const createDebugLogger = (debugEnabled) => {
    return (message, styleKey = "default") => {
        if (!debugEnabled) {
            return;
        }

        const style = debugStyles[styleKey] || debugStyles.default;

        if (message.includes("%c")) {
            console.log(message, style);
        } else {
            console.log(`%c${message}`, style);
        }
    };
};

export { createDebugLogger, debugStyles };
