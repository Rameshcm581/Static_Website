export const COURSE_GROUPS = [
  {
    label: 'Software Engineering',
    courses: [
      'Full Stack Web Development',
      'Python for Data Science & AI',
      'Java Enterprise & Cloud Backend',
    ],
  },
  {
    label: 'Product & Design',
    courses: [
      'UI / UX Product Design',
      'Design Systems & Brand Identity',
    ],
  },
  {
    label: 'Technology & Growth',
    courses: [
      'Digital Marketing & Growth Engineering',
      'Agile Technical Project Management',
    ],
  },
];

export const COURSES = {
  'Full Stack Web Development': {
    duration: '16 weeks',
    level: 'Beginner to Job-Ready',
    blurb: 'Modern JavaScript, React, Node.js, databases, and REST APIs, finishing with a deployable capstone project.',
  },
  'Python for Data Science & AI': {
    duration: '12 weeks',
    level: 'Beginner to Intermediate',
    blurb: 'Python fundamentals, pandas, NumPy, data visualization, and applied machine learning models on live datasets.',
  },
  'Java Enterprise & Cloud Backend': {
    duration: '14 weeks',
    level: 'Intermediate',
    blurb: 'Core Java, Spring Boot microservices, security protocols, PostgreSQL, and AWS container deployment.',
  },
  'UI / UX Product Design': {
    duration: '10 weeks',
    level: 'Beginner to Advanced',
    blurb: 'User research, wireframing, interactive prototyping in Figma, and design system governance.',
  },
  'Design Systems & Brand Identity': {
    duration: '8 weeks',
    level: 'All Levels',
    blurb: 'Visual hierarchy, typography, multi-theme token architectures, and accessibility-first UI engineering.',
  },
  'Digital Marketing & Growth Engineering': {
    duration: '8 weeks',
    level: 'All Levels',
    blurb: 'Performance marketing, search engine optimization, marketing automation, and conversion rate analytics.',
  },
  'Agile Technical Project Management': {
    duration: '6 weeks',
    level: 'Working Professionals',
    blurb: 'Scrum workflows, sprint scoping, cross-functional delivery leadership, and certification readiness.',
  },
};

export const GENDERS = ['Male', 'Female', 'Non-binary', 'Prefer not to say'];

export const MODES = [
  { value: 'Classroom', icon: 'building', desc: 'In-person interactive cohort at our campus hub' },
  { value: 'Online', icon: 'monitor', desc: 'Live interactive mentor-led classes & replay archive' },
  { value: 'Hybrid', icon: 'layers', desc: 'Weekend in-person labs paired with weekday virtual sessions' },
];

export const BATCHES = [
  { value: 'Weekday morning', label: 'Morning' },
  { value: 'Weekday evening', label: 'Evening' },
  { value: 'Weekend intensive', label: 'Weekend' },
];

export const QUALIFICATIONS = [
  'High school',
  'Diploma',
  "Bachelor's degree",
  "Master's degree",
  'Working professional',
  'Other',
];

export const INITIAL_VALUES = {
  fullName: '',
  dob: '',
  email: '',
  phone: '',
  gender: '',
  address: '',
  city: '',
  course: '',
  startDate: '',
  mode: '',
  batch: 'Weekday morning',
  qualification: '',
  message: '',
  terms: false,
};
