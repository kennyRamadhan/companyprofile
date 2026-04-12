import NextImage from "next/image";
import { useEffect, useRef } from "react";

interface AboutProps {
  lang: "id" | "en";
}

const content = {
  id: {
    sectionLabel: "Tentang Kami",
    title: "Membangun Kepercayaan Melalui Hasil Nyata",
    paragraphs: [
      "Syah Construction adalah perusahaan konstruksi yang berfokus pada kualitas, ketepatan waktu, dan transparansi dalam setiap proyek.",
      "Sejak berdiri, kami telah menangani berbagai proyek dari skala residensial hingga industrial — dengan pendekatan yang terstruktur dan berorientasi hasil.",
      "Kami memahami bahwa setiap proyek adalah investasi besar. Karena itu, kami memastikan setiap tahapan berjalan efisien, terukur, dan sesuai ekspektasi klien.",
    ],
    visionTitle: "Visi",
    visionText:
      "Menjadi mitra konstruksi terpercaya yang dikenal karena kualitas pekerjaan, integritas, dan konsistensi dalam setiap proyek.",
    missionTitle: "Misi",
    missionItems: [
      "Memberikan hasil konstruksi dengan standar kualitas tinggi",
      "Menjaga ketepatan waktu dan efisiensi biaya di setiap proyek",
      "Membangun hubungan jangka panjang berbasis kepercayaan dengan klien",
      "Mengedepankan keselamatan dan profesionalisme di lapangan",
    ],
  },
  en: {
    sectionLabel: "About Us",
    title: "Building Trust Through Proven Results",
    paragraphs: [
      "Syah Construction is a construction company focused on quality, timeliness, and transparency in every project we undertake.",
      "Since our founding, we have handled a wide range of projects — from residential to industrial — with a structured, results-driven approach.",
      "We understand that every project is a significant investment. That\u2019s why we ensure each phase runs efficiently, measurably, and in line with our clients\u2019 expectations.",
    ],
    visionTitle: "Vision",
    visionText:
      "To be a trusted construction partner recognized for workmanship quality, integrity, and consistency in every project.",
    missionTitle: "Mission",
    missionItems: [
      "Deliver construction results with high-quality standards",
      "Maintain on-time delivery and cost efficiency in every project",
      "Build long-term relationships founded on trust with our clients",
      "Prioritize safety and professionalism on every job site",
    ],
  },
};

export default function About({ lang }: AboutProps) {
  const t = content[lang];
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".fade-in-up, .fade-in-left, .fade-in-right").forEach((el) => {
              el.classList.add("visible");
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="section-padding bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container-max">
        {/* Section header */}
        <div className="text-center mb-16 fade-in-up">
          <span className="text-secondary font-semibold text-sm tracking-widest uppercase">
            {t.sectionLabel}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary dark:text-white mt-2">{t.title}</h2>
          <div className="w-20 h-1 bg-secondary mx-auto mt-4" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Description */}
          <div className="space-y-6 fade-in-left">
            {t.paragraphs.map((p, i) => (
              <p key={i} className="text-slate-600 dark:text-slate-300 leading-relaxed text-base md:text-lg">
                {p}
              </p>
            ))}

            {/* Vision */}
            <div className="bg-primary-50 dark:bg-slate-800 rounded-xl p-6 border-l-4 border-secondary">
              <h3 className="text-xl font-bold text-primary dark:text-white mb-2">{t.visionTitle}</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{t.visionText}</p>
            </div>

            {/* Mission */}
            <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-6">
              <h3 className="text-xl font-bold text-primary dark:text-white mb-4">{t.missionTitle}</h3>
              <ul className="space-y-3">
                {t.missionItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-slate-600 dark:text-slate-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: Image */}
          <div className="fade-in-right">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <NextImage
                src="/images/pabrik_3.jpeg"
                alt="Syah Construction team at work"
                width={700}
                height={500}
                className="object-cover w-full h-auto"
                quality={80}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
