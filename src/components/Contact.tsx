import { useState, FormEvent } from "react";

interface ContactProps {
  lang: "id" | "en";
}

const content = {
  id: {
    sectionLabel: "Hubungi Kami",
    title: "Mari Diskusikan Proyek Anda",
    subtitle: "Hubungi kami untuk konsultasi gratis dan dapatkan penawaran terbaik",
    info: {
      addressLabel: "Alamat Kantor",
      address: "Jl. Jend. Sudirman Kav. 52-53, Jakarta Selatan 12190",
      phoneLabel: "Telepon",
      phone: "(021) 5555-8888",
      emailLabel: "Email",
      email: "info@bangunjayaabadi.com",
      hoursLabel: "Jam Operasional",
      hours: "Senin - Sabtu, 08:00 - 17:00 WIB",
    },
    form: {
      nameLabel: "Nama Lengkap",
      namePlaceholder: "Masukkan nama Anda",
      emailLabel: "Email",
      emailPlaceholder: "Masukkan email Anda",
      phoneLabel: "Nomor Telepon",
      phonePlaceholder: "Masukkan nomor telepon",
      subjectLabel: "Subjek",
      subjectPlaceholder: "Pilih subjek",
      subjectOptions: [
        "Konsultasi Proyek Baru",
        "Renovasi & Remodeling",
        "Desain Arsitektur",
        "Penawaran Harga",
        "Lainnya",
      ],
      messageLabel: "Pesan",
      messagePlaceholder: "Ceritakan kebutuhan proyek Anda...",
      submit: "Kirim Pesan",
      sending: "Mengirim...",
      success: "Pesan berhasil dikirim! Kami akan menghubungi Anda segera.",
    },
  },
  en: {
    sectionLabel: "Contact Us",
    title: "Let's Discuss Your Project",
    subtitle: "Contact us for a free consultation and get the best offer",
    info: {
      addressLabel: "Office Address",
      address: "Jl. Jend. Sudirman Kav. 52-53, South Jakarta 12190",
      phoneLabel: "Phone",
      phone: "(021) 5555-8888",
      emailLabel: "Email",
      email: "info@bangunjayaabadi.com",
      hoursLabel: "Operating Hours",
      hours: "Monday - Saturday, 08:00 - 17:00 WIB",
    },
    form: {
      nameLabel: "Full Name",
      namePlaceholder: "Enter your name",
      emailLabel: "Email",
      emailPlaceholder: "Enter your email",
      phoneLabel: "Phone Number",
      phonePlaceholder: "Enter your phone number",
      subjectLabel: "Subject",
      subjectPlaceholder: "Select a subject",
      subjectOptions: [
        "New Project Consultation",
        "Renovation & Remodeling",
        "Architectural Design",
        "Price Quote",
        "Other",
      ],
      messageLabel: "Message",
      messagePlaceholder: "Tell us about your project needs...",
      submit: "Send Message",
      sending: "Sending...",
      success: "Message sent successfully! We will contact you shortly.",
    },
  },
};

export default function Contact({ lang }: ContactProps) {
  const t = content[lang];
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section-padding bg-white">
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

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            {/* Address */}
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center text-secondary flex-shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-primary">{t.info.addressLabel}</h4>
                <p className="text-slate-500 text-sm mt-1">{t.info.address}</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center text-secondary flex-shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-primary">{t.info.phoneLabel}</h4>
                <p className="text-slate-500 text-sm mt-1">{t.info.phone}</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center text-secondary flex-shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-primary">{t.info.emailLabel}</h4>
                <p className="text-slate-500 text-sm mt-1">{t.info.email}</p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center text-secondary flex-shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-primary">{t.info.hoursLabel}</h4>
                <p className="text-slate-500 text-sm mt-1">{t.info.hours}</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                <svg className="w-16 h-16 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-green-700 font-semibold text-lg">{t.form.success}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-primary mb-1.5">
                      {t.form.nameLabel}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={t.form.namePlaceholder}
                      className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-colors text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-primary mb-1.5">
                      {t.form.emailLabel}
                    </label>
                    <input
                      type="email"
                      required
                      placeholder={t.form.emailPlaceholder}
                      className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-colors text-sm"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-primary mb-1.5">
                      {t.form.phoneLabel}
                    </label>
                    <input
                      type="tel"
                      placeholder={t.form.phonePlaceholder}
                      className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-colors text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-primary mb-1.5">
                      {t.form.subjectLabel}
                    </label>
                    <select
                      required
                      className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-colors text-sm text-slate-600"
                    >
                      <option value="">{t.form.subjectPlaceholder}</option>
                      {t.form.subjectOptions.map((opt, i) => (
                        <option key={i} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-primary mb-1.5">
                    {t.form.messageLabel}
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder={t.form.messagePlaceholder}
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-colors text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3.5 bg-secondary hover:bg-secondary-600 text-white font-semibold rounded-lg transition-colors duration-200 shadow-lg shadow-secondary/25"
                >
                  {t.form.submit}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
