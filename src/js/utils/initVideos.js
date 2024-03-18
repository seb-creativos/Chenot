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
                if (entry.isIntersecting) {
                    if (!userPaused.has(video)) {
                        video.play();
                        consoleLog(
                            "Video %cplaying as it entered the viewport%c and %cnot user paused%c.",
                            "success"
                        );
                    }
                } else {
                    if (!video.paused) {
                        video.pause();
                        autoPaused.add(video);
                        consoleLog(
                            "Video %cpaused as it left the viewport%c.",
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
                consoleLog("Video %cpaused by user%c.", "highlight");
            } else {
                autoPaused.delete(video);
            }
        });

        video.addEventListener("play", () => {
            if (userPaused.has(video)) {
                userPaused.delete(video);
                consoleLog(
                    "Video %cplayed by user%c, removed from %cuserPaused%c if present.",
                    "highlight"
                );
            }
        });
    });
}
