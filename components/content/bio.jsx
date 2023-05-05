import styled from "styled-components";
import { SocialLink } from "components";
import Github from "public/images/icons/github-icon.svg";
import Twitter from "public/images/icons/twitter-icon.svg";
import Linkedin from "public/images/icons/linkedin-icon.svg";

export default function Bio() {
  const LOGO_WIDTH = 32;
  return (
    <Wrapper>
      <HelloWrapper>
        <HelloPrefix>Hi internet,</HelloPrefix>
        <HelloSuffix>
          welcome to <strong>The Coding Canuck</strong> blog! I{"'"}m{" "}
          <strong>Alex Langevin</strong>, a <strong>security researcher</strong>
          , <strong>developper</strong> and <em>math enthusiast</em>.
        </HelloSuffix>
      </HelloWrapper>
      <ul>
        <ListItem>
          I write technical <a>articles</a> and occasionnal carrer updates
        </ListItem>
        <ListItem>
          I track my <a>performance</a> as a security researcher
        </ListItem>
        <ListItem>
          I write interactive learning <a>tools and cheatsheets</a>
        </ListItem>
        <ListItem>
          I share my <a>daily grind</a>
        </ListItem>
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

const Wrapper = styled.article``;

const HelloWrapper = styled.p`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  height: fit-content;
  flex-wrap: wrap; /* allow content to wrap onto next line */
`;

const HelloPrefix = styled.span`
  font-size: 2rem;
`;

const ListItem = styled.li`
  list-style: disc;
`;

const HelloSuffix = styled.span``;

const SocialLinkList = styled.ul`
  display: flex;
  flex-direction: row;
  * :not(:last-child) {
    margin-right: 4px;
  }
`;
