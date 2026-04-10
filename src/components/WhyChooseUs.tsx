interface WhyChooseUsProps {
  lang: "id" | "en";
}

const content = {
  id: {
    sectionLabel: "Mengapa Memilih Kami",
    title: "Keunggulan Bangun Jaya Abadi",
    subtitle: "Kami berkomitmen memberikan layanan terbaik untuk setiap proyek",
    reasons: [
      {
        icon: "experience",
        title: "Pengalaman 10+ Tahun",
        description: "Berpengalaman menangani berbagai proyek konstruksi skala kecil hingga besar.",
      },
      {
        icon: "certified",
        title: "Tim Bersertifikasi",
        description: "Tim profesional dengan sertifikasi nasional dan internasional di bidang konstruksi.",
      },
      {
        icon: "ontime",
        title: "Tepat Waktu & Budget",
        description: "Komitmen penyelesaian proyek sesuai timeline dan anggaran yang disepakati.",
      },
      {
        icon: "material",
        title: "Material Berkualitas",
        description: "Menggunakan material pilihan dari supplier terpercaya dengan standar kualitas tinggi.",
      },
      {
        icon: "warranty",
        title: "Garansi Pekerjaan",
        description: "Memberikan garansi untuk setiap pekerjaan sebagai jaminan kualitas kami.",
      },
      {
        icon: "consultation",
        title: "Konsultasi Gratis",
        description: "Layanan konsultasi gratis untuk membantu merencanakan proyek impian Anda.",
      },
    ],
  },
  en: {
    sectionLabel: "Why Choose Us",
    title: "Bangun Jaya Abadi Advantages",
    subtitle: "We are committed to delivering the best service for every project",
    reasons: [
      {
        icon: "experience",
        title: "10+ Years Experience",
        description: "Experienced in handling various construction projects from small to large scale.",
      },
      {
        icon: "certified",
        title: "Certified Team",
        description: "Professional team with national and international certifications in construction.",
      },
      {
        icon: "ontime",
        title: "On Time & Budget",
        description: "Commitment to completing projects according to agreed timeline and budget.",
      },
      {
        icon: "material",
        title: "Quality Materials",
        description: "Using selected materials from trusted suppliers with high quality standards.",
      },
      {
        icon: "warranty",
        title: "Work Guarantee",
        description: "Providing warranties for every job as our quality assurance.",
      },
      {
        icon: "consultation",
        title: "Free Consultation",
        description: "Free consultation service to help plan your dream project.",
      },
    ],
  },
};

function ReasonIcon({ type }: { type: string }) {
  const icons: Record<string, React.ReactNode> = {
    experience: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    certified: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    ontime: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
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

  return (
    <section id="why-us" className="section-padding bg-primary">
      <div className="container-max">
        {/* Section header */}
        <div className="text-center mb-16">
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
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-colors duration-300"
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
