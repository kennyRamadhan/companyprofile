import NextImage from "next/image";
import { useEffect, useRef } from "react";

interface ServicesProps {
  lang: "id" | "en";
}

const content = {
  id: {
    sectionLabel: "Layanan Kami",
    title: "Solusi Konstruksi Terintegrasi untuk Berbagai Kebutuhan",
    subtitle:
      "Dari perencanaan hingga eksekusi — kami memastikan setiap tahap proyek berjalan lancar dan tanpa kendala.",
    services: [
      {
        icon: "building",
        title: "Konstruksi Bangunan",
        description:
          "Pembangunan proyek hunian, komersial, dan industrial dengan standar kualitas tinggi dan pengawasan ketat di setiap tahap.",
        image: "/images/pabrik_3.jpeg",
      },
      {
        icon: "renovation",
        title: "Renovasi & Remodeling",
        description:
          "Transformasi bangunan lama menjadi lebih modern, fungsional, dan sesuai kebutuhan Anda — tanpa mengorbankan struktur asli.",
        image: "/images/rumah_1.jpeg",
      },
      {
        icon: "architecture",
        title: "Desain Arsitektur",
        description:
          "Perencanaan desain yang menggabungkan estetika, fungsi, dan efisiensi biaya untuk hasil yang optimal.",
        image: "/images/kantor_2.jpeg",
      },
      {
        icon: "interior",
        title: "Interior Design",
        description:
          "Desain interior yang meningkatkan kenyamanan, nilai estetika, dan fungsionalitas ruang Anda.",
        image: "/images/kantor_4.jpeg",
      },
      {
        icon: "management",
        title: "Manajemen Proyek",
        description:
          "Pengelolaan proyek secara menyeluruh — memastikan timeline, kualitas, dan anggaran tetap terkendali dari awal hingga serah terima.",
        image: "/images/pabrik_1.jpeg",
      },
      {
        icon: "consulting",
        title: "Konsultasi Teknik",
        description:
          "Analisis teknis mendalam untuk memastikan kelayakan dan optimalisasi proyek sejak tahap perencanaan.",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80",
      },
    ],
  },
  en: {
    sectionLabel: "Our Services",
    title: "Integrated Construction Solutions for Every Need",
    subtitle:
      "From planning to execution — we ensure every phase of your project runs smoothly and without setbacks.",
    services: [
      {
        icon: "building",
        title: "Building Construction",
        description:
          "Residential, commercial, and industrial construction delivered with high-quality standards and rigorous oversight at every stage.",
        image: "/images/pabrik_3.jpeg",
      },
      {
        icon: "renovation",
        title: "Renovation & Remodeling",
        description:
          "Transform aging structures into modern, functional spaces tailored to your needs — without compromising the original framework.",
        image: "/images/rumah_1.jpeg",
      },
      {
        icon: "architecture",
        title: "Architectural Design",
        description:
          "Design planning that balances aesthetics, functionality, and cost efficiency for optimal results.",
        image: "/images/kantor_2.jpeg",
      },
      {
        icon: "interior",
        title: "Interior Design",
        description:
          "Interior design that elevates comfort, aesthetic value, and functionality of your spaces.",
        image: "/images/kantor_4.jpeg",
      },
      {
        icon: "management",
        title: "Project Management",
        description:
          "End-to-end project management — ensuring timelines, quality, and budgets stay on track from start to handover.",
        image: "/images/pabrik_1.jpeg",
      },
      {
        icon: "consulting",
        title: "Engineering Consultation",
        description:
          "In-depth technical analysis to ensure project feasibility and optimization from the planning stage.",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80",
      },
    ],
  },
};

function ServiceIcon({ type }: { type: string }) {
  const icons: Record<string, React.ReactNode> = {
    building: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    renovation: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
      </svg>
    ),
    architecture: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    management: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    interior: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 20h16M4 20V10l8-6 8 6v10M4 20h4v-5a1 1 0 011-1h6a1 1 0 011 1v5h4" />
      </svg>
    ),
    consulting: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  };
  return icons[type] || icons.building;
}

export default function Services({ lang }: ServicesProps) {
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
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="section-padding bg-slate-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container-max">
        {/* Section header */}
        <div className="text-center mb-16 fade-in-up">
          <span className="text-secondary font-semibold text-sm tracking-widest uppercase">
            {t.sectionLabel}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary dark:text-white mt-2">{t.title}</h2>
          <div className="w-20 h-1 bg-secondary mx-auto mt-4" />
          <p className="text-slate-500 dark:text-slate-400 mt-4 max-w-2xl mx-auto">{t.subtitle}</p>
        </div>

        {/* Service cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.services.map((service, i) => (
            <div
              key={i}
              className={`fade-in-up stagger-${i + 1} bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-slate-100 dark:border-slate-700 group`}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <NextImage
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  quality={80}
                />
                <div className="absolute inset-0 bg-primary-900/30 group-hover:bg-primary-900/10 transition-colors duration-300" />
                <div className="absolute top-4 left-4 w-12 h-12 bg-secondary rounded-lg flex items-center justify-center text-white">
                  <ServiceIcon type={service.icon} />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary dark:text-white mb-3">{service.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-sm">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
