import styled from "styled-components";
import { SocialLink } from "components";
import Image from "next/image";
import AvatarPicture from "public/images/avatar.png";
import Github from "public/images/icons/github-icon.svg";
import Twitter from "public/images/icons/twitter-icon.svg";
import Linkedin from "public/images/icons/linkedin-icon.svg";
import { COLORS, QUERIES } from "utils/constants";
import Link from "next/link";

export default function Bio() {
  const LOGO_WIDTH = 32;
  return (
    <Wrapper>
      <HelloWrapper>
        <Avatar
          src={AvatarPicture}
          alt="Avatar of the author"
          width={300}
          height={300}
        />
        <Hello>Hi internet!</Hello>
      </HelloWrapper>
      <BioText>
        Welcome to <strong>The Coding Canuck</strong> blog! I{"'"}m{" "}
        <strong>Alex Langevin</strong>, a <strong>security researcher</strong>,{" "}
        <strong>developper</strong> and <em>math enthusiast</em>.
      </BioText>
      <ul>
        {/* <ListItem>
          I write technical <a>articles</a> and occasionnal carrer updates
        </ListItem> */}
        {/* <ListItem>
          I track my <a>performance</a> as a security researcher
        </ListItem> */}
        {/* <ListItem>
          I write interactive learning <a>tools and cheatsheets</a>
        </ListItem> */}
        {/* <ListItem>
          I share my <Link href={"/daily-grind"}>daily grind</Link>
        </ListItem> */}
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
      <hr />
    </Wrapper>
  );
}

const Wrapper = styled.article``;

const HelloWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 60px;
  margin-top: 60px;
  @media ${QUERIES.mobile} {
    flex-direction: column-reverse;
  }
`;

const Avatar = styled(Image)`
  border-radius: 50%;
`;

const Hello = styled.h2`
  font-size: 4rem;
  width: min-content;
  line-height: 1.5;
  color: ${COLORS.main};
`;

const BioText = styled.p``;

const ListItem = styled.li`
  list-style: disc;
`;

const SocialLinkList = styled.ul`
  display: flex;
  flex-direction: row;
  * :not(:last-child) {
    margin-right: 4px;
  }
`;
