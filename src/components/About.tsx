interface AboutProps {
  lang: "id" | "en";
}

const content = {
  id: {
    sectionLabel: "Tentang Kami",
    title: "Membangun Kepercayaan Sejak 2014",
    paragraphs: [
      "Bangun Jaya Abadi adalah perusahaan konstruksi yang berdedikasi untuk menyediakan layanan pembangunan berkualitas tinggi di Indonesia. Didirikan dengan semangat untuk memberikan hasil terbaik, kami telah menyelesaikan lebih dari 150 proyek di berbagai sektor, mulai dari residensial, komersial, hingga industrial.",
      "Dengan tim profesional yang berpengalaman dan bersertifikasi, kami mengedepankan kualitas, ketepatan waktu, dan transparansi dalam setiap proyek. Kami percaya bahwa setiap bangunan adalah cerminan dari kepercayaan yang diberikan klien kepada kami.",
      "Visi kami adalah menjadi perusahaan konstruksi terdepan yang dikenal karena inovasi, integritas, dan hasil kerja yang melampaui ekspektasi. Misi kami adalah memberikan solusi konstruksi terpadu dengan standar kualitas internasional.",
    ],
    visionTitle: "Visi",
    visionText:
      "Menjadi perusahaan konstruksi terdepan di Indonesia yang dikenal karena kualitas, inovasi, dan integritas.",
    missionTitle: "Misi",
    missionItems: [
      "Memberikan layanan konstruksi berkualitas tinggi dengan standar internasional",
      "Mengedepankan keselamatan kerja dan keberlanjutan lingkungan",
      "Membangun hubungan jangka panjang dengan klien melalui kepercayaan dan transparansi",
      "Mengembangkan SDM profesional yang kompeten dan berdedikasi",
    ],
  },
  en: {
    sectionLabel: "About Us",
    title: "Building Trust Since 2014",
    paragraphs: [
      "Bangun Jaya Abadi is a construction company dedicated to providing high-quality building services in Indonesia. Founded with a passion for delivering the best results, we have completed over 150 projects across various sectors, from residential and commercial to industrial.",
      "With an experienced and certified professional team, we prioritize quality, timeliness, and transparency in every project. We believe that every building is a reflection of the trust our clients place in us.",
      "Our vision is to become a leading construction company known for innovation, integrity, and work that exceeds expectations. Our mission is to provide integrated construction solutions with international quality standards.",
    ],
    visionTitle: "Vision",
    visionText:
      "To become the leading construction company in Indonesia, known for quality, innovation, and integrity.",
    missionTitle: "Mission",
    missionItems: [
      "Deliver high-quality construction services with international standards",
      "Prioritize workplace safety and environmental sustainability",
      "Build long-term relationships with clients through trust and transparency",
      "Develop competent and dedicated professional human resources",
    ],
  },
};

export default function About({ lang }: AboutProps) {
  const t = content[lang];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-max">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-secondary font-semibold text-sm tracking-widest uppercase">
            {t.sectionLabel}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2">{t.title}</h2>
          <div className="w-20 h-1 bg-secondary mx-auto mt-4" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Description */}
          <div className="space-y-4">
            {t.paragraphs.map((p, i) => (
              <p key={i} className="text-slate-600 leading-relaxed text-base md:text-lg">
                {p}
              </p>
            ))}
          </div>

          {/* Right: Vision & Mission */}
          <div className="space-y-8">
            {/* Vision */}
            <div className="bg-primary-50 rounded-xl p-6 border-l-4 border-secondary">
              <h3 className="text-xl font-bold text-primary mb-2">{t.visionTitle}</h3>
              <p className="text-slate-600 leading-relaxed">{t.visionText}</p>
            </div>

            {/* Mission */}
            <div className="bg-slate-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-primary mb-4">{t.missionTitle}</h3>
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
                    <span className="text-slate-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
