// src/Services/TechnologyConsulting/ConsultingAreas.jsx — "Where we help" grid
import SectionHead from '@components/SectionHead';
import FeatureCards from '@components/FeatureCards';
import './styles/ConsultingAreas.css';

const AREAS = [
  { icon: 'spark', title: 'AI & machine learning', text: 'Adopt advanced algorithms, predictive analytics, and intelligent automation — guided by consultants who know what actually ships into production.' },
  { icon: 'chat', title: 'Conversational AI & chatbots', text: 'Custom assistants that improve support, lift conversion, and personalise the customer experience — wired into your existing systems, not bolted on the side.' },
  { icon: 'iot', title: 'IoT', text: 'System design through data analysis for interconnected devices that optimise operations and sharpen decision-making in the field.' },
  { icon: 'ar', title: 'Augmented reality', text: 'AR experiences that engage users and improve real operational outcomes — built with strategy first, novelty second.' },
  { icon: 'eye', title: 'Conversion-focused UX', text: 'A deliberate strategy for digital products designed around conversion, not just looks. We measure ourselves on the numbers that move.' },
  { icon: 'users', title: 'Team augmentation', text: 'Embed our engineers and consultants alongside your team for a defined engagement. We pair, we share repos, we hand it back cleanly.' },
];

export default function ConsultingAreas() {
  return (
    <section className="consulting-areas">
      <div className="wrap">
        <SectionHead
          eyebrow="Where we help"
          title={<>Five areas of<br /><span className="italic">strategic depth.</span></>}
          text="Technology keeps evolving, and we bring cross-industry experience to help you navigate it without overspending. Senior technical proficiency and affordable IT consulting — practical guidance that ends in working software."
        />
        <FeatureCards items={AREAS} />
      </div>
    </section>
  );
}
