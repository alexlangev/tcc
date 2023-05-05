const BREAKPOINTS = {
  tabletMin: 600,
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
  h2: "hsl(29, 100%, 63%)", // orange
  main: "hsl(0deg 0% 100% / 0.95)", // offwhite
  strong: "hsl(320, 100%, 60%)", // neon purple
  em: "hsl(0deg 0% 100% / 0.95)", // offwhite
  a: "#54867e",

  // Backgrounds
  mainBg: "hsl(215, 44%, 8%)", // dark blue
  heroBg: "hsl(20, 72%, 65%)", // peach
};

export { BREAKPOINTS, QUERIES, COLORS };
