import { getFilesByCategory, getFileContent } from "@/utils/helpers/mdxStuff";
import Link from "next/link";
import { PageHeader, DesktopSpacer } from "@/components";

export default function EthernautPage({ allFrontMatter }) {
  const TITLE = "Ethernaut";
  const SUBTITLE =
    "Ethernaut is a web3/Solidity based wargame played in the Ethereum Virtual Machine. Each level is a smart contract that needs to be 'hacked'.";
  return (
    <>
      <DesktopSpacer height={32} />
      <PageHeader title={TITLE} sub={SUBTITLE} />
      <DesktopSpacer height={64} />
      <ul>
        {allFrontMatter.map((level) => (
          <li key={level.slug}>
            <Link href={`ethernaut/${level.slug}`}>{level.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export async function getStaticProps() {
  const levels = getFilesByCategory("ethernaut");

  const allFrontMatter = await Promise.all(
    levels.map(async (level) => {
      const { frontmatter } = await getFileContent("ethernaut", level);
      return frontmatter;
    })
  );

  return {
    props: { allFrontMatter },
  };
}
