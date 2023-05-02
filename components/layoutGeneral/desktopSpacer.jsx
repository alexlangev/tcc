/*
This component is simply a div that takes full available width and takes in the height value in pixels
*/

import styled from "styled-components";

export default function DesktopSpacer({ height }) {
  return <Spacer height={height} />;
}

const Spacer = styled.div`
  height: ${(props) => props.height}px;
`;
