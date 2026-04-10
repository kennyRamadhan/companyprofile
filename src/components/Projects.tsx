import { useState } from "react";
import Image from "next/image";

interface ProjectsProps {
  lang: "id" | "en";
}

const content = {
  id: {
    sectionLabel: "Proyek Kami",
    title: "Portfolio Proyek",
    subtitle: "Beberapa proyek terbaik yang telah kami selesaikan",
    filterAll: "Semua",
    categories: {
      commercial: "Komersial",
      residential: "Residensial",
      industrial: "Industrial",
    },
    projects: [
      {
        title: "Gedung Perkantoran BSD City",
        category: "commercial",
        year: "2024",
        description: "Pembangunan gedung perkantoran 12 lantai dengan desain modern dan fasilitas lengkap.",
        image: "/images/project-office.jpg",
      },
      {
        title: "Perumahan Green Valley Residence",
        category: "residential",
        year: "2023",
        description: "Kompleks perumahan 50 unit dengan konsep green living dan taman komunal.",
        image: "/images/project-residence.jpg",
      },
      {
        title: "Gudang Logistik Cikarang",
        category: "industrial",
        year: "2023",
        description: "Pembangunan gudang logistik 5.000 m² dengan sistem cold storage modern.",
        image: "/images/project-warehouse.jpg",
      },
      {
        title: "Renovasi Hotel Boutique Jakarta",
        category: "commercial",
        year: "2024",
        description: "Renovasi total hotel boutique 30 kamar dengan sentuhan desain kontemporer.",
        image: "/images/project-hotel.jpg",
      },
      {
        title: "Rumah Mewah Pondok Indah",
        category: "residential",
        year: "2024",
        description: "Pembangunan rumah tinggal mewah 3 lantai dengan kolam renang dan smart home system.",
        image: "/images/project-luxury-home.jpg",
      },
      {
        title: "Pabrik Manufaktur Karawang",
        category: "industrial",
        year: "2022",
        description: "Pembangunan fasilitas manufaktur 8.000 m² dengan standar ISO dan green building.",
        image: "/images/project-factory.jpg",
      },
    ],
  },
  en: {
    sectionLabel: "Our Projects",
    title: "Project Portfolio",
    subtitle: "Some of our best completed projects",
    filterAll: "All",
    categories: {
      commercial: "Commercial",
      residential: "Residential",
      industrial: "Industrial",
    },
    projects: [
      {
        title: "BSD City Office Building",
        category: "commercial",
        year: "2024",
        description: "Construction of a 12-story office building with modern design and complete facilities.",
        image: "/images/project-office.jpg",
      },
      {
        title: "Green Valley Residence",
        category: "residential",
        year: "2023",
        description: "A 50-unit residential complex with green living concept and communal gardens.",
        image: "/images/project-residence.jpg",
      },
      {
        title: "Cikarang Logistics Warehouse",
        category: "industrial",
        year: "2023",
        description: "Construction of a 5,000 m² logistics warehouse with modern cold storage system.",
        image: "/images/project-warehouse.jpg",
      },
      {
        title: "Jakarta Boutique Hotel Renovation",
        category: "commercial",
        year: "2024",
        description: "Total renovation of a 30-room boutique hotel with contemporary design touches.",
        image: "/images/project-hotel.jpg",
      },
      {
        title: "Pondok Indah Luxury Residence",
        category: "residential",
        year: "2024",
        description: "Construction of a 3-story luxury residence with pool and smart home system.",
        image: "/images/project-luxury-home.jpg",
      },
      {
        title: "Karawang Manufacturing Plant",
        category: "industrial",
        year: "2022",
        description: "Construction of an 8,000 m² manufacturing facility with ISO and green building standards.",
        image: "/images/project-factory.jpg",
      },
    ],
  },
};

export default function Projects({ lang }: ProjectsProps) {
  const t = content[lang];
  const [filter, setFilter] = useState<string>("all");

  const filtered =
    filter === "all" ? t.projects : t.projects.filter((p) => p.category === filter);

  const categoryKeys = Object.keys(t.categories) as Array<keyof typeof t.categories>;

  return (
    <section id="projects" className="section-padding bg-white">
      <div className="container-max">
        {/* Section header */}
        <div className="text-center mb-12">
          <span className="text-secondary font-semibold text-sm tracking-widest uppercase">
            {t.sectionLabel}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2">{t.title}</h2>
          <div className="w-20 h-1 bg-secondary mx-auto mt-4" />
          <p className="text-slate-500 mt-4 max-w-2xl mx-auto">{t.subtitle}</p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => setFilter("all")}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
              filter === "all"
                ? "bg-primary text-white"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            {t.filterAll}
          </button>
          {categoryKeys.map((key) => (
            <button
              key={key}
              onClick={() => setFilter(key)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === key
                  ? "bg-primary text-white"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {t.categories[key]}
            </button>
          ))}
        </div>

        {/* Project grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((project, i) => (
            <div
              key={i}
              className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 border border-slate-100"
            >
              <div className="relative overflow-hidden h-56">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-secondary text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {t.categories[project.category as keyof typeof t.categories]}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-white/90 text-primary text-xs font-semibold px-3 py-1 rounded-full">
                    {project.year}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-primary mb-2">{project.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
