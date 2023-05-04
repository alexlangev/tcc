import styled from "styled-components";
import { SocialLink } from "components";
import Github from "public/images/icons/github-icon.svg";
import Twitter from "public/images/icons/twitter-icon.svg";
import Linkedin from "public/images/icons/linkedin-icon.svg";
import { Boop } from "components";

export default function Bio() {
  const LOGO_WIDTH = 32;
  return (
    <Wrapper>
      <HelloWrapper>
        <HelloPrefix>Hi internet!</HelloPrefix>
        <HelloSuffix>
          I am a <strong>security researcher</strong> and{" "}
          <strong>developper</strong> and <em>mathematics enthusiast</em>.
        </HelloSuffix>
      </HelloWrapper>
      <ul>
        <li>I blog about technical subjects and occasionnal carrer updates</li>
        <li>I keep track my performance as a security researcher</li>
        <li>I write interactive tools and guides mostly for myself</li>
        <li>I share my daily grind</li>
      </ul>
      <p>Feel free to contact me on one of these platforms:</p>
      <SocialLinkList>
        {" "}
        <SocialLink
          linkHref={"https://twitter.com/thecodingcanuck"}
          logoWidth={LOGO_WIDTH}
          logoSrc={Twitter}
          logoAlt={"twitter"}
        />{" "}
        <SocialLink
          linkHref={"https://github.com/alexlangev"}
          logoWidth={LOGO_WIDTH}
          logoSrc={Github}
          logoAlt={"github"}
        />
        <SocialLink
          linkHref={"https://www.linkedin.com/in/alexlangev/"}
          logoWidth={LOGO_WIDTH}
          logoSrc={Linkedin}
          logoAlt={"linkedin"}
        />
      </SocialLinkList>
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const HelloWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  height: fit-content;
  flex-wrap: wrap; /* allow content to wrap onto next line */
`;

const HelloPrefix = styled.h2`
  line-height: 1.1em;
  padding-right: 0.15em;
`;

const HelloSuffix = styled.p``;

const SocialLinkList = styled.ul`
  display: flex;
  flex-direction: row;
`;
