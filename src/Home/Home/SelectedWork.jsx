// src/Home/Home/SelectedWork.jsx — the studio board: what's in flight right now, names left off.
// Rows come from src/data/board.js; the client edits that file, not this one.
import SectionHead from '@components/SectionHead';
import Button from '@components/Button';
import Icon from '@components/Icon';
import { ROUTES } from '@data/navigation';
import { BOARD, STAGES } from '@data/board';
import './styles/SelectedWork.css';

export default function SelectedWork() {
  const live = BOARD.items.filter((i) => i.stage === STAGES.length).length;
  const inFlight = BOARD.items.length - live;

  return (
    <section id="work" className="cases">
      <div className="wrap">
        <SectionHead
          eyebrow="Selected work"
          title={<>On the board<br /><span className="italic">this month.</span></>}
          text="Most of what we build ships under NDA. So instead of case studies, here's the board: what's in flight right now, names left off. Ask for a private walk-through and we'll show you more."
        />

        <div className="board" role="table" aria-label={`Studio board, updated ${BOARD.updated}`}>
          <div className="board-bar">
            <div className="board-title">
              <span className="board-live" aria-hidden="true" />
              Studio board
            </div>
            <div className="board-meta">
              <span>{inFlight} in flight · {live} live</span>
              <span>Updated {BOARD.updated}</span>
            </div>
          </div>

          <div className="board-head" role="row">
            <span role="columnheader">Project</span>
            <span role="columnheader">Stage</span>
            <span role="columnheader" className="c-progress">Progress</span>
            <span role="columnheader">Location</span>
          </div>

          {BOARD.items.map((item, i) => {
            const isLive = item.stage === STAGES.length;
            return (
              <div className={`board-row${isLive ? ' is-live' : ''}`} role="row" key={`${item.project}-${item.sector}`} style={{ '--i': i }}>
                <div role="cell" className="c-project">
                  <b>{item.project}</b>
                  <span>{item.sector}</span>
                </div>
                <div role="cell" className="c-stage">
                  <span className={`board-stage board-stage-${item.stage}`}>
                    {isLive && <Icon name="check" size={11} stroke={2.6} />}
                    {STAGES[item.stage - 1]}
                  </span>
                </div>
                <div role="cell" className="c-progress" aria-label={`Step ${item.stage} of ${STAGES.length}`}>
                  <span className="rail" aria-hidden="true">
                    {STAGES.map((s, idx) => (
                      <i key={s} className={idx < item.stage ? (idx === item.stage - 1 ? 'now' : 'done') : ''} />
                    ))}
                  </span>
                </div>
                <div role="cell" className="c-where">{item.where}</div>
              </div>
            );
          })}

          <div className="board-foot">
            <span>Names and details withheld under NDA.</span>
            <Button to={ROUTES.CONTACT} variant="outline-dark" size="sm" iconRight="arrowUR" className="board-cta">Request a private walk-through</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
