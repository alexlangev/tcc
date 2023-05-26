import { bundleMDX } from "mdx-bundler";
import fs from "fs";
import path from "path";
import { removeFileExtension } from "@/utils/helpers/global";
import { remarkMath } from "remark-math";
import { rehypeKatex } from "rehype-katex";

const getFilesByCategory = (category) => {
  const contentDirectory = path.join(process.cwd(), "content", category);
  const fileNames = fs.readdirSync(contentDirectory);
  const cleanedFileNames = fileNames.map((name) => removeFileExtension(name));
  const sortedCleanedFileNames = cleanedFileNames.sort((a, b) => {
    const numA = Number(a.substring(a.lastIndexOf("-") + 1));
    const numB = Number(b.substring(b.lastIndexOf("-") + 1));

    if (numA < numB) {
      return -1;
    } else {
      return 1;
    }
  });

  return sortedCleanedFileNames;
};

const getFileContent = async (category, slug) => {
  const filePath = path.join(process.cwd(), "content", category, `${slug}.mdx`);
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { code, frontmatter } = await bundleMDX({
    source: fileContents,
    xdmOptions(options) {
      options.remarkPlugins = [...(options.remarkPlugins ?? []), remarkMath];
      options.rehypePlugins = [...(options.rehypePlugins ?? []), rehypeKatex];

      return options;
    },
  });

  return { code, frontmatter };
};

export { getFilesByCategory, getFileContent };

// // sort by name
// items.sort((a, b) => {
//   const nameA = a.name.toUpperCase(); // ignore upper and lowercase
//   const nameB = b.name.toUpperCase(); // ignore upper and lowercase
//   if (nameA < nameB) {
//     return -1;
//   }
//   if (nameA > nameB) {
//     return 1;
//   }

//   // names must be equal
//   return 0;
// });
