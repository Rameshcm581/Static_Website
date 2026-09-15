// Components/ProcessSection.jsx — "How we work" as a chapter: a pinned numeral tracks the step in view
import { useEffect, useRef, useState } from 'react';
import Button from './Button';
import Icon from './Icon';
import { ROUTES } from '@data/navigation';
import './styles/ProcessSection.css';

const STEPS = [
  { n: 'I', title: 'Discovery', gets: 'Written brief', text: "We listen first. Map the real problem, the users, the constraints, and the one outcome that will tell us we've won. Written brief at the end of it." },
  { n: 'II', title: 'Scope & design', gets: 'Plan, timeline & quote', text: 'A clear, single-feature focus where it matters. Sensible architecture. A fixed-shape plan with honest timelines — and a quote you can take to the board.' },
  { n: 'III', title: 'Build', gets: 'Weekly demos', text: 'Small, senior team. Weekly demos. A working preview environment early. You stay in the loop the whole way, not surprised at the end.' },
  { n: 'IV', title: 'Launch', gets: 'Code you own', text: 'Testing, deployment, monitoring, and a clean handover of code, docs and credentials. Your team can read and own everything we leave behind.' },
  { n: 'V', title: 'Improve', gets: 'Path to v2', text: "Once it's in users' hands, we study how it's actually used and map the path to v2 — features deferred, scaling decisions, the lot." },
];

export default function ProcessSection() {
  const [active, setActive] = useState(0);
  const stepRefs = useRef([]);

  // The step crossing a band just above the viewport's centre becomes the active one.
  useEffect(() => {
    const els = stepRefs.current.filter(Boolean);
    if (!els.length || typeof IntersectionObserver === 'undefined') {
      return undefined;
    }
    const io = new IntersectionObserver(
      (entries) => {
        const hit = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (hit) {
          setActive(Number(hit.target.dataset.index));
        }
      },
      { rootMargin: '-38% 0px -47% 0px', threshold: 0 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section id="process" className="process">
      <div className="wrap">
        <div className="process-head">
          <h2>
            Five steps from<br /><span className="italic process-accent">idea to live product.</span>
          </h2>
          <p className="process-intro">
            An opinionated, repeatable process. Designed to put a real product in front
            of real users as fast as is responsible — and to keep them using it.
          </p>
        </div>

        <div className="process-body">
          <aside className="process-pin" aria-hidden="true">
            <div className="pin-numerals">
              {STEPS.map((step, i) => (
                <span key={step.n} className={`pin-n${i === active ? ' is-active' : ''}`}>{step.n}</span>
              ))}
            </div>
            <div className="pin-rail">
              {STEPS.map((step, i) => (
                <span key={step.n} className={`pin-tick${i <= active ? ' is-done' : ''}`} />
              ))}
            </div>
            <div className="pin-count">Step {active + 1} of {STEPS.length}</div>
          </aside>

          <ol className="steps">
            {STEPS.map((step, i) => (
              <li
                key={step.n}
                data-index={i}
                ref={(el) => { stepRefs.current[i] = el; }}
                className={`step${i === active ? ' is-active' : ''}`}
              >
                <div className="step-head">
                  <span className="step-n" aria-hidden="true">{step.n}</span>
                  <h3>{step.title}</h3>
                </div>
                <p>{step.text}</p>
                <div className="step-get">
                  <Icon name="check" size={12} stroke={2.4} />
                  <span><em>You get</em> {step.gets}</span>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="process-foot">
          <p>Step one is a conversation.</p>
          <Button to={ROUTES.CONTACT} variant="accent" iconLeft="calendar" iconSize={16}>
            Book a discovery call
          </Button>
        </div>
      </div>
    </section>
  );
}
