// src/Services/MvpDevelopment/MvpDeliverables.jsx — "What you get" grid
import SectionHead from '@components/SectionHead';
import FeatureCards from '@components/FeatureCards';
import './styles/MvpDeliverables.css';

const DELIVERABLES = [
  { icon: 'rocket', title: 'Investor-ready prototype', text: 'A presentable, functional build that communicates your vision clearly to backers and early customers — not screenshots and a deck.' },
  { icon: 'target', title: 'Single-feature focus', text: "We concentrate on the one game-changing capability that proves your idea, and deliberately defer the rest. That's how cost and time stay down." },
  { icon: 'check', title: 'A working v1.0', text: 'A fully functional, usable product. Real users can sign up, do the thing, and give you the feedback your next round needs.' },
  { icon: 'layers', title: 'End-to-end support', text: "Ideation, planning, design, build, release — one team owns the journey. You aren't relaying messages between three vendors." },
  { icon: 'chart', title: 'Analytics from day one', text: 'Instrumented from the first commit. You know exactly how your MVP is used in the wild — and what to build next.' },
  { icon: 'compass', title: 'A path beyond v1.0', text: "When your MVP proves itself, we study how it's used and map a path to grow it into a complete product on a foundation built to scale." },
];

export default function MvpDeliverables() {
  return (
    <section className="deliverables">
      <div className="wrap">
        <SectionHead
          eyebrow="What you get"
          title={<>From sketch<br /><span className="italic">to a working v1.0.</span></>}
          text="A full-cycle MVP build: discovery, scope, design, engineering, launch — and an honest map of where to go next once your idea is validated."
        />
        <FeatureCards items={DELIVERABLES} />
      </div>
    </section>
  );
}
