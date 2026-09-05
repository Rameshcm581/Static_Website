// src/data/company.js — company facts reused across pages.
// Every value below is a placeholder: replace them here and the whole site updates.

export const COMPANY = {
  name: '[Company Name]',
  initials: 'CN',
  legalName: '[Legal Entity Name]',
  shortLegalName: '[Legal Entity Name]',
  registrationLabel: 'CIN',
  registrationNumber: '[Registration No.]',
  registrar: '[Registrar]',
  foundedYear: '[Year]',
  incorporatedOn: '[Date]',
  status: 'Active',
  email: 'hello@example.com',
  phone: '+91 00000 00000',
  operationsCity: '[City]',
  registeredOffice: '[Registered Office]',
  state: '[State]',
  country: '[Country]',
  website: 'https://example.com/',
  copyrightYear: '2026',
};

export const MAILTO = `mailto:${COMPANY.email}`;
export const TEL = `tel:${COMPANY.phone.replace(/[^\d+]/g, '')}`;
