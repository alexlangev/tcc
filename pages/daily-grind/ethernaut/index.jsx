import { getFilesByCategory, getFileContent } from "@/utils/helpers/mdxStuff";
import Link from "next/link";
import { PageHeader, DesktopSpacer } from "@/components";

export default function EthernautPage({ allFrontMatter }) {
  const TITLE = "Ethernaut";
  const SUBTITLE = "Stuff I work on daily";
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
  // get all levels in the directory
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
