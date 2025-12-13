import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

export async function getPageContent(lang: "id" | "en") {
  const filename = lang === "id" ? "home_id.md" : "home_en.md";
  const fullPath = path.join(process.cwd(), "content", filename);

  const fileContent = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContent);

  const processed = await remark().use(html).process(content);
  const htmlContent = processed.toString();

  return {
    frontmatter: data,
    contentHtml: htmlContent,
  };
}
