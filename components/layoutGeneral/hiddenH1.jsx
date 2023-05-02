import styled from "styled-components";

export default function HiddenH1({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

const Wrapper = styled.h1`
  position: absolute;
  overflow: hidden;
  clip: rect(0 0 0 0);
  height: 1px;
  width: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
`;
