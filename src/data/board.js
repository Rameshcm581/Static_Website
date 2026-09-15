// src/data/board.js — the studio board shown in "Selected work" on Home.
//
// ┌─────────────────────────────────────────────────────────────────────────────┐
// │  PLACEHOLDER CONTENT — replace every row with a real, anonymised            │
// │  engagement before launch, and keep `updated` current. Nothing here         │
// │  describes an actual client yet.                                            │
// └─────────────────────────────────────────────────────────────────────────────┘
//
// stage is one of the five steps from "How we work":
//   1 Discovery · 2 Scoping · 3 In build · 4 Launching · 5 Live

export const STAGES = ['Discovery', 'Scoping', 'In build', 'Launching', 'Live'];

export const BOARD = {
  updated: 'September 2026',
  items: [
    { project: 'Ordering app', sector: 'Retail', stage: 3, where: 'Erode' },
    { project: 'Admin & billing system', sector: 'Manufacturing', stage: 4, where: 'Tiruppur' },
    { project: 'Records digitisation', sector: 'Data entry', stage: 5, where: 'Erode' },
    { project: 'Support chatbot', sector: 'Services', stage: 1, where: 'Coimbatore' },
    { project: 'Booking website', sector: 'Clinic', stage: 2, where: 'Erode' },
  ],
};
