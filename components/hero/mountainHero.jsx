import styled from "styled-components";
import { COLORS } from "utils/constants";

export default function MountainHero({ children }) {
  return (
    <Wrapper>
      <SkyBg />
      <SkyBg2 />
      <MountainRangeWrapper>
        <LogoSkyWrapper>
          <LogoSky src={"/images/logos/tcc-logo-2.svg"} />
        </LogoSkyWrapper>
        <MountainRange
          style={{
            backgroundImage: `url("/images/hero/mountains-layer1.svg")`,
            zIndex: -99,
          }}
        />
        <MountainRange
          style={{
            backgroundImage: `url("/images/hero/mountains-layer2.svg")`,
            zIndex: -98,
          }}
        />
        <MountainRange
          style={{
            backgroundImage: `url("/images/hero/mountains-layer3.svg")`,
            zIndex: -97,
          }}
        />
        <MountainRange
          style={{
            backgroundImage: `url("/images/hero/mountains-layer4.svg")`,
            zIndex: -96,
          }}
        />
        <MountainRange
          style={{
            backgroundImage: `url("/images/hero/mountains-layer5.svg")`,
            zIndex: -95,
          }}
        />
        <MountainRange
          style={{
            backgroundImage: `url("/images/hero/mountains-layer6.svg")`,
            zIndex: -94,
          }}
        />
        <MountainRange
          style={{
            backgroundImage: `url("/images/hero/mountains-layer7.svg")`,
            zIndex: -93,
          }}
        />
        <MountainRange
          style={{
            backgroundImage: `url("/images/hero/mountains-layer8.svg")`,
            zIndex: -92,
          }}
        />
      </MountainRangeWrapper>
      <ChildrenWrapper>{children}</ChildrenWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const SkyBg = styled.div`
  background-color: ${COLORS.heroBg};
  position: absolute;
  width: 100%;
  height: 100vh;
  z-index: -101;
`;

const SkyBg2 = styled.div`
  background-image: url("/images/hero/gradient-sky.svg");
  position: absolute;
  background-attachment: fixed;
  background-size: cover;
  background-position: center center;
  width: 100%;
  height: 100vh;
  z-index: -100;
`;

const MountainRangeWrapper = styled.div`
  height: 100vh;
`;

const MountainRange = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center center;
`;

const LogoSkyWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 5%;
  width: 100%;
  z-index: -99;
`;

const LogoSky = styled.img`
  width: 40%;
`;

const ChildrenWrapper = styled.div`
  position: relative;
  z-index: 1;
  background-color: ${COLORS.mainBg};
`;
