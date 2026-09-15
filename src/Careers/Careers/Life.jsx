// src/Careers/Careers/Life.jsx — what it's like here, for the person considering it
import './styles/Life.css';

const POINTS = [
  { title: 'Real products, real clients', text: 'Web, mobile, AI. Real launches with real users — not internal demos or endless pitches.' },
  { title: 'Small & senior', text: 'You work directly with the people who review your work. Decisions are fast and quality stays high.' },
  { title: 'Ownership from day one', text: 'You ship what you build, you demo it to the client every week, and you stay close to the people using it.' },
  { title: 'Hybrid, in Erode', text: 'Part of the week together in Erode, the rest wherever you work best. Real work, not presenteeism.' },
];

export default function Life() {
  return (
    <section className="life">
      <div className="wrap">
        <div className="life-head">
          <h2>What it&apos;s <span className="italic">like here.</span></h2>
          <p>No ping-pong table copy. Four things that are actually true about the job.</p>
        </div>
        <ul className="life-list">
          {POINTS.map((p, i) => (
            <li key={p.title} style={{ '--i': i }}>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
