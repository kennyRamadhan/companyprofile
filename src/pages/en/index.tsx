import Head from "next/head";
import dynamic from "next/dynamic";
import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import About from "../../components/About";
import Stats from "../../components/Stats";

// Below-the-fold components — lazy loaded for faster initial paint
const Services = dynamic(() => import("../../components/Services"), {
  loading: () => <div className="h-96 animate-pulse bg-gray-100 dark:bg-gray-800" />,
});
const Projects = dynamic(() => import("../../components/Projects"), {
  loading: () => <div className="h-96 animate-pulse bg-gray-100 dark:bg-gray-800" />,
});
const WhyChooseUs = dynamic(() => import("../../components/WhyChooseUs"), {
  loading: () => <div className="h-64 animate-pulse bg-gray-100 dark:bg-gray-800" />,
});
const Testimonials = dynamic(() => import("../../components/Testimonials"), {
  loading: () => <div className="h-64 animate-pulse bg-gray-100 dark:bg-gray-800" />,
});
const CTASection = dynamic(() => import("../../components/CTASection"), {
  loading: () => <div className="h-48 animate-pulse bg-gray-100 dark:bg-gray-800" />,
});
const Contact = dynamic(() => import("../../components/Contact"), {
  loading: () => <div className="h-96 animate-pulse bg-gray-100 dark:bg-gray-800" />,
});
const Footer = dynamic(() => import("../../components/Footer"), {
  loading: () => <div className="h-48 animate-pulse bg-gray-900" />,
});

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
