import PropTypes from 'prop-types';

const PATHS = {
  arrow: <><path d="M5 12h14" /><path d="M13 5l7 7-7 7" /></>,
  arrowUR: <><path d="M7 17L17 7" /><path d="M8 7h9v9" /></>,
  play: <><circle cx="12" cy="12" r="10" /><path d="M10 8l6 4-6 4z" fill="currentColor" /></>,
  calendar: <><rect x="3" y="5" width="18" height="16" rx="3" /><path d="M3 9h18M8 3v4M16 3v4" /></>,
  phone: <><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.79a2 2 0 0 1-.45 2.11L8 9.91a16 16 0 0 0 6 6l1.29-1.29a2 2 0 0 1 2.11-.45c.89.35 1.83.59 2.79.72A2 2 0 0 1 22 16.92z" /></>,
  cpu: <><rect x="5" y="5" width="14" height="14" rx="2" /><rect x="9" y="9" width="6" height="6" rx="1" /><path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3" /></>,
  rocket: <><path d="M14 4s4 0 6 2-2 6-2 6l-7 7-3-3 7-7s-2-4 0-6z" /><path d="M9 14l-3 3a3 3 0 0 0 0 4 3 3 0 0 0 4 0l3-3" /><circle cx="15" cy="9" r="1.5" /></>,
  globe: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" /></>,
  phone2: <><rect x="7" y="2" width="10" height="20" rx="2.5" /><path d="M11 18h2" /></>,
  workflow: <><rect x="3" y="3" width="6" height="6" rx="1.5" /><rect x="15" y="3" width="6" height="6" rx="1.5" /><rect x="9" y="15" width="6" height="6" rx="1.5" /><path d="M9 6h6M6 9v3a3 3 0 0 0 3 3M18 9v3a3 3 0 0 1-3 3" /></>,
  spark: <><path d="M12 3l1.6 4.5L18 9l-4.4 1.5L12 15l-1.6-4.5L6 9l4.4-1.5z" /><path d="M19 14l.7 2 2 .7-2 .7L19 19l-.7-1.6-2-.7 2-.7z" /></>,
  check: <path d="M5 13l4 4L19 7" />,
  plus: <path d="M5 12h14M12 5v14" />,
  bolt: <path d="M13 2L4 14h7l-1 8 9-12h-7z" />,
  shield: <><path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6z" /><path d="M9 12l2 2 4-4" /></>,
  layers: <><path d="M12 3l9 5-9 5-9-5z" /><path d="M3 13l9 5 9-5M3 17l9 5 9-5" /></>,
  chart: <><path d="M4 19V5M4 19h16" /><path d="M8 16v-4M12 16V9M16 16v-7" /></>,
  users: <><circle cx="9" cy="8" r="3.5" /><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" /><circle cx="17" cy="9" r="2.5" /><path d="M15 20c0-2 1.5-4 4-4" /></>,
  chat: <><path d="M21 12a8 8 0 0 1-12 7l-5 1 1-5A8 8 0 1 1 21 12z" /><path d="M8 10h8M8 14h5" /></>,
  code: <path d="M9 6l-6 6 6 6M15 6l6 6-6 6" />,
  eye: <><path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z" /><circle cx="12" cy="12" r="3" /></>,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 7 9-7" /></>,
  pin: <><path d="M12 22s7-7.5 7-13a7 7 0 0 0-14 0c0 5.5 7 13 7 13z" /><circle cx="12" cy="9" r="3" /></>,
  iot: <><circle cx="12" cy="12" r="2" /><circle cx="5" cy="6" r="1.5" /><circle cx="19" cy="6" r="1.5" /><circle cx="5" cy="18" r="1.5" /><circle cx="19" cy="18" r="1.5" /><path d="M6 7l4.5 4M18 7l-4.5 4M6 17l4.5-4M18 17l-4.5-4" /></>,
  ar: <><path d="M3 7l9-5 9 5v10l-9 5-9-5z" /><path d="M3 7l9 5 9-5M12 12v10" /></>,
  twitter: <path d="M22 5.8a8.5 8.5 0 0 1-2.4.7 4.2 4.2 0 0 0 1.8-2.3 8.4 8.4 0 0 1-2.6 1 4.2 4.2 0 0 0-7.1 3.8A11.9 11.9 0 0 1 3 4.8a4.2 4.2 0 0 0 1.3 5.6 4.2 4.2 0 0 1-1.9-.5v.1a4.2 4.2 0 0 0 3.4 4.1 4.2 4.2 0 0 1-1.9.1 4.2 4.2 0 0 0 3.9 2.9A8.4 8.4 0 0 1 2 18.6a11.9 11.9 0 0 0 6.4 1.9c7.7 0 11.9-6.4 11.9-11.9v-.5A8.5 8.5 0 0 0 22 5.8z" />,
  insta: <><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" /></>,
  linkedin: <><rect x="3" y="3" width="18" height="18" rx="3" /><path d="M8 10v8M8 7v.01M12 18v-5a2 2 0 0 1 4 0v5M12 13v5" /></>,
  flag: <path d="M5 21V5a1 1 0 0 1 1-1h12l-3 4 3 4H6" />,
  target: <><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1.5" fill="currentColor" /></>,
  compass: <><circle cx="12" cy="12" r="9" /><path d="M15 9l-2 6-4 1 1-4z" fill="currentColor" stroke="none" /></>,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6L6 18" />,
};

const ICON_NAMES = Object.keys(PATHS);

export default function Icon({ name, size = 18, stroke = 1.5, className }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      {PATHS[name]}
    </svg>
  );
}

Icon.propTypes = {
  name: PropTypes.oneOf(ICON_NAMES).isRequired,
  size: PropTypes.number,
  stroke: PropTypes.number,
  className: PropTypes.string,
};
