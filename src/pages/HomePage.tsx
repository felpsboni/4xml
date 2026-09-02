import React from 'react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { WhatsAppFloat } from '../components/layout/WhatsAppFloat';
import { CookieConsent } from '../components/layout/CookieConsent';
import { HeroSection } from '../components/sections/HeroSection';
import { AboutSection } from '../components/sections/AboutSection';
import { FeaturesSection } from '../components/sections/FeaturesSection';
import { SystemShowcase } from '../components/sections/SystemShowcase';
import { ProofAndMetricsSection } from '../components/sections/ProofAndMetricsSection';
import { ComparisonSection } from '../components/sections/ComparisonSection';
import { ImplementationSection } from '../components/sections/ImplementationSection';
import { BlogPreviewSection } from '../components/sections/BlogPreviewSection';
import { FaqSection } from '../components/sections/FaqSection';
import { ContactSection } from '../components/sections/ContactSection';

export const HomePage: React.FC = () => {
  const scrollToContact = () => {
    const contactEl = document.getElementById('contato');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToFeatures = () => {
    const featEl = document.getElementById('funcionalidades');
    if (featEl) {
      featEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-[#07121E] transition-colors duration-200">
      {/* Top Header */}
      <Header />

      {/* Main Content Sections */}
      <main id="main-content" className="flex-1">
        <HeroSection
          onContactClick={scrollToContact}
          onFeaturesClick={scrollToFeatures}
        />
        <AboutSection />
        <FeaturesSection onContactClick={scrollToContact} />
        <SystemShowcase onContactClick={scrollToContact} />
        <ProofAndMetricsSection />
        <ComparisonSection onContactClick={scrollToContact} />
        <ImplementationSection />
        <BlogPreviewSection />
        <FaqSection onContactClick={scrollToContact} />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Utilities */}
      <WhatsAppFloat />
      <CookieConsent />
    </div>
  );
};
