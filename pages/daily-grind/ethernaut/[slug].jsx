import { getMDXComponent } from "mdx-bundler/client";
import { useMemo } from "react";
import { getFilesByCategory, getFileContent } from "@/utils/helpers/mdxStuff";
import { SyntaxHighlighter } from "/components";

export default function Page({ code, frontmatter }) {
  console.log(frontmatter);
  const Content = useMemo(() => getMDXComponent(code), [code]);

  return (
    <>
      <h1>{frontmatter.title}</h1>
      <Content components={{ pre: SyntaxHighlighter }} />
    </>
  );
}

export async function getStaticPaths() {
  const fileNames = getFilesByCategory("ethernaut");

  const slugs = fileNames.map((name) => {
    return {
      params: {
        slug: name,
      },
    };
  });

  return {
    paths: slugs,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { code, frontmatter } = await getFileContent("ethernaut", params.slug);
  console.log(frontmatter);
  return {
    props: { code, frontmatter },
  };
}
