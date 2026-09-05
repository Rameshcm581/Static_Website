// src/About/pages/About.jsx
import usePageMeta from '@hooks/usePageMeta';
import PageBanner from '@components/PageBanner';
import WhySection from '@components/WhySection';
import TrustBand from '@components/TrustBand';
import FinalCta from '@components/FinalCta';
import Believe from '@/About/About/Believe';
import { COMPANY } from '@data/company';
import { ROUTES } from '@data/navigation';
import './styles/About.css';

const META = [
  { icon: 'calendar', title: `Founded ${COMPANY.foundedYear}`, sub: `Incorporated ${COMPANY.incorporatedOn} · ${COMPANY.registrar} · ${COMPANY.status}.` },
  { icon: 'pin', title: `${COMPANY.state}, ${COMPANY.country}`, sub: `Operations in ${COMPANY.operationsCity} · Registered office in ${COMPANY.registeredOffice}.` },
  { icon: 'shield', title: 'Registered company', sub: `${COMPANY.legalName} · ${COMPANY.registrationLabel} ${COMPANY.registrationNumber}.` },
];

export default function About() {
  usePageMeta({
    title: `About ${COMPANY.name} | A Product Engineering Team from ${COMPANY.state}`,
    description: `${COMPANY.name} is a software studio building digital products for startups and growing businesses. Meet the team behind the engineering.`,
  });

  return (
    <div className="about-page">
      <PageBanner
        crumbs={[{ label: 'Home', to: ROUTES.HOME }, { label: 'About' }]}
        eyebrow={`About ${COMPANY.name}`}
        title="A product engineering team"
        accent={`from ${COMPANY.state}.`}
        lede={`${COMPANY.name} is a product-engineering studio founded in ${COMPANY.foundedYear} and based in ${COMPANY.state}, ${COMPANY.country}. We partner with founders and businesses that have a problem worth solving — and want a team that treats the outcome as its own.`}
        meta={META}
      />
      <Believe />
      <WhySection />
      <TrustBand />
      <FinalCta />
    </div>
  );
}
