import { useEffect, useRef } from "react";

interface TestimonialsProps {
  lang: "id" | "en";
}

const content = {
  id: {
    sectionLabel: "Testimoni",
    title: "Kepercayaan Klien Adalah Prioritas Kami",
    subtitle: "Apa kata mereka tentang pengalaman bekerja bersama Syah Construction",
    testimonials: [
      {
        name: "Budi Santoso",
        role: "Direktur, PT Maju Bersama",
        text: "Syah Construction menyelesaikan proyek renovasi pabrik kami tepat waktu dengan kualitas yang melebihi ekspektasi. Profesionalisme tim mereka sangat kami apresiasi.",
        rating: 5,
      },
      {
        name: "Sari Dewi",
        role: "Owner, Rumah Tinggal",
        text: "Proses renovasi rumah kami berjalan lancar dari awal hingga serah terima. Hasil akhirnya persis sesuai desain yang dijanjikan.",
        rating: 5,
      },
      {
        name: "Hendra Wijaya",
        role: "GM Operations, Polyarome",
        text: "Dari desain 3D hingga eksekusi akhir, semuanya ditangani dengan profesional. Kantor kami berubah total dan mendukung citra brand kami.",
        rating: 5,
      },
    ],
  },
  en: {
    sectionLabel: "Testimonials",
    title: "Client Trust Is Our Top Priority",
    subtitle: "What our clients say about working with Syah Construction",
    testimonials: [
      {
        name: "Budi Santoso",
        role: "Director, PT Maju Bersama",
        text: "Syah Construction completed our factory renovation on time with quality that exceeded our expectations. We truly appreciate the professionalism of their team.",
        rating: 5,
      },
      {
        name: "Sari Dewi",
        role: "Owner, Residential House",
        text: "Our home renovation went smoothly from start to handover. The final result matched the promised design exactly.",
        rating: 5,
      },
      {
        name: "Hendra Wijaya",
        role: "GM Operations, Polyarome",
        text: "From 3D design to final execution, everything was handled professionally. Our office was completely transformed and now reinforces our brand image.",
        rating: 5,
      },
    ],
  },
};

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? "text-secondary" : "text-slate-300"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials({ lang }: TestimonialsProps) {
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
    <section id="testimonials" ref={sectionRef} className="section-padding bg-slate-50 dark:bg-gray-900 transition-colors duration-300">
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

        {/* Testimonial cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {t.testimonials.map((testimonial, i) => (
            <div
              key={i}
              className={`fade-in-up stagger-${i + 1} bg-white dark:bg-slate-800 rounded-xl p-8 shadow-sm border border-slate-100 dark:border-slate-700 relative`}
            >
              {/* Quote icon */}
              <svg
                className="absolute top-6 right-6 w-10 h-10 text-secondary/10"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11h4v10H0z" />
              </svg>

              <StarRating rating={testimonial.rating} />
              <p className="text-slate-600 dark:text-slate-300 mt-4 mb-6 leading-relaxed italic">
                &ldquo;{testimonial.text}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-primary dark:text-white">{testimonial.name}</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
