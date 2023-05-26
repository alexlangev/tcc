import { getMDXComponent } from "mdx-bundler/client";
import { useMemo } from "react";
import { getFilesByCategory, getFileContent } from "@/utils/helpers/mdxStuff";
import { SyntaxHighlighter, PageHeader, DesktopSpacer } from "/components";
import * as components from "../../../components";
import styled from "styled-components";
import { InlineMath, BlockMath } from "react-katex";

export default function Page({ code, frontmatter }) {
  const Content = useMemo(() => getMDXComponent(code), [code]);
  return (
    <article>
      <DesktopSpacer height={32} />
      <PageHeader title={frontmatter.title} imgSrc={frontmatter.imgSrc} />

      <Content
        components={{
          pre: SyntaxHighlighter,
          InlineMath,
          BlockMath,
          ol: OrderedList,
          ul: UnorderedList,
          ...components,
        }}
      />
    </article>
  );
}

const OrderedList = styled.ol`
  li {
    list-style: decimal;
  }
`;

const UnorderedList = styled.ul`
  li {
    list-style: disc;
  }
`;

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
