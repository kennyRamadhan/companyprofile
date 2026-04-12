import { useEffect, useRef } from "react";

interface ContactProps {
  lang: "id" | "en";
}

const contactData = {
  id: {
    sectionLabel: "Hubungi Kami",
    title: "Diskusikan Proyek Anda Hari Ini",
    subtitle: "Tim kami siap membantu Anda merencanakan dan mengeksekusi proyek dengan hasil terbaik.",
    address: "Jl. Durian 1 Blok T2 No.27, Lubangbuaya, Kec. Setu, Kab. Bekasi, Jawa Barat 17320",
    viewMap: "Lihat di Google Maps",
    form: {
      nameLabel: "Nama Lengkap",
      namePlaceholder: "Masukkan nama Anda",
      emailLabel: "Email",
      emailPlaceholder: "Masukkan email Anda",
      phoneLabel: "Nomor Telepon",
      phonePlaceholder: "Masukkan nomor telepon",
      subjectLabel: "Jenis Layanan",
      subjectPlaceholder: "Pilih jenis layanan",
      subjectOptions: [
        "Konstruksi Bangunan",
        "Renovasi & Remodeling",
        "Desain Arsitektur",
        "Interior Design",
        "Manajemen Proyek",
        "Konsultasi Teknik",
        "Lainnya",
      ],
      messageLabel: "Detail Proyek",
      messagePlaceholder: "Ceritakan detail kebutuhan proyek Anda...",
      submit: "Kirim Permintaan",
    },
    nextRedirect: "/id",
  },
  en: {
    sectionLabel: "Contact Us",
    title: "Let\u2019s Discuss Your Project Today",
    subtitle: "Our team is ready to help you plan and execute your project for the best results.",
    address: "Jl. Durian 1 Blok T2 No.27, Lubangbuaya, Kec. Setu, Kab. Bekasi, Jawa Barat 17320",
    viewMap: "View on Google Maps",
    form: {
      nameLabel: "Full Name",
      namePlaceholder: "Enter your name",
      emailLabel: "Email",
      emailPlaceholder: "Enter your email",
      phoneLabel: "Phone Number",
      phonePlaceholder: "Enter your phone number",
      subjectLabel: "Service Type",
      subjectPlaceholder: "Select a service",
      subjectOptions: [
        "Building Construction",
        "Renovation & Remodeling",
        "Architectural Design",
        "Interior Design",
        "Project Management",
        "Engineering Consultation",
        "Other",
      ],
      messageLabel: "Project Details",
      messagePlaceholder: "Tell us about your project requirements...",
      submit: "Submit Request",
    },
    nextRedirect: "/en",
  },
};

const MAPS_EMBED_URL =
  "https://maps.google.com/maps?q=Jl.+Durian+1+Blok+T2+No.27+Lubangbuaya+Setu+Bekasi&t=&z=15&ie=UTF8&iwloc=&output=embed";

const MAPS_LINK = "https://maps.app.goo.gl/b8aMefPvEgRnznn16";

export default function Contact({ lang }: ContactProps) {
  const t = contactData[lang];
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target
              .querySelectorAll(".fade-in-up, .fade-in-left, .fade-in-right")
              .forEach((el) => el.classList.add("visible"));
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
    <section id="contact" ref={sectionRef} className="section-padding bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container-max">
        {/* Section header */}
        <div className="text-center mb-16 fade-in-up">
          <span className="text-secondary font-semibold text-sm tracking-widest uppercase">
            {t.sectionLabel}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary dark:text-white mt-2">
            {t.title}
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto mt-4" />
          <p className="text-slate-500 dark:text-slate-400 mt-4 max-w-2xl mx-auto">{t.subtitle}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Google Maps */}
          <div className="fade-in-left">
            <div className="rounded-xl overflow-hidden shadow-md">
              <iframe
                src={MAPS_EMBED_URL}
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Syah Construction Location"
              />
            </div>
            <div className="mt-3 flex items-start gap-2 text-sm text-slate-500 dark:text-slate-400">
              <svg className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>{t.address}</span>
            </div>
            <a
              href={MAPS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 mt-3 text-sm font-semibold text-secondary hover:text-secondary-600 transition-colors"
            >
              {t.viewMap}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>

          {/* Contact Form (Formsubmit) */}
          <div className="fade-in-right">
            <form
              action="https://formsubmit.co/syahconstructionpt@gmail.com"
              method="POST"
              className="space-y-5"
            >
              <input type="hidden" name="_subject" value="Pesan Baru dari Website Syah Construction" />
              <input type="hidden" name="_captcha" value="true" />
              <input type="hidden" name="_next" value={`https://companyprofile-eosin-phi.vercel.app${t.nextRedirect}`} />
              <input type="hidden" name="_template" value="table" />

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-medium text-primary dark:text-slate-200 mb-1.5">
                    {t.form.nameLabel}
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    required
                    placeholder={t.form.namePlaceholder}
                    className="w-full px-4 py-3 border border-slate-200 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-colors text-sm bg-white dark:bg-slate-800 dark:text-white"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-sm font-medium text-primary dark:text-slate-200 mb-1.5">
                    {t.form.emailLabel}
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    required
                    placeholder={t.form.emailPlaceholder}
                    className="w-full px-4 py-3 border border-slate-200 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-colors text-sm bg-white dark:bg-slate-800 dark:text-white"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="contact-phone" className="block text-sm font-medium text-primary dark:text-slate-200 mb-1.5">
                    {t.form.phoneLabel}
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    name="phone"
                    placeholder={t.form.phonePlaceholder}
                    className="w-full px-4 py-3 border border-slate-200 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-colors text-sm bg-white dark:bg-slate-800 dark:text-white"
                  />
                </div>
                <div>
                  <label htmlFor="service-select" className="block text-sm font-medium text-primary dark:text-slate-200 mb-1.5">
                    {t.form.subjectLabel}
                  </label>
                  <select
                    id="service-select"
                    name="service"
                    required
                    aria-label={t.form.subjectPlaceholder}
                    className="w-full px-4 py-3 border border-slate-200 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-colors text-sm text-slate-600 dark:text-slate-300 bg-white dark:bg-slate-800"
                  >
                    <option value="">{t.form.subjectPlaceholder}</option>
                    {t.form.subjectOptions.map((opt, i) => (
                      <option key={i} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-sm font-medium text-primary dark:text-slate-200 mb-1.5">
                  {t.form.messageLabel}
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={5}
                  placeholder={t.form.messagePlaceholder}
                  className="w-full px-4 py-3 border border-slate-200 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-colors text-sm resize-none bg-white dark:bg-slate-800 dark:text-white"
                />
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-3.5 bg-amber-700 hover:bg-amber-800 text-white font-semibold rounded-lg transition-colors duration-200 shadow-lg shadow-amber-700/25"
              >
                {t.form.submit}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
