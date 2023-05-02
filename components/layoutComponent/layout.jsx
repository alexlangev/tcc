import styled from "styled-components";
import { Navbar, MaxWidthWrapper, Footer } from "components";

export default function Layout({ children }) {
  return (
    <>
      <Wrapper>
        <Navbar />
        <main>
          <MaxWidthWrapper>{children}</MaxWidthWrapper>
        </main>
        <Footer />
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
