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
import { COLORS, QUERIES } from "utils/constants";

export default function Footer() {
  return (
    <MaxWidthWrapper>
      <ContentWrapper>
        <Boop scale={1.025} rotation={-1}>
          <Link href="/">
            <Image src={Logo} width={250} alt={"The Coding Canuck"} />
          </Link>
        </Boop>
        <SocialBar>
          <Boop scale={1.05} rotation={1}>
            <li>
              <SocialLink
                linkHref={"https://twitter.com/thecodingcanuck"}
                logoSrc={Twitter}
                logoWidth={32}
                logoAlt={"twitter"}
              >
                <Label>Twitter</Label>
              </SocialLink>
            </li>
          </Boop>
          <Boop scale={1.05} rotation={1}>
            <li>
              <SocialLink
                linkHref={"https://github.com/alexlangev"}
                logoSrc={Github}
                logoWidth={32}
                logoAlt={"Github"}
              >
                <Label>Github</Label>
              </SocialLink>
            </li>
          </Boop>
          <Boop scale={1.05} rotation={1}>
            <li>
              <SocialLink
                linkHref={"https://www.linkedin.com/in/alexlangev/"}
                logoSrc={Linkedin}
                logoWidth={32}
                logoAlt={"Linkedin"}
              >
                <Label>LinkedIn</Label>
              </SocialLink>
            </li>
          </Boop>
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
  margin: 0;

  li {
    margin-right: 10px;
    list-style: none;
  }
`;

const Label = styled.span`
  @media ${QUERIES.mobile} {
    display: none  
  }
`

const WebsiteLink = styled(Link)``;
