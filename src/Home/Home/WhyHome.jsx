// src/Home/Home/WhyHome.jsx — why teams choose us, on Home: the usual way crossed out, our way underneath
import './styles/WhyHome.css';

// `instead` is the habit each reason replaces — draft copy for the company to confirm.
const REASONS = [
  { instead: 'Account managers relaying messages', title: 'Small & senior', text: 'You work with the people writing your code. Decisions are fast and quality stays high.' },
  { instead: 'A brief taken at face value', title: 'Real-problem first', text: 'Every engagement starts with discovery — we understand the actual problem before writing any code.' },
  { instead: 'A vendor you brief and chase', title: 'Outcome-owned', text: 'We treat the result as ours. From discovery through iteration, one team carries the engagement.' },
  { instead: 'Code only the vendor can maintain', title: 'Code you own', text: 'Clean, documented, readable. Your future engineering hires will thank you for it.' },
  { instead: 'A big reveal at the end', title: 'Ship early, then improve', text: 'Get something usable in front of users fast, then improve with evidence — not opinion.' },
  { instead: 'Estimates that quietly double', title: 'Honest scope & timelines', text: 'We tell you the awkward truth before the engagement, not at the end of it. Fixed quotes, no surprises.' },
];

export default function WhyHome() {
  return (
    <section id="why" className="whyh">
      <div className="wrap">
        <div className="whyh-head">
          <div>
            <div className="eyebrow">Why teams choose us</div>
            <h2>A small team that<br /><span className="italic">acts like yours.</span></h2>
          </div>
          <p>We&apos;re not a body shop and we&apos;re not an agency. Six habits of the usual way of buying software — and what we do instead.</p>
        </div>
        <ul className="whyh-list">
          {REASONS.map((r, i) => (
            <li key={r.title} style={{ '--i': i }}>
              <span className="whyh-old"><span className="whyh-old__text">{r.instead}</span></span>
              <h3>{r.title}</h3>
              <p>{r.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
