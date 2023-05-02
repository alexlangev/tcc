import styled from "styled-components";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { COLORS } from "utils/constants";

export default function MountainHero({ children }) {
  return (
    <>
      <SkyBg />
      <SkyBg2 />
      <LogoSkyWrapper>
        <LogoSky src={"/images/logos/tcc-logo-2.svg"}></LogoSky>
      </LogoSkyWrapper>
      <Parallax pages={2}>
        <ParallaxLayer
          speed={-0.65}
          style={{
            backgroundImage: `url("/images/hero/mountains-layer1.svg")`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
          }}
        />
        <ParallaxLayer
          speed={-0.6}
          style={{
            backgroundImage: `url("/images/hero/mountains-layer2.svg")`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
          }}
        />
        <ParallaxLayer
          speed={-0.55}
          style={{
            backgroundImage: `url("/images/hero/mountains-layer3.svg")`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
          }}
        />
        <ParallaxLayer
          speed={-0.45}
          style={{
            backgroundImage: `url("/images/hero/mountains-layer4.svg")`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
          }}
        />
        <ParallaxLayer
          speed={-0.44}
          style={{
            backgroundImage: `url("/images/hero/mountains-layer5.svg")`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
          }}
        />
        <ParallaxLayer
          speed={-0.35}
          style={{
            backgroundImage: `url("/images/hero/mountains-layer6.svg")`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
          }}
        />
        <ParallaxLayer
          speed={-0.175}
          style={{
            backgroundImage: `url("/images/hero/mountains-layer7.svg")`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
          }}
        />
        <ParallaxLayer
          style={{
            backgroundImage: `url("/images/hero/mountains-layer8.svg")`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
          }}
        />
        <ContentParallax offset={1}>{children}</ContentParallax>
      </Parallax>
    </>
  );
}

const SkyBg = styled.div`
  background-image: ${COLORS.heroBg};
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

const LogoSkyWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 5%;
  width: 100%;
  z-index: -99;
`;

const LogoSky = styled.img`
  width: 40%;
`;

const ContentParallax = styled(ParallaxLayer)`
  background-color: ${COLORS.mainBg};
`;
