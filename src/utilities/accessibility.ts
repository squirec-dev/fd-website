const noMotionPreference = (): boolean => (
    window.matchMedia('(prefers-reduced-motion: no-preference)').matches === true
);

export {
    noMotionPreference,
};
