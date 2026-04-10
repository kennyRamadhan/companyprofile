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

export default function HomeEN() {
  const lang = "en";

  return (
    <>
      <Head>
        <title>Bangun Jaya Abadi — Construction, Renovation &amp; Architectural Design</title>
        <meta
          name="description"
          content="Bangun Jaya Abadi is a trusted construction company providing professional construction, renovation, and architectural design services in Indonesia."
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
