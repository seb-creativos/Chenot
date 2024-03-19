import { createDebugLogger } from "./initDebug";
const debug = false;
const consoleLog = createDebugLogger(debug);

export default function initVideos() {
    const videos = document.querySelectorAll("video");
    const userPaused = new Set();
    const autoPaused = new Set();

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                const video = entry.target;
                consoleLog(
                    `Video is now ${
                        entry.isIntersecting ? "%cwithin%c" : "%cout of%c"
                    } the viewport.`,
                    "info"
                );

                if (entry.isIntersecting) {
                    if (userPaused.has(video)) {
                        consoleLog(
                            "Video remains %cpaused%c even though it entered the viewport as %cthe user has explicitly paused it%c before.",
                            "warning"
                        );
                    } else {
                        video.play();
                        consoleLog(
                            "Video is now %cplaying as it entered the viewport%c and was %cnot marked as userPaused%c.",
                            "success"
                        );
                    }
                } else {
                    if (!video.paused) {
                        video.pause();
                        autoPaused.add(video);
                        consoleLog(
                            "Video is now %cpaused as it left the viewport%c. It is now marked as %cautoPaused%c.",
                            "error"
                        );
                    }
                }
            });
        },
        { threshold: 0 }
    );

    videos.forEach((video) => {
        observer.observe(video);

        video.addEventListener("pause", () => {
            if (!autoPaused.has(video)) {
                userPaused.add(video);
                consoleLog(
                    "Video was %cpaused by the user%c. It is now marked as %cuserPaused%c.",
                    "warning"
                );
            } else {
                autoPaused.delete(video);
            }
        });

        video.addEventListener("play", () => {
            if (userPaused.has(video)) {
                userPaused.delete(video);
                consoleLog(
                    "Video %cplayed by user%c. It has been removed from the %cuserPaused%c set to allow automatic play in the future.",
                    "success"
                );
            }
        });
    });
}
