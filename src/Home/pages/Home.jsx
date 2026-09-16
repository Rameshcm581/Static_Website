// src/Home/pages/Home.jsx
import usePageMeta from '@hooks/usePageMeta';
import { COMPANY } from '@data/company';
import ProcessSection from '@components/ProcessSection';
import TrustBand from '@components/TrustBand';
import FaqSection from '@components/FaqSection';
import FinalCta from '@components/FinalCta';
import Hero from '@/Home/Home/Hero';
import WhatWeDo from '@/Home/Home/WhatWeDo';
import WhyHome from '@/Home/Home/WhyHome';
import SelectedWork from '@/Home/Home/SelectedWork';
import './styles/Home.css';

export default function Home() {
  usePageMeta({
    title: `${COMPANY.name} | Mobile Apps, Web Apps, Security & Data Entry`,
    description: `${COMPANY.name} builds mobile apps, web applications, and secure digital systems for businesses in ${COMPANY.operationsCity} and beyond, with reliable data entry services.`,
  });

  return (
    <div className="home-page">
      <Hero />
      <WhatWeDo />
      <WhyHome />
      <ProcessSection />
      <SelectedWork />
      <TrustBand />
      <FaqSection />
      <FinalCta />
    </div>
  );
}
