import NextImage from "next/image";
import { useState, useEffect, useRef } from "react";

interface ProjectsProps {
  lang: "id" | "en";
}

interface Project {
  title: string;
  category: string;
  categoryLabel: string;
  location: string;
  description: string;
  mainImage: string;
  gallery: string[];
}

const content = {
  id: {
    sectionLabel: "Portofolio",
    title: "Portofolio Proyek yang Telah Kami Selesaikan",
    subtitle: "Setiap proyek adalah bukti komitmen kami terhadap kualitas dan kepuasan klien.",
    projects: [
      {
        title: "Renovasi & Pembangunan Pabrik Chemarome",
        category: "industrial",
        categoryLabel: "Industrial",
        location: "Indonesia",
        description:
          "Pengerjaan proyek skala industrial meliputi pemasangan struktur baja, cladding fasad, dan finishing eksterior berkualitas tinggi — dirancang untuk mendukung kebutuhan operasional jangka panjang.",
        mainImage: "/images/pabrik_2.jpeg",
        gallery: ["/images/pabrik_1.jpeg", "/images/pabrik_3.jpeg", "/images/pabrik_4.jpeg"],
      },
      {
        title: "Renovasi Rumah Tinggal",
        category: "residential",
        categoryLabel: "Residensial",
        location: "Indonesia",
        description:
          "Perombakan total hunian dari kondisi lama menjadi modern dan nyaman, dengan perencanaan desain yang matang dan eksekusi sesuai rencana awal klien.",
        mainImage: "/images/rumah_1.jpeg",
        gallery: ["/images/rumah_2.jpeg"],
      },
      {
        title: "Renovasi Kantor The House of Fragrances (Polyarome)",
        category: "commercial",
        categoryLabel: "Komersial",
        location: "Indonesia",
        description:
          "Renovasi kantor dan showroom dengan integrasi desain 3D, fasad batu alam, dan pemasangan neon sign — eksekusi presisi untuk mendukung branding dan citra bisnis klien.",
        mainImage: "/images/kantor_3.jpeg",
        gallery: [
          "/images/kantor_1.jpeg",
          "/images/kantor_2.jpeg",
          "/images/kantor_4.jpeg",
          "/images/kantor_5.jpeg",
        ],
      },
    ] as Project[],
  },
  en: {
    sectionLabel: "Portfolio",
    title: "Our Completed Project Portfolio",
    subtitle: "Every project is a testament to our commitment to quality and client satisfaction.",
    projects: [
      {
        title: "Chemarome Factory Renovation & Construction",
        category: "industrial",
        categoryLabel: "Industrial",
        location: "Indonesia",
        description:
          "Large-scale industrial project encompassing steel structure installation, facade cladding, and high-quality exterior finishing — engineered to support long-term operational needs.",
        mainImage: "/images/pabrik_2.jpeg",
        gallery: ["/images/pabrik_1.jpeg", "/images/pabrik_3.jpeg", "/images/pabrik_4.jpeg"],
      },
      {
        title: "Residential House Renovation",
        category: "residential",
        categoryLabel: "Residential",
        location: "Indonesia",
        description:
          "Complete transformation of a dated residence into a modern, comfortable home — with thorough design planning and execution aligned to the client\u2019s original vision.",
        mainImage: "/images/rumah_1.jpeg",
        gallery: ["/images/rumah_2.jpeg"],
      },
      {
        title: "The House of Fragrances Office Renovation (Polyarome)",
        category: "commercial",
        categoryLabel: "Commercial",
        location: "Indonesia",
        description:
          "Office and showroom renovation integrating 3D design, natural stone facade, and neon signage — precision execution to elevate the client\u2019s brand image and business identity.",
        mainImage: "/images/kantor_3.jpeg",
        gallery: [
          "/images/kantor_1.jpeg",
          "/images/kantor_2.jpeg",
          "/images/kantor_4.jpeg",
          "/images/kantor_5.jpeg",
        ],
      },
    ] as Project[],
  },
};

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [selectedImage, setSelectedImage] = useState(project.mainImage);

  return (
    <div className={`fade-in-up stagger-${index + 1} bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-slate-100 dark:border-slate-700`}>
      <div className="grid md:grid-cols-2 gap-0">
        {/* Image area */}
        <div className="relative">
          <div className="relative h-72 md:h-full min-h-[300px]">
            <NextImage
              src={selectedImage}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              quality={80}
            />
            <div className="absolute top-4 left-4">
              <span className="bg-amber-600 text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                {project.categoryLabel}
              </span>
            </div>
          </div>

          {/* Thumbnail gallery */}
          <div className="absolute bottom-4 left-4 right-4 flex gap-2 overflow-x-auto">
            <button
              onClick={() => setSelectedImage(project.mainImage)}
              aria-label={`View main photo of ${project.title}`}
              className={`relative w-14 h-14 rounded-lg overflow-hidden border-2 transition-colors flex-shrink-0 ${
                selectedImage === project.mainImage ? "border-secondary" : "border-white/50"
              }`}
            >
              <NextImage src={project.mainImage} alt="" fill sizes="56px" className="object-cover" />
            </button>
            {project.gallery.map((img, i) => (
              <button
                key={i}
                onClick={() => setSelectedImage(img)}
                aria-label={`View photo ${i + 2} of ${project.title}`}
                className={`relative w-14 h-14 rounded-lg overflow-hidden border-2 transition-colors flex-shrink-0 ${
                  selectedImage === img ? "border-secondary" : "border-white/50"
                }`}
              >
                <NextImage src={img} alt="" fill sizes="56px" className="object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="p-8 flex flex-col justify-center">
          <div className="flex items-center gap-2 text-slate-400 dark:text-slate-500 text-sm mb-3">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>{project.location}</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-primary dark:text-white mb-4">{project.title}</h3>
          <p className="text-slate-500 dark:text-slate-400 leading-relaxed">{project.description}</p>
        </div>
      </div>
    </div>
  );
}

export default function Projects({ lang }: ProjectsProps) {
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
    <section id="projects" ref={sectionRef} className="section-padding bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container-max">
        {/* Section header */}
        <div className="text-center mb-12 fade-in-up">
          <span className="text-secondary font-semibold text-sm tracking-widest uppercase">
            {t.sectionLabel}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary dark:text-white mt-2">{t.title}</h2>
          <div className="w-20 h-1 bg-secondary mx-auto mt-4" />
          <p className="text-slate-500 dark:text-slate-400 mt-4 max-w-2xl mx-auto">{t.subtitle}</p>
        </div>

        {/* Project cards */}
        <div className="space-y-10">
          {t.projects.map((project, i) => (
            <ProjectCard key={i} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
