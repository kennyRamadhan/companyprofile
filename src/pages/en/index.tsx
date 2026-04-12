import Head from "next/head";
import dynamic from "next/dynamic";
import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";

// Below-the-fold components — lazy loaded for faster initial paint
const About = dynamic(() => import("../../components/About"));
const Stats = dynamic(() => import("../../components/Stats"));
const Services = dynamic(() => import("../../components/Services"));
const Projects = dynamic(() => import("../../components/Projects"));
const WhyChooseUs = dynamic(() => import("../../components/WhyChooseUs"));
const Testimonials = dynamic(() => import("../../components/Testimonials"));
const CTASection = dynamic(() => import("../../components/CTASection"));
const Contact = dynamic(() => import("../../components/Contact"));
const Footer = dynamic(() => import("../../components/Footer"));

export default function HomeEN() {
  const lang = "en";

  return (
    <>
      <Head>
        <title>Syah Construction — Your Trusted Construction Partner for Risk-Free Projects</title>
        <meta
          name="description"
          content="Syah Construction is a professional construction partner in Indonesia. Delivering construction, renovation, and architectural design projects with high-quality standards and full transparency."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
      </Head>

      <Navbar lang={lang} />
      <Hero lang={lang} />
      <Stats lang={lang} />
      <About lang={lang} />
      <Services lang={lang} />
      <Projects lang={lang} />
      <WhyChooseUs lang={lang} />
      <Testimonials lang={lang} />
      <CTASection lang={lang} />
      <Contact lang={lang} />
      <Footer lang={lang} />
    </>
  );
}
