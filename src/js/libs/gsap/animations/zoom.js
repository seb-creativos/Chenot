export default {
    "zoom-in": {
        origin: { scale: 0.8 },
        target: { scale: 1 },
    },
    "zoom-in-fade": {
        origin: { opacity: 0, scale: 0.8 },
        target: { opacity: 1, scale: 1 },
    },
    "zoom-in-sepia": {
        origin: { filter: "sepia(50%)", scale: 0.8 },
        target: { filter: "sepia(0%)", scale: 1 },
    },
    "zoom-out": {
        origin: { scale: 1.2 },
        target: { scale: 1 },
    },
    "zoom-out-fade": {
        origin: { opacity: 0, scale: 1.2 },
        target: { opacity: 1, scale: 1 },
    },
    "zoom-out-sepia": {
        origin: { filter: "sepia(50%)", scale: 1.2 },
        target: { filter: "sepia(0%)", scale: 1 },
    },
    "zoom-out-blur": {
        origin: { filter: "blur(14px)", scale: 1.2 },
        target: { filter: "blur(0px)", scale: 1 },
    },
};
