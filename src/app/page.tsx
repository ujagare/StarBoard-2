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
        streetAddress: "201, Raichandani Galaxy, Beside Croma Store, Baner",
        addressLocality: "Pune",
        addressRegion: "Maharashtra",
        postalCode: "411045",
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
      hasMap: "https://maps.app.goo.gl/sSWefgKmva8Z8GBr9",
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Starboard Realtors",
      publisher: {
        "@id": `${siteUrl}/#real-estate-agent`,
      },
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${siteUrl}/?search={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${siteUrl}/#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: siteUrl,
        },
      ],
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
            text: "We focus on Pune's most sought-after and premium micro-markets, including Aundh, Baner, Balewadi, Kalyani Nagar, Koregaon Park, and Kharadi. Our deep local expertise ensures you get access to the finest properties in these prime locations.",
          },
        },
        {
          "@type": "Question",
          name: "Do you only handle commercial properties?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "While we have a very strong foothold in commercial leasing and office space acquisitions, our portfolio is diverse. We also specialize in premium retail spaces and ultra-luxury residential properties (4BHK and above) tailored for HNIs and corporate executives.",
          },
        },
        {
          "@type": "Question",
          name: "What makes Starboard Realtors different from other brokers?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We position ourselves as real estate advisors rather than traditional brokers. Our approach is rooted in transparency, ethical practices, and long-term value creation. We prioritize your strategic goals, offering unbiased market insights and end-to-end support throughout your real estate journey.",
          },
        },
        {
          "@type": "Question",
          name: "Do you assist with legal and compliance documentation?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, we provide comprehensive end-to-end advisory. We work closely with trusted legal and financial partners to ensure that all due diligence, compliance, and documentation processes are handled seamlessly and securely.",
          },
        },
        {
          "@type": "Question",
          name: "How do you source off-market premium properties?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "With over 6 years of deep-rooted relationships with Grade-A developers, landlords, and investors, we often gain exclusive access to off-market mandates and pre-launch opportunities before they reach the broader market.",
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
