// src/About/About/Believe.jsx — the three principles
import SectionHead from '@components/SectionHead';
import './styles/Believe.css';

const PRINCIPLES = [
  { title: 'Solve the real problem', text: 'Not the requested feature. Often the brief is a symptom and the answer is somewhere quieter.' },
  { title: 'Ship something usable early', text: 'Then improve with evidence, not opinion. Get to real users as fast as is responsible.' },
  { title: 'Write code people can own', text: 'Clean, documented, readable by your future engineering team — and by us six months from now.' },
];

export default function Believe() {
  return (
    <section className="believe">
      <div className="wrap">
        <SectionHead
          eyebrow="What we believe"
          title={<>Three principles<br /><span className="italic">we don&apos;t compromise on.</span></>}
          text="We don't have a manifesto. We have these three lines, taped above the desk, that we test every engagement against."
        />
        <div className="believe-grid">
          {PRINCIPLES.map((item, i) => (
            <div className="believe-card" key={item.title}>
              <div className="big-n">0{i + 1}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
