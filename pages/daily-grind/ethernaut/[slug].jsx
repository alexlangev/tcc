import { getMDXComponent } from "mdx-bundler/client";
import { useMemo } from "react";
import { getFilesByCategory, getFileContent } from "@/utils/helpers/mdxStuff";

export default function Page({ code, frontmatter }) {
  console.log(frontmatter);
  const Content = useMemo(() => getMDXComponent(code), [code]);

  return (
    <>
      <h1>{frontmatter.title}</h1>
      <Content />
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

// import * as React from "react";
// import { getMDXComponent } from "mdx-bundler/client";

// function Post({ code, frontmatter }) {
//   // it's generally a good idea to memoize this function call to
//   // avoid re-creating the component every render.
//   const Component = React.useMemo(() => getMDXComponent(code), [code]);
//   return (
//     <>
//       <header>
//         <h1>{frontmatter.title}</h1>
//         <p>{frontmatter.description}</p>
//       </header>
//       <main>
//         <Component />
//       </main>
//     </>
//   );
// }
