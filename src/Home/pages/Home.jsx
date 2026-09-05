// src/Home/pages/Home.jsx
import usePageMeta from '@hooks/usePageMeta';
import { COMPANY } from '@data/company';
import WhySection from '@components/WhySection';
import ProcessSection from '@components/ProcessSection';
import TrustBand from '@components/TrustBand';
import FaqSection from '@components/FaqSection';
import FinalCta from '@components/FinalCta';
import Hero from '@/Home/Home/Hero';
import WhatWeDo from '@/Home/Home/WhatWeDo';
import SelectedWork from '@/Home/Home/SelectedWork';
import './styles/Home.css';

export default function Home() {
  usePageMeta({
    title: `${COMPANY.name} | Product Engineering & Digital Solutions Studio`,
    description: `We turn product ideas into digital solutions that solve — MVP development, web & mobile apps, and technology consulting. Build with ${COMPANY.name}.`,
  });

  return (
    <div className="home-page">
      <Hero />
      <WhatWeDo />
      <WhySection />
      <ProcessSection />
      <SelectedWork />
      <TrustBand />
      <FaqSection />
      <FinalCta />
    </div>
  );
}
