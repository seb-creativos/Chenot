const debugStyles = {
    warning:
        "background-color: #ffc107; color: #282828; padding: 0.25rem 0.5rem; border-radius: 0.3125rem;",
    success:
        "background-color: #06d6a0; color: #282828; padding: 0.25rem 0.5rem; border-radius: 0.3125rem;",
    error: "background-color: #ef476f; color: #fff; padding: 0.25rem 0.5rem; border-radius: 0.3125rem;",
    info: "background-color: #000; color: #fff; padding: 0.25rem 0.5rem; border-radius: 0.3125rem;",
};

/**
 * Creates a conditional debug logger with support for styled console messages.
 *
 * @param {boolean} debugEnabled - If true, enables the logging of messages; otherwise, no output is produced.
 * @returns {Function} A function that logs styled messages to the console. It accepts a message string, optionally containing "%c" placeholders for styling, and a styleKey indicating the CSS style to apply. Styles are defined in a separate `debugStyles` object.
 *
 * Example:
 *
 * const debug = true;
 * const consoleLog = createDebugLogger(debug);
 *
 * consoleLog("Warning: %cThis part is styled%c, this part is not.", "warning");
 */
const createDebugLogger = (debugEnabled) => {
    return (message, styleKey) => {
        if (!debugEnabled) return;

        const style = debugStyles[styleKey];
        const logArgs = [message];
        const styleDirectivesCount = (message.match(/%c/g) || []).length;

        for (let i = 0; i < styleDirectivesCount; i++) {
            logArgs.push(i % 2 === 0 ? style : "");
        }

        console.log(...logArgs);
    };
};

export { createDebugLogger };
