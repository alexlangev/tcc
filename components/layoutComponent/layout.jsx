import styled from "styled-components";
import { Navbar, MaxWidthWrapper, Footer } from "/components";

export default function Layout({ children }) {
  return (
    <>
      <Wrapper>
        <div>
          {/* div used so that space-between works between content and footer*/}
          <Navbar />
          <main>
            <MaxWidthWrapper>{children}</MaxWidthWrapper>
          </main>
        </div>
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
