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
  bg1: "hsl(215, 44%, 8%)", // dark blue - first mountain range - same as mainBg
  bg2: "hsl(211, 49%, 11%)", // 2nd mountain range
  bg3: "hsl(210, 53%, 15%)", // 3rd mountain range
  bg4: "hsl(201, 54%, 21%)", // 4th mountain range
  bg5: "hsl(182, 38%, 34%)", // 5th mountain range
  bg6: "hsl(194, 51%, 28%)", // 6th mountain range
  bg7: "hsl(183, 32%, 38%)", // 7th mountain range
  bg8: "hsl(170, 23%, 43%)", // 8th mountain range
  bgSky: "hsl(20, 72%, 65%)", // peachy sky

  mainBg: "hsl(215, 44%, 8%)",
  secBg: "hsl(210, 53%, 15%)",
  heroBg: "hsl(20, 72%, 65%)", // peach
};

export { BREAKPOINTS, QUERIES, COLORS };
