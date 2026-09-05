// src/Services/pages/MvpDevelopment.jsx
import usePageMeta from '@hooks/usePageMeta';
import { COMPANY } from '@data/company';
import PageBanner from '@components/PageBanner';
import ProcessSection from '@components/ProcessSection';
import FinalCta from '@components/FinalCta';
import MvpDeliverables from '@/Services/MvpDevelopment/MvpDeliverables';
import { ROUTES } from '@data/navigation';
import './styles/MvpDevelopment.css';

const META = [
  { icon: 'rocket', title: 'Investor-ready prototype', sub: 'A presentable build that communicates your vision clearly to backers.' },
  { icon: 'target', title: 'Single-feature focus', sub: 'We concentrate on the one game-changer and defer the rest, on purpose.' },
  { icon: 'check', title: 'A working v1.0', sub: 'A fully functional, usable product — not a mockup or a deck.' },
  { icon: 'layers', title: 'End-to-end ownership', sub: 'One team, ideation through release. No hand-offs, no finger-pointing.' },
];

export default function MvpDevelopment() {
  usePageMeta({
    title: `MVP Development Services | Build & Launch Your MVP — ${COMPANY.name}`,
    description: 'Full-cycle MVP development: from prototype to a working v1.0. Validate your idea with users and investors, fast and cost-effectively.',
  });

  return (
    <div className="mvp-page">
      <PageBanner
        crumbs={[{ label: 'Home', to: ROUTES.HOME }, { label: 'Services', to: ROUTES.SERVICES }, { label: 'MVP Development' }]}
        eyebrow="MVP Development"
        title="Build the right thing"
        accent="first."
        lede="An MVP isn't a smaller product — it's a sharper question. We help you isolate the one feature that proves your idea, build it well, and put it in front of real users and investors so your next decisions are backed by evidence, not guesswork."
        meta={META}
      />
      <MvpDeliverables />
      <ProcessSection />
      <FinalCta />
    </div>
  );
}
