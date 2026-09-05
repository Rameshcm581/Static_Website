import SectionHead from './SectionHead';
import FeatureCards from './FeatureCards';
import './styles/WhySection.css';

const CARDS = [
  { icon: 'users', title: 'Small & senior', text: 'You work with the people writing your code. Decisions are fast and quality stays high.' },
  { icon: 'compass', title: 'Real-problem first', text: 'Every engagement starts with discovery — we understand the actual problem before writing any code.' },
  { icon: 'target', title: 'Outcome-owned', text: 'We treat the result as ours. From discovery through iteration, one team carries the engagement.' },
  { icon: 'code', title: 'Code you own', text: 'Clean, documented, readable. Your future engineering hires will thank you for it.' },
  { icon: 'layers', title: 'Ship early, then improve', text: 'Get something usable in front of users fast, then improve with evidence — not opinion.' },
  { icon: 'shield', title: 'Honest scope & timelines', text: 'We tell you the awkward truth before the engagement, not at the end of it. Fixed quotes, no surprises.' },
];

export default function WhySection() {
  return (
    <section id="why" className="why">
      <div className="wrap">
        <SectionHead
          eyebrow="Why teams choose us"
          title={<>A small team that<br /><span className="italic">acts like yours.</span></>}
          text="We're not a body shop and we're not an agency. We're a product engineering studio that's chosen, repeatedly, by founders and product owners who want real ownership and real accountability."
        />
        <FeatureCards items={CARDS} />
      </div>
    </section>
  );
}
