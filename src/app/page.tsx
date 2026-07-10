import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FeaturedProperties from "@/components/FeaturedProperties";
import FounderSection from "@/components/FounderSection";
import AchievementsSection from "@/components/AchievementsSection";
import ServicesSection from "@/components/ServicesSection";
import DeveloperPartners from "@/components/DeveloperPartners";
import WhyChooseUs from "@/components/WhyChooseUs";
import TestimonialsSection from "@/components/TestimonialsSection";
import FaqSection from "@/components/FaqSection";
import ContactSection from "@/components/ContactSection";
import MapSection from "@/components/MapSection";
import Footer from "@/components/Footer";
import ImageAnimator from "@/components/ImageAnimator";
import Preloader from "@/components/Preloader";
import PopupForm from "@/components/PopupForm";

const siteUrl = "https://www.starboardrealtors.co.in";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "RealEstateAgent",
      "@id": `${siteUrl}/#real-estate-agent`,
      name: "Starboard Realtors",
      url: siteUrl,
      logo: `${siteUrl}/images/New logo.webp`,
      image: `${siteUrl}/images/FEATURED OPPORTUNITIES/ChatGPT Image Jul 4, 2026, 08_40_14 PM.webp`,
      description:
        "Boutique real estate advisory firm specializing in commercial real estate, retail spaces, investment opportunities, and luxury residential properties across Pune.",
      telephone: "+919769494723",
      email: "connect@starboardrealtors.co.in",
      priceRange: "INR",
      address: {
        "@type": "PostalAddress",
        streetAddress: "201, 2nd Floor, Nandan Aspira, Opp. Ankura Hospital, Nagras Road, Aundh",
        addressLocality: "Pune",
        addressRegion: "Maharashtra",
        postalCode: "411007",
        addressCountry: "IN",
      },
      areaServed: {
        "@type": "City",
        name: "Pune",
      },
      sameAs: [
        "https://www.linkedin.com/company/starboard-realtors/",
        "https://www.instagram.com/starboardrealtors",
        "https://youtube.com/@starboardrealtors2646",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Starboard Realtors",
      publisher: {
        "@id": `${siteUrl}/#real-estate-agent`,
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${siteUrl}/#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "What areas in Pune do you specialize in?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Starboard Realtors focuses on premium Pune micro-markets including Aundh, Baner, Balewadi, Kalyani Nagar, Koregaon Park, and Kharadi.",
          },
        },
        {
          "@type": "Question",
          name: "Do you only handle commercial properties?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The firm handles commercial leasing, office space acquisitions, premium retail spaces, and ultra-luxury residential properties.",
          },
        },
        {
          "@type": "Question",
          name: "Do you assist with legal and compliance documentation?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, Starboard Realtors provides end-to-end advisory and works with trusted legal and financial partners for due diligence, compliance, and documentation.",
          },
        },
      ],
    },
  ],
};

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden w-full relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Preloader />
      <PopupForm />
      <ImageAnimator />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <FounderSection />
      <ServicesSection />
      <DeveloperPartners />
      <WhyChooseUs />
      <FeaturedProperties />
      <AchievementsSection />
      <TestimonialsSection />
      <FaqSection />
      <ContactSection />
      <MapSection />
      <Footer />
    </main>
  );
}
