// components/StructuredData.tsx
// Isse apne app/layout.tsx me import karke <StructuredData /> render kar dein
// (RootLayout ke andar, <body> ke ander ya <head> me).

export default function StructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "name": "Starboard Realtors",
    "image": "https://www.starboardrealtors.co.in/images/FEATURED%20OPPORTUNITIES/ChatGPT%20Image%20Jul%204%2C%202026%2C%2008_40_14%20PM.webp",
    "url": "https://www.starboardrealtors.co.in",
    "telephone": "+91-9769494723",
    "email": "connect@starboardrealtors.co.in",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "201, Raichandani Galaxy, Beside Croma Store, Baner",
      "addressLocality": "Pune",
      "postalCode": "411045",
      "addressCountry": "IN"
    },
    "areaServed": "Pune, Maharashtra",
    "sameAs": [
      "https://www.linkedin.com/company/starboard-realtors/",
      "https://www.instagram.com/starboardrealtors",
      "https://youtube.com/@starboardrealtors2646"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
