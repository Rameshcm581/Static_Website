// src/Services/pages/TechnologyConsulting.jsx
import usePageMeta from '@hooks/usePageMeta';
import { COMPANY } from '@data/company';
import PageBanner from '@components/PageBanner';
import WhySection from '@components/WhySection';
import FinalCta from '@components/FinalCta';
import ConsultingAreas from '@/Services/TechnologyConsulting/ConsultingAreas';
import { ROUTES } from '@data/navigation';
import './styles/TechnologyConsulting.css';

const META = [
  { icon: 'spark', title: 'AI / ML adoption', sub: 'Predictive analytics, RAG, fine-tuning — guided by consultants who ship.' },
  { icon: 'chat', title: 'Conversational AI', sub: 'Custom chatbots that improve support, lift conversion, personalise the experience.' },
  { icon: 'iot', title: 'IoT system design', sub: 'From device data pipelines through analysis for interconnected systems.' },
  { icon: 'ar', title: 'Augmented reality', sub: 'AR strategy and pilots built for real operational outcomes, not novelty.' },
];

export default function TechnologyConsulting() {
  usePageMeta({
    title: `Technology Consulting | AI, Chatbots, IoT & AR Advisory — ${COMPANY.name}`,
    description: 'Strategic technology consulting in AI/ML, chatbots, IoT, and AR. We help you adopt the right tech and turn it into shipped, working solutions.',
  });

  return (
    <div className="consulting-page">
      <PageBanner
        crumbs={[{ label: 'Home', to: ROUTES.HOME }, { label: 'Services', to: ROUTES.SERVICES }, { label: 'Technology Consulting' }]}
        eyebrow="Technology Consulting"
        title="Advisors who also"
        accent="build."
        lede="Most consultants hand you a slide deck and leave. We stay through implementation. Across the full product lifecycle we act as your guides, problem-solvers, and strategic partners — and our goals are measured by yours."
        meta={META}
      />
      <ConsultingAreas />
      <WhySection />
      <FinalCta />
    </div>
  );
}
