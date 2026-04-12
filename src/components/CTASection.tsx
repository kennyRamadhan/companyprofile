import { useEffect, useRef } from "react";
import NextImage from "next/image";

interface CTASectionProps {
  lang: "id" | "en";
}

const content = {
  id: {
    title: "Siap Memulai Proyek Tanpa Risiko?",
    subtitle: "Konsultasikan kebutuhan Anda sekarang dan dapatkan estimasi terbaik dari tim kami — tanpa biaya dan tanpa komitmen.",
    cta: "Mulai Konsultasi Gratis Sekarang",
  },
  en: {
    title: "Ready to Start a Risk-Free Project?",
    subtitle: "Consult with us today and get the best estimate from our team — no cost, no commitment.",
    cta: "Start Your Free Consultation Now",
  },
};

export default function CTASection({ lang }: CTASectionProps) {
  const t = content[lang];
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".fade-in-up").forEach((el) => {
              el.classList.add("visible");
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-20 md:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <NextImage
          src="/images/pabrik_4.jpeg"
          alt=""
          fill
          sizes="100vw"
          quality={60}
          className="object-cover"
          loading="lazy"
        />
      </div>
      <div className="absolute inset-0 bg-primary-900/85" />

      <div className="container-max px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="fade-in-up max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            {t.title}
          </h2>
          <p className="text-lg md:text-xl text-slate-300 mb-10">
            {t.subtitle}
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-10 py-4 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-lg transition-colors duration-200 text-lg shadow-lg shadow-amber-600/30"
          >
            {t.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
