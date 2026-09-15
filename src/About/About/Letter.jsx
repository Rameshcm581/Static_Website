// src/About/About/Letter.jsx — why we started: one thesis, three beats
import { COMPANY } from '@data/company';
import './styles/Letter.css';

const BEATS = [
  {
    label: 'The problem',
    text: "Most businesses around us run on WhatsApp, spreadsheets and memory. It works — until the day it doesn't. And the software that could fix it usually comes from far away, priced for someone else, with nobody to call after launch.",
  },
  {
    label: 'The other option',
    text: 'A team nearby that listens first, builds only what’s needed, and stays around to keep it running. Built in Erode, for the businesses around it — and for anyone further away who wants to be treated the same way.',
  },
  {
    label: 'The honest bit',
    text: 'We’re a young studio, and we say so. What we lack in years we make up for in attention — a few projects at a time, senior people on each one, and code you own outright.',
  },
];

export default function Letter() {
  return (
    <section className="letter">
      <div className="wrap">
        <h2 className="letter-thesis">
          We started this studio<br />to be <span className="italic">the other option.</span>
        </h2>
        <div className="letter-rule" aria-hidden="true" />
        <div className="letter-beats">
          {BEATS.map((b, i) => (
            <div className="beat" key={b.label} style={{ '--i': i }}>
              <span className="beat-label">{b.label}</span>
              <p>{b.text}</p>
            </div>
          ))}
        </div>
        <div className="letter-sign">— {COMPANY.name}, {COMPANY.operationsCity}</div>
      </div>
    </section>
  );
}
