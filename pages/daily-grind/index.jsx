import styled from "styled-components";
import Link from "next/link";
import { COLORS } from "@/utils/constants";
import { PageHeader, DesktopSpacer } from "@/components";

export default function DailyGrindPage() {
  const TITLE = "Daily Grind";
  const SUBTITLE = "Stuff I work on daily";

  return (
    <>
      <DesktopSpacer height={32} />
      <PageHeader title={TITLE} sub={SUBTITLE} />
      <DesktopSpacer height={64} />
      <Category>Capture The Flag Challenges</Category>
      <Content>
        <Link href={"daily-grind/ethernaut"}>
          <h3>Ethernaut</h3>
          <Subtitle>
            Ethernaut is a web3/Solidity based wargame played in the Ethereum
            Virtual Machine. Each level is a smart contract that needs to be
            'hacked'.
          </Subtitle>
        </Link>
      </Content>
    </>
  );
}

const Subtitle = styled.p`
  color: ${COLORS.sub};
`;

const Category = styled.h2`
  margin-bottom: 32px;
`;

const Content = styled.article``;
