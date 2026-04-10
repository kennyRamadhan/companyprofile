interface ServicesProps {
  lang: "id" | "en";
}

const content = {
  id: {
    sectionLabel: "Layanan Kami",
    title: "Solusi Konstruksi Terpadu",
    subtitle: "Kami menyediakan berbagai layanan konstruksi profesional untuk memenuhi kebutuhan pembangunan Anda",
    services: [
      {
        icon: "building",
        title: "Konstruksi Bangunan",
        description:
          "Pembangunan gedung komersial, residensial, dan industrial dengan standar kualitas tinggi dan material terbaik.",
      },
      {
        icon: "renovation",
        title: "Renovasi & Remodeling",
        description:
          "Renovasi rumah, kantor, dan bangunan komersial untuk tampilan baru yang modern dan fungsional.",
      },
      {
        icon: "architecture",
        title: "Desain Arsitektur",
        description:
          "Perencanaan dan desain arsitektur modern yang menggabungkan estetika dengan fungsionalitas.",
      },
      {
        icon: "interior",
        title: "Interior Design",
        description:
          "Desain interior profesional untuk hunian dan ruang komersial yang nyaman dan stylish.",
      },
      {
        icon: "management",
        title: "Manajemen Proyek",
        description:
          "Pengelolaan proyek dari perencanaan hingga serah terima dengan timeline dan budget yang terkontrol.",
      },
      {
        icon: "consulting",
        title: "Konsultasi Teknik",
        description:
          "Konsultasi struktur, MEP, dan feasibility study untuk memastikan proyek Anda berjalan optimal.",
      },
    ],
  },
  en: {
    sectionLabel: "Our Services",
    title: "Integrated Construction Solutions",
    subtitle: "We provide various professional construction services to meet your building needs",
    services: [
      {
        icon: "building",
        title: "Building Construction",
        description:
          "Construction of commercial, residential, and industrial buildings with high quality standards and the best materials.",
      },
      {
        icon: "renovation",
        title: "Renovation & Remodeling",
        description:
          "Renovation of homes, offices, and commercial buildings for a fresh, modern, and functional look.",
      },
      {
        icon: "architecture",
        title: "Architectural Design",
        description:
          "Modern architectural planning and design that combines aesthetics with functionality.",
      },
      {
        icon: "interior",
        title: "Interior Design",
        description:
          "Professional interior design for residential and commercial spaces that are comfortable and stylish.",
      },
      {
        icon: "management",
        title: "Project Management",
        description:
          "Project management from planning to handover with controlled timeline and budget.",
      },
      {
        icon: "consulting",
        title: "Engineering Consultation",
        description:
          "Structural, MEP, and feasibility study consultation to ensure your project runs optimally.",
      },
    ],
  },
};

function ServiceIcon({ type }: { type: string }) {
  const icons: Record<string, React.ReactNode> = {
    building: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    renovation: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
      </svg>
    ),
    architecture: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    interior: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
    management: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    consulting: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  };

  return icons[type] || icons.building;
}

export default function Services({ lang }: ServicesProps) {
  const t = content[lang];

  return (
    <section id="services" className="section-padding bg-slate-50">
      <div className="container-max">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-secondary font-semibold text-sm tracking-widest uppercase">
            {t.sectionLabel}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2">{t.title}</h2>
          <div className="w-20 h-1 bg-secondary mx-auto mt-4" />
          <p className="text-slate-500 mt-4 max-w-2xl mx-auto">{t.subtitle}</p>
        </div>

        {/* Service cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.services.map((service, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 border border-slate-100 group"
            >
              <div className="w-14 h-14 bg-secondary/10 rounded-lg flex items-center justify-center text-secondary mb-6 group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                <ServiceIcon type={service.icon} />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
              <p className="text-slate-500 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
