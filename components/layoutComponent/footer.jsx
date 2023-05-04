import MaxWidthWrapper from "components/layoutGeneral/maxWidthWrapper";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import Logo from "public/images/logos/tcc-logo-2.svg";
import Github from "public/images/icons/github-icon.svg";
import Twitter from "public/images/icons/twitter-icon.svg";
import Linkedin from "public/images/icons/linkedin-icon.svg";

import { Boop } from "components";
import { SocialLink } from "components";
import { COLORS } from "utils/constants";

export default function Footer() {
  return (
    <MaxWidthWrapper>
      <ContentWrapper>
        <Boop scale={1.05} rotation={-1.5}>
          <Image src={Logo} width={250} alt={"The Coding Canuck"} />
        </Boop>
        <SocialBar>
          <SocialLink
            linkHref={"https://twitter.com/thecodingcanuck"}
            logoSrc={Twitter}
            logoWidth={32}
            logoAlt={"twitter"}
          >
            Twitter
          </SocialLink>
          <SocialLink
            linkHref={"https://github.com/alexlangev"}
            logoSrc={Github}
            logoWidth={32}
            logoAlt={"Github"}
          >
            Github
          </SocialLink>
          <SocialLink
            linkHref={"https://www.linkedin.com/in/alexlangev/"}
            logoSrc={Linkedin}
            logoWidth={32}
            logoAlt={"Linkedin"}
          >
            Twitter
          </SocialLink>
        </SocialBar>
        <div>
          <span>{`© 2023 `}</span>
          <span>
            <WebsiteLink href="/">{"The Coding Canuck"}</WebsiteLink>
          </span>
          <span>{`. All rights reserved.`}</span>
        </div>
      </ContentWrapper>
    </MaxWidthWrapper>
  );
}

const ContentWrapper = styled.footer`
  color: ${COLORS.main};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px 0;
`;

const SocialBar = styled.ul`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: fit-content;
  padding-bottom: 24px;
  padding-top: 24px;
`;

const WebsiteLink = styled(Link)`
  /* color: ${COLORS.A}; */
  cursor: pointer;
  text-decoration: underline;

  &:hover {
    font-weight: 600;
  }
`;
