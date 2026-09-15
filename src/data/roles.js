// src/data/roles.js — open roles shown on /careers. Edit here; the page updates.
// Applications go to COMPANY.email with the role title in the subject line.
// ⚠ Descriptions are draft copy for the company to confirm.
import { COMPANY } from './company';

export const ROLES = [
  {
    team: 'Engineering',
    title: 'Frontend Engineer (React)',
    type: 'Full-time',
    location: `${COMPANY.operationsCity} · Hybrid`,
    text: 'Build the web apps and admin dashboards our clients run their businesses on. React, clean components, and real users from the first month.',
  },
  {
    team: 'Design',
    title: 'UI / UX Designer',
    type: 'Full-time',
    location: `${COMPANY.operationsCity} · Hybrid`,
    text: 'Design screens people understand without training — with the client’s staff in the room, then alongside the engineers in the build.',
  },
  {
    team: 'Design',
    title: 'Web Designer',
    type: 'Full-time',
    location: `${COMPANY.operationsCity} · Hybrid`,
    text: 'Marketing sites and product pages that load fast and read clearly. Design them, build them with the team, see them live.',
  },
];

// Anchor id for a role's row on the page, e.g. 'role-frontend-engineer-react'.
export const roleId = (role) => `role-${role.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}`;
