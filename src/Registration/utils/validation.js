import { todayISO } from './date';

export const STEP_FIELDS = {
  1: ['fullName', 'dob', 'email', 'phone', 'city'],
  2: ['course', 'startDate', 'mode'],
  3: ['terms'],
};

export const LAST_STEP = 3;

const RULES = {
  fullName: (v) => (v.fullName?.trim().length < 3 ? 'Enter your full name (at least 3 characters).' : ''),
  dob: (v) => {
    if (!v.dob) {
      return 'Enter your date of birth.';
    }
    const age = (Date.now() - new Date(v.dob)) / (365.25 * 24 * 60 * 60 * 1000);
    return age < 10 ? 'Applicants must be at least 10 years old.' : '';
  },
  email: (v) => (/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email?.trim() || '') ? '' : 'Enter a valid email address, like name@example.com.'),
  phone: (v) => (/^\d{10}$/.test(v.phone?.replace(/[\s-]/g, '') || '') ? '' : 'Enter a 10-digit mobile number.'),
  city: (v) => (v.city?.trim() ? '' : 'Enter your city.'),
  course: (v) => (v.course ? '' : 'Choose the course you want to join.'),
  startDate: (v) => {
    if (!v.startDate) {
      return 'Choose when you would like to start.';
    }
    return v.startDate < todayISO() ? 'Start date cannot be in the past.' : '';
  },
  mode: (v) => (v.mode ? '' : 'Choose how you want to attend.'),
  terms: (v) => (v.terms ? '' : 'Accept the terms to continue.'),
};

export function validate(names, values) {
  const errors = {};
  names.forEach((name) => {
    const fn = RULES[name];
    if (fn) {
      const msg = fn(values);
      if (msg) {
        errors[name] = msg;
      }
    }
  });
  return errors;
}
