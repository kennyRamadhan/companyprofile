interface TestimonialsProps {
  lang: "id" | "en";
}

const content = {
  id: {
    sectionLabel: "Testimoni",
    title: "Apa Kata Klien Kami",
    subtitle: "Kepuasan klien adalah prioritas utama kami",
    testimonials: [
      {
        name: "Budi Santoso",
        role: "Direktur, PT Maju Bersama",
        text: "Bangun Jaya Abadi sangat profesional dalam menangani proyek pembangunan kantor kami. Hasilnya melampaui ekspektasi dan selesai tepat waktu. Sangat merekomendasikan!",
        rating: 5,
      },
      {
        name: "Siti Rahayu",
        role: "Pemilik Rumah, Pondok Indah",
        text: "Proses renovasi rumah kami berjalan sangat lancar. Tim mereka komunikatif, rapih, dan hasilnya luar biasa. Rumah kami sekarang terasa seperti baru!",
        rating: 5,
      },
      {
        name: "Ahmad Wijaya",
        role: "GM Operations, PT Logistik Nusantara",
        text: "Pembangunan gudang kami ditangani dengan sangat baik. Kualitas bangunan excellent dan mereka sangat memperhatikan detail keselamatan kerja.",
        rating: 5,
      },
      {
        name: "Diana Putri",
        role: "Owner, Boutique Hotel Menteng",
        text: "Renovasi hotel kami dikerjakan dengan penuh dedikasi. Desain yang mereka usulkan sangat modern dan sesuai dengan visi kami. Tamu hotel sangat puas dengan hasilnya.",
        rating: 5,
      },
    ],
  },
  en: {
    sectionLabel: "Testimonials",
    title: "What Our Clients Say",
    subtitle: "Client satisfaction is our top priority",
    testimonials: [
      {
        name: "Budi Santoso",
        role: "Director, PT Maju Bersama",
        text: "Bangun Jaya Abadi was very professional in handling our office building project. The result exceeded expectations and was completed on time. Highly recommended!",
        rating: 5,
      },
      {
        name: "Siti Rahayu",
        role: "Homeowner, Pondok Indah",
        text: "Our home renovation process went very smoothly. Their team was communicative, neat, and the results were amazing. Our house now feels brand new!",
        rating: 5,
      },
      {
        name: "Ahmad Wijaya",
        role: "GM Operations, PT Logistik Nusantara",
        text: "Our warehouse construction was handled very well. The building quality is excellent and they paid great attention to workplace safety details.",
        rating: 5,
      },
      {
        name: "Diana Putri",
        role: "Owner, Boutique Hotel Menteng",
        text: "Our hotel renovation was done with full dedication. The design they proposed was very modern and aligned with our vision. Hotel guests are very satisfied with the results.",
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

  return (
    <section id="testimonials" className="section-padding bg-slate-50">
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

        {/* Testimonial cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {t.testimonials.map((testimonial, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-8 shadow-sm border border-slate-100 relative"
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
              <p className="text-slate-600 mt-4 mb-6 leading-relaxed italic">
                &ldquo;{testimonial.text}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-primary">{testimonial.name}</p>
                  <p className="text-sm text-slate-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
