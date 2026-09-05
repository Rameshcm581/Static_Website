import Button from './Button';
import { ROUTES } from '@data/navigation';
import './styles/ProcessSection.css';

const STEPS = [
  { n: 'I', title: 'Discovery', time: 'Step 1', text: "We listen first. Map the real problem, the users, the constraints, and the one outcome that will tell us we've won. Written brief at the end of it." },
  { n: 'II', title: 'Scope & design', time: 'Step 2', text: 'A clear, single-feature focus where it matters. Sensible architecture. A fixed-shape plan with honest timelines — and a quote you can take to the board.' },
  { n: 'III', title: 'Build', time: 'Step 3', text: 'Small, senior team. Weekly demos. A working preview environment early. You stay in the loop the whole way, not surprised at the end.' },
  { n: 'IV', title: 'Launch', time: 'Step 4', text: 'Testing, deployment, monitoring, and a clean handover of code, docs and credentials. Your team can read and own everything we leave behind.' },
  { n: 'V', title: 'Improve', time: 'Step 5', text: "Once it's in users' hands, we study how it's actually used and map the path to v2 — features deferred, scaling decisions, the lot." },
];

export default function ProcessSection() {
  return (
    <section id="process" className="process">
      <div className="wrap process-grid">
        <div>
          <div className="eyebrow">How we work</div>
          <h2 className="process-title">
            Five steps from<br /><span className="italic process-accent">idea to live product.</span>
          </h2>
          <p className="process-intro">
            An opinionated, repeatable process. Designed to put a real product in front
            of real users as fast as is responsible — and to keep them using it.
          </p>
          <Button to={ROUTES.CONTACT} variant="accent" iconLeft="calendar" iconSize={16} className="process-cta">
            Book a discovery call
          </Button>
        </div>
        <div className="steps">
          {STEPS.map((step) => (
            <div className="step" key={step.n}>
              <div className="n">{step.n}</div>
              <div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
                <div className="time">{step.time}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
