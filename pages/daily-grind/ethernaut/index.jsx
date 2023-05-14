import { getFilesByCategory, getFileContent } from "@/utils/helpers/mdxStuff";
import Link from "next/link";

export default function EthernautPage({ allFrontMatter }) {
  console.log("allFrontMatter", allFrontMatter);
  return (
    <>
      <h1>Ethernaut</h1>

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
