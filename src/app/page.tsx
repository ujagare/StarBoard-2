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
import Head from "next/head";
import Preloader from "@/components/Preloader";
import PopupForm from "@/components/PopupForm";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden w-full relative">
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
