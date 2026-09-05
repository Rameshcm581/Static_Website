// src/Services/pages/Services.jsx — services hub
import usePageMeta from '@hooks/usePageMeta';
import { COMPANY } from '@data/company';
import WhySection from '@components/WhySection';
import ProcessSection from '@components/ProcessSection';
import FinalCta from '@components/FinalCta';
import ServicesHero from '@/Services/Services/ServicesHero';
import ServiceGrid from '@/Services/Services/ServiceGrid';
import './styles/Services.css';

export default function Services() {
  usePageMeta({
    title: `Services | MVP, Web, Mobile, AI & Consulting — ${COMPANY.name}`,
    description: 'Six service areas: MVP development, web & mobile applications, AI/ML & chatbots, IoT & AR, and technology consulting. One accountable team.',
  });

  return (
    <div className="services-page">
      <ServicesHero />
      <ServiceGrid />
      <WhySection />
      <ProcessSection />
      <FinalCta />
    </div>
  );
}
