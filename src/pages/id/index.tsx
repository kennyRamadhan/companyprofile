import { GetStaticProps } from "next";
import { getPageContent } from "../../lib/contentLoader";
import Navbar from "../../components/Navbar";

export default function HomeID({ data }: any) {
  return (
    <>
      <Navbar />

      <section className="px-6 py-10">
        <h1 className="text-4xl font-bold">{data.frontmatter.title}</h1>
        <p className="text-lg text-gray-600">{data.frontmatter.subtitle}</p>

        <img
          src={data.frontmatter.heroImage}
          className="w-full h-80 object-cover mt-6 rounded-lg shadow"
        />

        <article
          className="prose max-w-none mt-8"
          dangerouslySetInnerHTML={{ __html: data.contentHtml }}
        />
      </section>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await getPageContent("id");

  return {
    props: {
      data,
    },
  };
};
