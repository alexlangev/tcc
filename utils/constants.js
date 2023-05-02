const BREAKPOINTS = {
  tabletMin: 550,
  laptopMin: 1100,
  desktopMin: 1500,
};

const QUERIES = {
  mobile: `(max-width: ${BREAKPOINTS.tabletMin}px)`,
  tabletAndDown: `(max-width: ${BREAKPOINTS.laptopMin}px)`,
  laptopAndDown: `(max-width: ${BREAKPOINTS.desktopMin}px)`,
};

// TODO create tokens for all padding and margins. multiples of 8px?

const COLORS = {
  black: "hsl(0deg 0% 0%)",
  white: "hsl(0deg 0% 100%)",

  // Fonts
  main: "hsl(0deg 0% 100% / 0.95)",

  // Backgrounds
  mainBg: "hsl(215, 44%, 8%)",
  heroBg: "hsl(20, 72%, 65%)",
};

export { BREAKPOINTS, QUERIES, COLORS };
