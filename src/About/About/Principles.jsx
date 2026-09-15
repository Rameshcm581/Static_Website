// src/About/About/Principles.jsx — three lines taped above the desk: the verbs set huge, the rest beneath
import './styles/Principles.css';

const PRINCIPLES = [
  { verb: 'Solve', rest: 'the real problem', text: 'Not the requested feature. Often the brief is a symptom and the answer is somewhere quieter.' },
  { verb: 'Ship', rest: 'something usable early', text: 'Then improve with evidence, not opinion. Get to real users as fast as is responsible.' },
  { verb: 'Write', rest: 'code people can own', text: 'Clean, documented, readable by your future engineering team — and by us six months from now.' },
];

export default function Principles() {
  return (
    <section className="principles">
      <div className="wrap">
        <div className="principles-head">
          <h2>Three lines taped<br /><span className="italic">above the desk.</span></h2>
          <p>We don&apos;t have a manifesto. We have these, and we test every engagement against them.</p>
        </div>
        <ul className="verbs">
          {PRINCIPLES.map((p, i) => (
            <li className="verb" key={p.verb} style={{ '--i': i }}>
              <h3>
                <span className="verb-word">{p.verb}</span>
                <span className="verb-rest">{p.rest}</span>
              </h3>
              <p>{p.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
