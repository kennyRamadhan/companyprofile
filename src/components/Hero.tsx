import NextImage from "next/image";

interface HeroProps {
  lang: "id" | "en";
}

const heroContent = {
  id: {
    title: "Syah Construction",
    tagline: "Mitra Konstruksi Profesional untuk Proyek Tanpa Risiko",
    description:
      "Kami membantu Anda menyelesaikan proyek konstruksi, renovasi, dan desain arsitektur dengan standar kualitas tinggi, timeline terkontrol, dan transparansi penuh.",
    ctaPrimary: "Konsultasi Gratis Sekarang",
    ctaSecondary: "Lihat Portofolio Kami",
  },
  en: {
    title: "Syah Construction",
    tagline: "Your Trusted Construction Partner for Risk-Free Projects",
    description:
      "We help you deliver construction, renovation, and architectural design projects with high-quality standards, controlled timelines, and full transparency.",
    ctaPrimary: "Get Free Consultation",
    ctaSecondary: "View Our Portfolio",
  },
};

export default function Hero({ lang }: HeroProps) {
  const t = heroContent[lang];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <NextImage
          src="/images/pabrik_2.jpeg"
          alt="Syah Construction project"
          fill
          className="object-cover"
          priority
          sizes="100vw"
          quality={60}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary-900/80 via-primary-900/70 to-primary-900/80" />
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="inline-block mb-6 px-4 py-2 border border-secondary/40 rounded-full">
          <span className="text-secondary font-semibold text-sm tracking-widest uppercase">
            {t.tagline}
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
          {t.title}
        </h1>

        <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          {t.description}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 min-h-[44px] bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg transition-colors duration-200 text-lg shadow-lg shadow-amber-600/25"
          >
            {t.ctaPrimary}
          </a>
          <a
            href="#projects"
            className="inline-flex items-center justify-center px-8 py-4 min-h-[44px] border-2 border-white/30 hover:border-white/60 text-white font-semibold rounded-lg transition-colors duration-200 text-lg"
          >
            {t.ctaSecondary}
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
