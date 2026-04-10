import Head from "next/head";
import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import About from "../../components/About";
import Stats from "../../components/Stats";
import Services from "../../components/Services";
import Projects from "../../components/Projects";
import WhyChooseUs from "../../components/WhyChooseUs";
import Testimonials from "../../components/Testimonials";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";

export default function HomeID() {
  const lang = "id";

  return (
    <>
      <Head>
        <title>Bangun Jaya Abadi — Jasa Konstruksi, Renovasi &amp; Desain Arsitektur</title>
        <meta
          name="description"
          content="Bangun Jaya Abadi adalah perusahaan konstruksi terpercaya yang menyediakan jasa konstruksi, renovasi, dan desain arsitektur profesional di Indonesia."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Navbar lang={lang} />
      <Hero lang={lang} />
      <Stats lang={lang} />
      <About lang={lang} />
      <Services lang={lang} />
      <Projects lang={lang} />
      <WhyChooseUs lang={lang} />
      <Testimonials lang={lang} />
      <Contact lang={lang} />
      <Footer lang={lang} />
    </>
  );
}
