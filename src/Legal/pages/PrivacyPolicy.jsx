// src/Legal/pages/PrivacyPolicy.jsx — Comprehensive Privacy Policy
import { useState, useEffect } from 'react';
import usePageMeta from '@hooks/usePageMeta';
import { COMPANY, MAILTO } from '@data/company';
import Icon from '@components/Icon';
import LegalContactCard from '../components/LegalContactCard';
import '../styles/Legal.css';

const SECTIONS = [
  { id: 'overview', title: '1. Overview & Scope' },
  { id: 'data-collected', title: '2. Information We Collect' },
  { id: 'how-we-use', title: '3. How We Use Your Data' },
  { id: 'legal-basis', title: '4. Legal Basis for Processing' },
  { id: 'data-sharing', title: '5. Data Sharing & Third Parties' },
  { id: 'data-retention', title: '6. Retention & Security' },
  { id: 'your-rights', title: '7. Your Privacy Rights' },
  { id: 'international-transfers', title: '8. International Data Transfers' },
  { id: 'childrens-privacy', title: '9. Children\'s Privacy' },
  { id: 'updates', title: '10. Policy Updates' },
  { id: 'contact-us', title: '11. Grievance Officer & Contact' },
];

export default function PrivacyPolicy() {
  usePageMeta({
    title: `Privacy Policy | ${COMPANY.name}`,
    description: `Learn how ${COMPANY.name} protects your personal data, project information, and privacy in compliance with Indian IT laws and global data protection standards.`,
  });

  const [activeId, setActiveId] = useState('overview');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 160;
      for (const section of SECTIONS) {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveId(section.id);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="legal-page">
      {/* Hero Banner */}
      <section className="legal-hero">
        <div className="wrap">
          <div className="legal-hero__badge">
            <span className="legal-hero__badge-dot"></span>
            Privacy & Trust Center
          </div>
          <h1>Privacy Policy</h1>
          <p className="legal-hero__subtitle">
            Transparent information about how {COMPANY.name} collects, uses, and safeguards your personal data when you visit our website or engage our software development services.
          </p>

          <div className="legal-meta">
            <div className="legal-meta__item">
              <strong>Effective Date:</strong> September 25, 2026
            </div>
            <div className="legal-meta__item">
              <strong>Last Updated:</strong> September 25, 2026
            </div>
            <div className="legal-meta__item">
              <strong>Version:</strong> 1.2
            </div>
            <button type="button" className="legal-print-btn" onClick={handlePrint}>
              <Icon name="print" size={15} /> Print Document
            </button>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="wrap">
        <div className="legal-layout">
          {/* Sidebar Navigation */}
          <aside className="legal-sidebar">
            <div className="legal-sidebar__title">Table of Contents</div>
            <nav className="legal-sidebar__nav">
              {SECTIONS.map((sec) => (
                <a
                  key={sec.id}
                  href={`#${sec.id}`}
                  className={`legal-sidebar__link ${activeId === sec.id ? 'active' : ''}`}
                >
                  {sec.title}
                </a>
              ))}
            </nav>

            <div className="legal-sidebar__quick-box">
              <h5>Have Questions?</h5>
              <p>Our Data Protection & Grievance team is ready to assist you.</p>
              <a href={MAILTO} className="legal-sidebar__quick-btn">
                Contact Data Team →
              </a>
            </div>
          </aside>

          {/* Legal Document Content */}
          <main className="legal-content">
            {/* Section 1 */}
            <section id="overview" className="legal-section">
              <h2>1. Overview & Scope</h2>
              <p>
                At <strong>{COMPANY.legalName}</strong> (&quot;{COMPANY.name}&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), protecting your personal privacy and confidential business information is foundational to how we build software and conduct business.
              </p>
              <p>
                This Privacy Policy outlines how we collect, store, process, transfer, and disclose your information when you access our website (<strong>{COMPANY.website}</strong>), use our digital platforms, communicate with our engineering teams, or engage us for web, mobile app, MVP development, data management, or technology consulting services.
              </p>
              <div className="legal-callout">
                <p>
                  <strong>Key Commitment:</strong> We never sell your personal data or project assets to third-party data brokers or advertisers. All client data processed during consulting or software development remains strictly confidential.
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section id="data-collected" className="legal-section">
              <h2>2. Information We Collect</h2>
              <p>
                We collect personal information depending on how you interact with {COMPANY.name}. This falls into three main categories:
              </p>

              <h3>A. Information You Provide Directly</h3>
              <ul>
                <li><strong>Contact Information:</strong> Your name, business email address, phone number, company name, and job title provided when filling out contact forms, requesting project proposals, or scheduling calls.</li>
                <li><strong>Project & Business Data:</strong> Functional specifications, wireframes, technical documentation, repository links, or sample datasets shared with us during project consultation and execution.</li>
                <li><strong>Newsletter & Communication Preferences:</strong> Your email address and subscription preferences when opting in to our technical newsletter or blog updates.</li>
                <li><strong>Career Application Data:</strong> Resumes, cover letters, portfolios, and employment history submitted when applying for open developer or engineering roles.</li>
              </ul>

              <h3>B. Information Collected Automatically</h3>
              <ul>
                <li><strong>Device & Network Identifiers:</strong> Your IP address, browser type, operating system, network host, and geographical location (city/country level).</li>
                <li><strong>Usage & Navigation Metrics:</strong> Pages viewed, session duration, referrers, click paths, and feature interactions gathered via browser logs and analytics tools.</li>
                <li><strong>Cookies & Session Tokens:</strong> Technical cookies stored on your browser to maintain security tokens, session preferences, and state.</li>
              </ul>
            </section>

            {/* Section 3 */}
            <section id="how-we-use" className="legal-section">
              <h2>3. How We Use Your Data</h2>
              <p>
                We use the collected information for specific, legitimate business purposes, including:
              </p>
              <ol>
                <li><strong>Delivering Services:</strong> Architecting, developing, testing, and deploying custom software applications, MVPs, and digital infrastructure as agreed in client contracts.</li>
                <li><strong>Communication & Support:</strong> Responding to client inquiries, providing technical support, dispatching project status reports, and communicating software release milestones.</li>
                <li><strong>Security & Authentication:</strong> Monitoring application performance, preventing authorization bypasses, verifying security headers, and protecting against cyber threats.</li>
                <li><strong>Marketing & Insights:</strong> Sending technical articles, studio news, or product updates (only where you have explicitly opted in or requested info).</li>
                <li><strong>Legal & Regulatory Compliance:</strong> Fulfilling tax obligations, legal documentation, statutory record keeping, and responding to lawful requests from law enforcement agencies.</li>
              </ol>
            </section>

            {/* Section 4 */}
            <section id="legal-basis" className="legal-section">
              <h2>4. Legal Basis for Processing</h2>
              <p>
                Under applicable privacy regulations (including the Information Technology Act, 2000, the Digital Personal Data Protection Act, 2023 of India, and global standards like GDPR), we process data under the following legal bases:
              </p>
              <ul>
                <li><strong>Performance of Contract:</strong> Processing necessary to enter into or perform custom software engineering contracts, non-disclosure agreements (NDAs), and Master Service Agreements (MSAs).</li>
                <li><strong>Legitimate Business Interests:</strong> Operating and securing our infrastructure, preventing fraud, and delivering high-quality consulting.</li>
                <li><strong>Consent:</strong> Where you give explicit consent (e.g. subscribing to newsletter updates or accepting analytics cookies).</li>
                <li><strong>Legal Obligation:</strong> Compliance with statutory accounting, tax, or legal requirements in {COMPANY.country}.</li>
              </ul>
            </section>

            {/* Section 5 */}
            <section id="data-sharing" className="legal-section">
              <h2>5. Data Sharing & Third Parties</h2>
              <p>
                We maintain strict confidentiality regarding all client code and personal records. We only share information with trusted third-party service providers under binding confidentiality obligations for operational purposes:
              </p>
              <ul>
                <li><strong>Cloud Infrastructure Providers:</strong> Host platforms and database providers (e.g. AWS, Google Cloud, Vercel, Firebase) with enterprise-grade encryption.</li>
                <li><strong>Communication & Collaboration Tools:</strong> Email, client messaging, and ticketing platforms used for developer workflows.</li>
                <li><strong>Legal & Financial Advisors:</strong> Certified public accountants, auditors, and legal counsel operating under statutory professional privilege.</li>
              </ul>
              <p>
                We do not sell, rent, or trade your data to third parties for advertising or commercial lead generation.
              </p>
            </section>

            {/* Section 6 */}
            <section id="data-retention" className="legal-section">
              <h2>6. Retention & Security</h2>
              <p>
                We retain personal and project data only as long as necessary to fulfill the purposes outlined in this policy or as required by law:
              </p>
              <ul>
                <li>Client project documentation and code repositories are retained according to contractual agreement terms.</li>
                <li>Contact form submissions and inquiry emails are retained for up to 3 years from last active interaction.</li>
                <li>Tax and financial transaction records are retained for 7 years as mandated by Indian statutory laws.</li>
              </ul>
              <p>
                <strong>Security Infrastructure:</strong> We enforce strict industry-standard security safeguards, including TLS 1.3 encryption in transit, AES-256 encryption at rest, role-based access control (RBAC), multi-factor authentication, and routine code security reviews.
              </p>
            </section>

            {/* Section 7 */}
            <section id="your-rights" className="legal-section">
              <h2>7. Your Privacy Rights</h2>
              <p>
                Depending on your location, you hold specific rights regarding your personal data:
              </p>
              <ul>
                <li><strong>Right of Access:</strong> Request a copy of the personal information we hold about you.</li>
                <li><strong>Right to Rectification:</strong> Request correction of inaccurate or incomplete personal records.</li>
                <li><strong>Right to Erasure (&quot;Right to be Forgotten&quot;):</strong> Request deletion of your personal data when no longer needed for legal or contractual purposes.</li>
                <li><strong>Right to Withdraw Consent:</strong> Unsubscribe from marketing communications at any time via the link in emails or by contacting us.</li>
                <li><strong>Right to Data Portability:</strong> Request your data in a structured, standard machine-readable format.</li>
              </ul>
              <p>
                To exercise any of these rights, please email us at <a href={MAILTO}><strong>{COMPANY.email}</strong></a>. We will respond within 30 days.
              </p>
            </section>

            {/* Section 8 */}
            <section id="international-transfers" className="legal-section">
              <h2>8. International Data Transfers</h2>
              <p>
                Our primary operating hub is located in {COMPANY.operationsCity}, {COMPANY.state}, {COMPANY.country}. If you access our website from outside India, your information may be transferred to and processed in India or servers maintained by our global cloud service providers. We ensure all cross-border transfers comply with appropriate contractual clauses and data encryption standards.
              </p>
            </section>

            {/* Section 9 */}
            <section id="childrens-privacy" className="legal-section">
              <h2>9. Children&apos;s Privacy</h2>
              <p>
                Our services are directed exclusively to business professionals, founders, and enterprises. We do not knowingly collect or solicit personal data from children under the age of 18. If we learn that we have inadvertently collected data from a minor, we will promptly delete it.
              </p>
            </section>

            {/* Section 10 */}
            <section id="updates" className="legal-section">
              <h2>10. Policy Updates</h2>
              <p>
                We may update this Privacy Policy from time to time to reflect changes in software practices, legal requirements, or new features. When changes are made, we will update the &quot;Last Updated&quot; date at the top of this page. We encourage you to review this policy periodically.
              </p>
            </section>

            {/* Section 11 */}
            <section id="contact-us" className="legal-section">
              <h2>11. Grievance Officer & Contact Information</h2>
              <p>
                If you have any questions, concerns, or grievances regarding this Privacy Policy or our data handling practices, please contact our Data Protection & Grievance Officer:
              </p>

              <LegalContactCard subtitle="Data Protection & Grievance Cell" />
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
