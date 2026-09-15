// src/Services/Services/WhyCompare.jsx — why teams choose us, as the comparison the intro implies:
// a typical agency, a body shop, and us. Row labels restate the six reasons from WhySection.
import Icon from '@components/Icon';
import { COMPANY } from '@data/company';
import './styles/WhyCompare.css';

const COLS = ['Typical agency', 'Body shop', COMPANY.name.split(' ')[0]];
const SHORT = ['Agency', 'Body shop', COMPANY.name.split(' ')[0]];

// y = yes · s = sometimes · n = rarely
const ROWS = [
  { label: 'You talk to the people writing the code', note: 'Small & senior', marks: ['n', 's', 'y'] },
  { label: 'Discovery before any code is written', note: 'Real-problem first', marks: ['s', 'n', 'y'] },
  { label: 'One team owns the outcome, start to finish', note: 'Outcome-owned', marks: ['n', 'n', 'y'] },
  { label: 'Code you own outright, documented and readable', note: 'Code you own', marks: ['s', 'y', 'y'] },
  { label: 'Something usable early, then improved with evidence', note: 'Ship early, then improve', marks: ['n', 's', 'y'] },
  { label: 'A fixed quote and honest timelines up front', note: 'Honest scope & timelines', marks: ['n', 'n', 'y'] },
];

const MARK = {
  y: { icon: 'check', text: 'Yes' },
  s: { icon: 'minus', text: 'Sometimes' },
  n: { icon: 'close', text: 'Rarely' },
};

export default function WhyCompare() {
  return (
    <section id="why" className="compare">
      <div className="wrap">
        <div className="compare-head">
          <div>
            <div className="eyebrow">Why teams choose us</div>
            <h2>A small team that<br /><span className="italic">acts like yours.</span></h2>
          </div>
          <p>
            We&apos;re not a body shop and we&apos;re not an agency. We&apos;re a product engineering
            studio that&apos;s chosen, repeatedly, by founders and product owners who want real
            ownership and real accountability. Here&apos;s what that means in practice.
          </p>
        </div>

        <div className="compare-scroll">
          <table className="compare-table">
            <thead>
              <tr>
                <th scope="col" className="c-label"><span className="sr-only">What you get</span></th>
                {COLS.map((c, i) => (
                  <th scope="col" key={c} className={i === COLS.length - 1 ? 'c-us' : undefined}>{c}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {ROWS.map((r, i) => (
                <tr key={r.note} style={{ '--i': i }}>
                  <th scope="row" className="c-label">
                    <b>{r.label}</b>
                    <span>{r.note}</span>
                  </th>
                  {r.marks.map((m, j) => (
                    <td key={COLS[j]} data-col={SHORT[j]} className={`m-${m}${j === COLS.length - 1 ? ' c-us' : ''}`}>
                      <span className="mark"><Icon name={MARK[m].icon} size={14} stroke={2.4} /></span>
                      <span className="mark-text">{MARK[m].text}</span>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="compare-note">Generalisations, admittedly — there are good agencies and good contractors. This is the shape we&apos;ve chosen, and we hold ourselves to it.</p>
      </div>
    </section>
  );
}
