import MaxWidthWrapper from "components/layoutGeneral/maxWidthWrapper";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import Logo from "public/images/logos/tcc-logo-2.svg";
import Github from "public/images/icons/github-icon.svg";
import Twitter from "public/images/icons/twitter-icon.svg";
// import Yt from "../../public/assets/youtube-icon.svg";
import { Boop } from "components";
import { COLORS } from "utils/constants";

export default function Footer() {
  return (
    <MaxWidthWrapper>
      <ContentWrapper>
        <Boop scale={1.05} rotation={-1.5}>
          <Image src={Logo} width={250} alt={"The Coding Canuck"} />
        </Boop>
        <SocialBar>
          <SocialItemWrapper>
            <SocialLink
              href={"https://github.com/alexlangev"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Boop scale={1.1} rotation={-3}>
                <InnerBoopWrapper>
                  <Icon src={Github} width={32} alt={"Github"} />
                  Github
                </InnerBoopWrapper>
              </Boop>
            </SocialLink>
          </SocialItemWrapper>
          <SocialItemWrapper>
            <SocialLink
              href={"https://twitter.com/thecodingcanuck"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Boop scale={1.1} rotation={3}>
                <InnerBoopWrapper>
                  <Icon src={Twitter} width={34} alt={"Twitter"} />
                  Twitter
                </InnerBoopWrapper>
              </Boop>
            </SocialLink>
          </SocialItemWrapper>
          {/* <SocialItemWrapper>
            <SocialLink
              href={"https://www.youtube.com/@thecodingcanuck"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon src={Yt} width={38} alt={"Youtube"} />
              Youtube
            </SocialLink>
          </SocialItemWrapper> */}
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

const SocialItemWrapper = styled.li`
  padding: 0 10px;
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  font-size: 1.2rem;
`;

const InnerBoopWrapper = styled.div`
  display: flex;
`;

const Icon = styled(Image)`
  padding-right: 5px;
`;

const WebsiteLink = styled(Link)`
  /* color: ${COLORS.A}; */
  cursor: pointer;
  text-decoration: underline;

  &:hover {
    font-weight: 600;
  }
`;
