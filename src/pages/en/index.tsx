import fs from "fs";
import path from "path";
import matter from "gray-matter";

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "content/en/home.md");
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data } = matter(fileContent);

  return {
    props: {
      content: data,
    },
  };
}

export default function HomeEN({ content }: any) {
  return (
    <main className="px-6 py-10">
      <h1 className="text-4xl font-bold text-primary">{content.title}</h1>
      <p className="text-lg mt-4">{content.subtitle}</p>

      <button className="mt-6 px-5 py-3 bg-secondary text-white rounded-md">
        {content.cta}
      </button>
    </main>
  );
}
