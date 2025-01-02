'use client';

import { useEffect } from 'react';

import CallToActionSection from '@/components/call-to-action-section';
import ContactSection from '@/components/contact-section';
import FeaturesSection from '@/components/features-section';
import HeroSection from '@/components/hero-section';
import ImageCarouselSection from '@/components/image-carousel-section';
import Navbar from '@/components/navbar';
import PricingSection from '@/components/pricing-section';
import TestimonialsSection from '@/components/testimonials-section';

export default function LandingPage() {
  useEffect(() => {
    const smoothScroll = (error: Event) => {
      error.preventDefault();
      const target = error.target as HTMLAnchorElement;
      const targetId = target.getAttribute('href');
      if (targetId && targetId.startsWith('#')) {
        const element = document.querySelector(targetId);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    };

    const links = document.querySelectorAll('a[href^="#"]');
    for (const link of links) {
      link.addEventListener('click', smoothScroll);
    }

    return () => {
      for (const link of links) {
        link.removeEventListener('click', smoothScroll);
      }
    };
  }, []);

  return (
    <div className='min-h-screen bg-background'>
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <ImageCarouselSection />
        <PricingSection />
        <TestimonialsSection />
        <CallToActionSection />
        <ContactSection />
      </main>
    </div>
  );
}
