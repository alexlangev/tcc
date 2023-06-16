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

      <CategoryName>Capture The Flag Challenges</CategoryName>

      <Content>
        <Link href={"daily-grind/ethernaut"}>
          <h3>Ethernaut</h3>
          <Subtitle>
            {`Ethernaut is a web3/Solidity based wargame played in the Ethereum
            Virtual Machine. Each level is a smart contract that needs to be
            'hacked'.`}
          </Subtitle>
        </Link>
      </Content>

      <CategoryName>Coding Challenges</CategoryName>

      <Content>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={"https://leetcode.com/AlexLangev/"}
        >
          <h3>LeetCode</h3>
          <Subtitle>{`One of the leading platform for coding skills. It offers a plethora of 
          algorithmic challenges that range from data structures to databases.`}</Subtitle>
        </a>
      </Content>

      <Content>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={"https://www.smartcontract.engineer/leaderboard"}
        >
          <h3>Smart Contract Engineer</h3>
          <Subtitle>
            The LeetCode for Solidity engineers. Look for{" "}
            <em>The Coding Canuck</em> in the <strong>Top 100</strong>{" "}
            leaderboard.
          </Subtitle>
        </a>
      </Content>
    </>
  );
}

const Subtitle = styled.p`
  color: ${COLORS.sub};
`;

const CategoryName = styled.h2`
  margin-bottom: 32px;
`;

const Content = styled.article``;
