// src/Home/Home/SelectedWork.jsx — case-study placeholders (work is under NDA)
import SectionHead from '@components/SectionHead';
import Button from '@components/Button';
import { ROUTES } from '@data/navigation';
import './styles/SelectedWork.css';

const PLACEHOLDERS = [
  { label: 'Case study · MVP', text: "A fintech founder's first product, built from sketch to v1.0 and used in a seed round." },
  { label: 'Case study · AI', text: 'A custom chatbot replacing tier-1 support for a B2B SaaS team in southern India.' },
  { label: 'Case study · Web', text: 'A multi-tenant SaaS platform with payments, dashboards, and a reporting engine.' },
];

export default function SelectedWork() {
  return (
    <section id="work" className="cases">
      <div className="wrap">
        <SectionHead
          eyebrow="Selected work"
          title={<>Quietly building<br /><span className="italic">behind the scenes.</span></>}
          text="We're a young studio — and most of our client work is shipped under NDA. A public case-study page is coming soon. In the meantime, request a private walk-through and we'll share what we can."
        />
        <div className="placeholder-band">
          <div className="ph-row">
            {PLACEHOLDERS.map((item) => (
              <div className="ph-card" key={item.label}>
                <div className="ph-tag">Coming soon</div>
                <div className="ph-co">{item.label}</div>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
          <Button to={ROUTES.CONTACT} variant="primary" iconRight="arrow" className="ph-cta">
            Request a private walk-through
          </Button>
        </div>
      </div>
    </section>
  );
}
