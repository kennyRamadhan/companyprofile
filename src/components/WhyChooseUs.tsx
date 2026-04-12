import { useEffect, useRef } from "react";
import NextImage from "next/image";

interface WhyChooseUsProps {
  lang: "id" | "en";
}

const content = {
  id: {
    sectionLabel: "Mengapa Memilih Kami",
    title: "Mengapa Klien Memilih Kami",
    subtitle: "Komitmen kami terhadap kualitas dan kepuasan klien tercermin dalam setiap proyek yang kami tangani.",
    reasons: [
      {
        icon: "experience",
        title: "Pengalaman Terbukti",
        description: "Telah menangani berbagai proyek dengan standar profesional di sektor residensial, komersial, dan industrial.",
      },
      {
        icon: "certified",
        title: "Tim Profesional",
        description: "Didukung tenaga ahli berpengalaman dengan kompetensi teknis yang tinggi di bidangnya.",
      },
      {
        icon: "ontime",
        title: "Tepat Waktu & Budget",
        description: "Komitmen penuh terhadap timeline dan anggaran — tanpa mengorbankan kualitas hasil.",
      },
      {
        icon: "material",
        title: "Material Berkualitas",
        description: "Menggunakan material sesuai standar industri untuk hasil konstruksi yang tahan lama dan andal.",
      },
      {
        icon: "warranty",
        title: "Garansi Pekerjaan",
        description: "Jaminan kualitas atas setiap pekerjaan yang kami selesaikan, demi kepuasan klien.",
      },
      {
        icon: "consultation",
        title: "Konsultasi Gratis",
        description: "Diskusikan kebutuhan proyek Anda tanpa biaya awal — kami siap membantu sejak tahap perencanaan.",
      },
    ],
  },
  en: {
    sectionLabel: "Why Choose Us",
    title: "Why Clients Choose Us",
    subtitle: "Our commitment to quality and client satisfaction is reflected in every project we deliver.",
    reasons: [
      {
        icon: "experience",
        title: "Proven Experience",
        description: "A track record of delivering projects to professional standards across residential, commercial, and industrial sectors.",
      },
      {
        icon: "certified",
        title: "Professional Team",
        description: "Backed by experienced specialists with strong technical expertise in their respective fields.",
      },
      {
        icon: "ontime",
        title: "On Time & On Budget",
        description: "Full commitment to timelines and budgets — without compromising on quality.",
      },
      {
        icon: "material",
        title: "Quality Materials",
        description: "We use industry-standard materials to ensure durable and reliable construction results.",
      },
      {
        icon: "warranty",
        title: "Work Guarantee",
        description: "Quality assurance on every project we complete, ensuring total client satisfaction.",
      },
      {
        icon: "consultation",
        title: "Free Consultation",
        description: "Discuss your project needs at no upfront cost — we\u2019re here to help from the planning stage.",
      },
    ],
  },
};

function ReasonIcon({ type }: { type: string }) {
  const icons: Record<string, React.ReactNode> = {
    experience: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    certified: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    ontime: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    material: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    warranty: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    consultation: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  };
  return icons[type] || icons.experience;
}

export default function WhyChooseUs({ lang }: WhyChooseUsProps) {
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
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="why-us" ref={sectionRef} className="relative section-padding overflow-hidden">
      {/* Background with overlay */}
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
      <div className="absolute inset-0 bg-primary-900/90" />

      <div className="container-max relative z-10">
        {/* Section header */}
        <div className="text-center mb-16 fade-in-up">
          <span className="text-secondary font-semibold text-sm tracking-widest uppercase">
            {t.sectionLabel}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">{t.title}</h2>
          <div className="w-20 h-1 bg-secondary mx-auto mt-4" />
          <p className="text-slate-300 mt-4 max-w-2xl mx-auto">{t.subtitle}</p>
        </div>

        {/* Reason cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.reasons.map((reason, i) => (
            <div
              key={i}
              className={`fade-in-up stagger-${i + 1} bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-colors duration-300`}
            >
              <div className="w-14 h-14 bg-secondary/20 rounded-lg flex items-center justify-center text-secondary mb-5">
                <ReasonIcon type={reason.icon} />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{reason.title}</h3>
              <p className="text-slate-300 text-sm leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
