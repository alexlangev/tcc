import { createGlobalStyle } from "styled-components";
import { COLORS } from "../utils/constants";

const GlobalStyle = createGlobalStyle`
// http://meyerweb.com/eric/tools/css/reset/ 
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}

/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}

body {  
	line-height: 1;
}

ol, ul {
	list-style: none;
}

blockquote, q {
	quotes: none;
}

blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}

table {
	border-collapse: collapse;
	border-spacing: 0;
}

// Josh Comeau's Css reset
// 1. Use a more-intuitive box-sizing model.
*, *::before, *::after {
  box-sizing: border-box;
}

// 2. Remove default margin
* {
  margin: 0;
}

// 3. Allow percentage-based heights in the application
html, body {
  height: 100%;
}

/*
  Typographic tweaks!
  4. Add accessible line-height
  5. Improve text rendering
*/
body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}

// 6. Improve media defaults
img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}

// 7. Remove built-in form typography styles
input, button, textarea, select {
  font: inherit;
}

// 8. Avoid text overflows
p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}

//  9. Create a root stacking context
#root, #__next {
  isolation: isolate;
}

// ---------------------------------- My own styles ----------------------------------
// ----------------- Resets -----------------

// reset styles from ul, ol and li
ul, ol, li {
  list-style: none;
}

// reset styles from buttons
button {
  border: none;
  background: none;
  outline: none;
  cursor: pointer;
}

// reset styles from a
a {
  text-decoration: none;
}

// ----------------- general theme -----------------
body {
  background-color: ${COLORS.mainBg};
}

h1, h2, h3, h4, p, a, span, div, li, strong, em, td {
  -webkit-font-smoothing: antialiased;
  color: ${COLORS.main}
}

h1 {
  font-size: 2.5rem;
}

h2 {
  font-size: 2rem;
}

// ----------------- Math and code blocks -----------------
`;

export default GlobalStyle;
