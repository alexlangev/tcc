import styled from "styled-components";
import Image from "next/image";
import { Boop } from "components";

export default function SocialLink({
  logoWidth,
  logoAlt,
  logoSrc,
  children,
  linkHref,
}) {
  return (
    <Boop scale={1.05} rotation={2}>
      <InnerWrapper href={linkHref} target="_blank" rel="noopener noreferrer">
        <Logo src={logoSrc} width={logoWidth} alt={logoAlt}></Logo>
        <Label>{children}</Label>
      </InnerWrapper>
    </Boop>
  );
}

const InnerWrapper = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Logo = styled(Image)`
  padding-right: 5px;
`;

const Label = styled.span`
  font-size: 1.2rem;
`;
