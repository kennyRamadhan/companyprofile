import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="id">
      <Head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />

        {/* Default Meta Tags */}
        <meta charSet="utf-8" />
        <meta name="author" content="Syah Construction" />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="konstruksi, renovasi, desain arsitektur, interior design, kontraktor, pembangunan, Syah Construction, jasa konstruksi Indonesia"
        />

        {/* Open Graph */}
        <meta property="og:title" content="Syah Construction — Mitra Konstruksi Profesional untuk Proyek Tanpa Risiko" />
        <meta
          property="og:description"
          content="Mitra konstruksi profesional di Indonesia. Melayani pembangunan, renovasi, dan desain arsitektur dengan standar kualitas tinggi, timeline terkontrol, dan transparansi penuh."
        />
        <meta property="og:image" content="/images/icon_company.jpeg" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="id_ID" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Syah Construction — Mitra Konstruksi Profesional untuk Proyek Tanpa Risiko" />
        <meta
          name="twitter:description"
          content="Mitra konstruksi profesional di Indonesia. Melayani pembangunan, renovasi, dan desain arsitektur dengan standar kualitas tinggi, timeline terkontrol, dan transparansi penuh."
        />
        <meta name="twitter:image" content="/images/icon_company.jpeg" />

        {/* Structured Data (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ConstructionBusiness",
              name: "Syah Construction",
              description: "Mitra konstruksi profesional di Indonesia",
              foundingDate: "2021",
              email: "syahconstructionpt@gmail.com",
              telephone: "+6282277138588",
              logo: "/images/icon_company.jpeg",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Jl. Durian 1 Blok T2 No.27, Lubangbuaya",
                addressLocality: "Kec. Setu, Kabupaten Bekasi",
                addressRegion: "Jawa Barat",
                postalCode: "17320",
                addressCountry: "ID",
              },
              serviceArea: {
                "@type": "Country",
                name: "Indonesia",
              },
            }),
          }}
        />

        {/* Netlify Identity Widget — loaded only in /admin via public/admin/index.html */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}