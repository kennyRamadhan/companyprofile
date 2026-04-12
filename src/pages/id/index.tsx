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

export default function HomeID() {
  const lang = "id";

  return (
    <>
      <Head>
        <title>Syah Construction — Mitra Konstruksi Profesional untuk Proyek Tanpa Risiko</title>
        <meta
          name="description"
          content="Syah Construction adalah mitra konstruksi profesional di Indonesia. Melayani pembangunan, renovasi, desain arsitektur, dan interior design dengan standar kualitas tinggi dan transparansi penuh."
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
