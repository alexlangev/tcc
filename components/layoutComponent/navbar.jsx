import styled from "styled-components";
import MaxWidthWrapper from "components/layoutGeneral/maxWidthWrapper";
import Link from "next/link";
import Image from "next/image";
import Logo from "public/images/logos/tcc-logo-1.svg";
import { DesktopSpacer, Boop } from "components";
import { COLORS } from "../../utils/constants";

export default function Navbar() {
  return (
    <Wrapper>
      <MaxWidthWrapper>
        <DesktopSpacer height={"22"} /> {/* Keep this? */}
        <ContentWrapper>
          <Boop scale={1.025} rotation={-1}>
            <Link href="/">
              <Image src={Logo} width={350} alt={"The Coding Canuck"} />
            </Link>
          </Boop>
          <NavSectionWrapper>
            <NavList>
              {/* <Boop scale={1.1} rotation={3}>
              <NavItem>
                <StyledLink href="/blog">Blog</StyledLink>
              </NavItem>
            </Boop> */}
              {/* <Boop scale={1.1} rotation={3}>
                <NavItem>
                  <StyledLink href="/support">Toolbox</StyledLink>
                </NavItem>
              </Boop> */}
              {/* <Boop scale={1.1} rotation={3}>
              <NavItem>
                <StyledLink href="/support">Portfolio</StyledLink>
              </NavItem>
            </Boop> */}
              {/* <Boop scale={1.1} rotation={3}>
                <NavItem>
                  <StyledLink href="/daily_grind">Daily Grind</StyledLink>
                </NavItem>
              </Boop> */}
            </NavList>
          </NavSectionWrapper>
        </ContentWrapper>
        <DesktopSpacer height={"22"} /> {/* Keep this? */}
      </MaxWidthWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: sticky;
  top: 0;
  background-color: ${COLORS.mainBg};
  z-index: 1;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const NavSectionWrapper = styled.nav`
  display: flex;
  align-items: center;
  color: ${COLORS.WHITE};
`;

const NavList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const NavItem = styled.li`
  padding-left: 14px;
`;

const StyledLink = styled(Link)`
  font-size: 1.2rem;
  padding: 5px 10px;
`;
