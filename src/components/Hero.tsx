import Image from "next/image";

interface HeroProps {
  lang: "id" | "en";
}

const content = {
  id: {
    title: "Bangun Jaya Abadi",
    tagline: "Membangun dengan Kualitas, Berdiri untuk Selamanya",
    description:
      "Mitra terpercaya Anda dalam konstruksi, renovasi, dan desain arsitektur profesional. Lebih dari satu dekade pengalaman membangun impian menjadi kenyataan.",
    ctaPrimary: "Konsultasi Gratis",
    ctaSecondary: "Lihat Proyek Kami",
  },
  en: {
    title: "Bangun Jaya Abadi",
    tagline: "Building with Quality, Standing Forever",
    description:
      "Your trusted partner in professional construction, renovation, and architectural design. Over a decade of experience turning dreams into reality.",
    ctaPrimary: "Free Consultation",
    ctaSecondary: "View Our Projects",
  },
};

export default function Hero({ lang }: HeroProps) {
  const t = content[lang];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Construction site"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-primary-900/75" />
      </div>

      {/* Content */}
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
            className="inline-flex items-center justify-center px-8 py-4 bg-secondary hover:bg-secondary-600 text-white font-semibold rounded-lg transition-colors duration-200 text-lg shadow-lg shadow-secondary/25"
          >
            {t.ctaPrimary}
          </a>
          <a
            href="#projects"
            className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 hover:border-white/60 text-white font-semibold rounded-lg transition-colors duration-200 text-lg"
          >
            {t.ctaSecondary}
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
