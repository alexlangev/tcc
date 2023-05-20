import { themes } from "prism-react-renderer";
import { COLORS } from "@/utils/constants";

const myCustomTheme = {
  ...themes.okaidia,
  plain: {
    backgroundColor: COLORS.secBg,
  },
  styles: [...themes.okaidia.styles],
};

export default myCustomTheme;
