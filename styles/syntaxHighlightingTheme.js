import { themes } from "prism-react-renderer";
import { COLORS } from "@/utils/constants";

const myCustomTheme = {
  ...themes.okaidia,
  plain: {
    backgroundColor: COLORS.secBg,
  },
  styles: [
    ...themes.okaidia.styles,
    // {
    //   types: ["comment", "prolog", "doctype", "cdata", "punctuation"],
    //   style: {
    //     color: "rgb(197, 134, 192)",
    //   },
    // },
    // {
    //   types: ["namespace"],
    //   style: {
    //     opacity: 0.7,
    //   },
    // },
  ],
};

export default myCustomTheme;
