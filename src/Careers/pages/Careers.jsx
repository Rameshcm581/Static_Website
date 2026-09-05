// src/Careers/pages/Careers.jsx
import usePageMeta from '@hooks/usePageMeta';
import { COMPANY } from '@data/company';
import PageBanner from '@components/PageBanner';
import WhySection from '@components/WhySection';
import FinalCta from '@components/FinalCta';
import Roles from '@/Careers/Careers/Roles';
import { ROUTES } from '@data/navigation';
import './styles/Careers.css';

const META = [
  { icon: 'users', title: 'Small & senior team', sub: 'Decisions are fast and quality stays high.' },
  { icon: 'layers', title: 'Real products, real clients', sub: 'Web, mobile, AI. Real launches, not internal demos.' },
  { icon: 'compass', title: 'Ownership from day one', sub: 'You ship what you build — and you stay close to the customer.' },
];

export default function Careers() {
  usePageMeta({
    title: `Careers at ${COMPANY.name} | Build Products That Ship`,
    description: `Join a small, senior product team in ${COMPANY.state}. Open roles in engineering, UI/UX, and frontend. See current openings.`,
  });

  return (
    <div className="careers-page">
      <PageBanner
        crumbs={[{ label: 'Home', to: ROUTES.HOME }, { label: 'Careers' }]}
        eyebrow="Careers"
        title="Work where"
        accent="your code ships."
        lede="We're a small team that builds real products for real clients. That means ownership from day one, short feedback loops, and the chance to see your work in users' hands — quickly."
        meta={META}
      />
      <Roles />
      <WhySection />
      <FinalCta />
    </div>
  );
}
