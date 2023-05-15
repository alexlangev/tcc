import { getMDXComponent } from "mdx-bundler/client";
import { useMemo } from "react";
import { getFilesByCategory, getFileContent } from "@/utils/helpers/mdxStuff";
import { SyntaxHighlighter, PageHeader, DesktopSpacer } from "/components";
import * as components from "../../../components";

export default function Page({ code, frontmatter }) {
  const Content = useMemo(() => getMDXComponent(code), [code]);

  return (
    <>
      <DesktopSpacer height={32} />
      <PageHeader title={frontmatter.title} />

      <Content components={{ pre: SyntaxHighlighter, ...components }} />
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

  return {
    props: { code, frontmatter },
  };
}
