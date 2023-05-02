import { animated } from "react-spring";
import useBoop from "/utils/hooks/useBoop";

export default function Boop({ children, ...boopConfig }) {
  const [style, trigger] = useBoop(boopConfig);
  return (
    <animated.span onMouseEnter={trigger} style={style}>
      {children}
    </animated.span>
  );
}
