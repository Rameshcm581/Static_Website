// src/Legal/pages/TermsOfService.jsx — Comprehensive Terms of Service
import { useState, useEffect } from 'react';
import usePageMeta from '@hooks/usePageMeta';
import { COMPANY, MAILTO } from '@data/company';
import Icon from '@components/Icon';
import LegalContactCard from '../components/LegalContactCard';
import '../styles/Legal.css';

const SECTIONS = [
  { id: 'acceptance', title: '1. Acceptance of Terms' },
  { id: 'services-scope', title: '2. Scope of Services' },
  { id: 'user-obligations', title: '3. Client Responsibilities' },
  { id: 'intellectual-property', title: '4. Intellectual Property & Code Ownership' },
  { id: 'billing-estimates', title: '5. Estimates & Payment Terms' },
  { id: 'confidentiality', title: '6. Confidentiality & Non-Disclosure' },
  { id: 'warranties-disclaimers', title: '7. Warranties & Disclaimers' },
  { id: 'liability', title: '8. Limitation of Liability' },
  { id: 'termination', title: '9. Contract Termination & Handoff' },
  { id: 'governing-law', title: '10. Governing Law & Dispute Resolution' },
  { id: 'contact-terms', title: '11. Modifications & Contact' },
];

export default function TermsOfService() {
  usePageMeta({
    title: `Terms of Service | ${COMPANY.name}`,
    description: `Read the Terms of Service governing the use of ${COMPANY.name}'s software studio website, MVP development contracts, and technology consulting agreements.`,
  });

  const [activeId, setActiveId] = useState('acceptance');

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
            Legal Master Agreement
          </div>
          <h1>Terms of Service</h1>
          <p className="legal-hero__subtitle">
            These Terms of Service outline the rules, rights, and legal obligations governing your use of {COMPANY.name}&apos;s website and software engineering services.
          </p>

          <div className="legal-meta">
            <div className="legal-meta__item">
              <strong>Effective Date:</strong> September 25, 2026
            </div>
            <div className="legal-meta__item">
              <strong>Last Updated:</strong> September 25, 2026
            </div>
            <div className="legal-meta__item">
              <strong>Version:</strong> 2.0
            </div>
            <button type="button" className="legal-print-btn" onClick={handlePrint}>
              <Icon name="print" size={15} /> Print Terms
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
              <h5>Legal Questions?</h5>
              <p>Need custom contract terms or enterprise agreements?</p>
              <a href={MAILTO} className="legal-sidebar__quick-btn">
                Email Legal Team →
              </a>
            </div>
          </aside>

          {/* Legal Document Content */}
          <main className="legal-content">
            {/* Section 1 */}
            <section id="acceptance" className="legal-section">
              <h2>1. Acceptance of Terms</h2>
              <p>
                Welcome to <strong>{COMPANY.legalName}</strong> (&quot;{COMPANY.name}&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;). By accessing or using our website located at <strong>{COMPANY.website}</strong> or engaging us for software development, technical consulting, MVP engineering, or digital transformation services, you (&quot;Client&quot; or &quot;User&quot;) agree to be legally bound by these Terms of Service.
              </p>
              <p>
                If you are entering into this agreement on behalf of a company, organization, or other legal entity, you represent and warrant that you have the full legal authority to bind such entity to these Terms. If you do not agree with any part of these Terms, you must refrain from using our website or hiring our studio.
              </p>
            </section>

            {/* Section 2 */}
            <section id="services-scope" className="legal-section">
              <h2>2. Scope of Services</h2>
              <p>
                {COMPANY.name} operates as a product engineering and digital-transformation studio headquartered in {COMPANY.operationsCity}, {COMPANY.state}, {COMPANY.country}. Our capabilities include but are not limited to:
              </p>
              <ul>
                <li><strong>MVP Development:</strong> End-to-end design, rapid prototyping, and software engineering of Minimum Viable Products for startups and enterprise teams.</li>
                <li><strong>Web & Mobile Applications:</strong> Full-stack web application development, cross-platform mobile apps (iOS/Android), API integrations, and cloud backend architecture.</li>
                <li><strong>Technology Consulting:</strong> System architecture review, tech stack selection, code refactoring, performance optimization, and digital audit services.</li>
                <li><strong>Digital Data Services:</strong> Secure data processing, data entry, digitisation, and workflow automation.</li>
              </ul>
              <p>
                Detailed project specifications, timelines, milestones, deliverables, and financial terms for client engagements are formalized in separate Statements of Work (&quot;SOW&quot;) or Master Services Agreements (&quot;MSA&quot;).
              </p>
            </section>

            {/* Section 3 */}
            <section id="user-obligations" className="legal-section">
              <h2>3. Client Responsibilities & Acceptable Use</h2>
              <p>
                When using our website or collaborating with our engineering team, you agree to:
              </p>
              <ul>
                <li>Provide accurate, complete, and timely project requirements, assets, API keys, and feedback necessary for project progression.</li>
                <li>Refrain from attempting to breach, reverse engineer, vulnerability-scan, or flood our servers, websites, or client demo environments.</li>
                <li>Ensure that all data, brand assets, images, copy, and code provided to {COMPANY.name} do not infringe upon any third-party copyrights, patents, trademarks, or privacy rights.</li>
                <li>Refrain from using software or systems developed by {COMPANY.name} for unlawful purposes, money laundering, spamming, or fraudulent activity.</li>
              </ul>
            </section>

            {/* Section 4 */}
            <section id="intellectual-property" className="legal-section">
              <h2>4. Intellectual Property & Code Ownership</h2>
              <p>
                We believe in complete transparency and delivering &quot;<strong>Code your team can own</strong>&quot;:
              </p>
              <div className="legal-callout">
                <p>
                  <strong>Deliverable Ownership:</strong> Upon full payment of all invoiced fees associated with a specific SOW, {COMPANY.name} assigns and transfers to the Client all right, title, and full intellectual property ownership of the custom application source code, designs, and documentation developed specifically for that Client.
                </p>
              </div>
              <p>
                <strong>Studio Pre-existing IP:</strong> {COMPANY.name} retains ownership of pre-existing software frameworks, open-source libraries, utility scripts, internal developer tools, and generic architectural patterns developed prior to or independently of the client project. Where such background IP is incorporated into client deliverables, {COMPANY.name} grants the Client a perpetual, worldwide, non-exclusive, royalty-free license to use, modify, and extend such IP as part of the deliverable.
              </p>
            </section>

            {/* Section 5 */}
            <section id="billing-estimates" className="legal-section">
              <h2>5. Estimates & Payment Terms</h2>
              <ul>
                <li><strong>Project Estimates & Proposals:</strong> All written estimates, timelines, and proposals issued by {COMPANY.name} are valid for 30 calendar days from issuance unless specified otherwise.</li>
                <li><strong>Payment Milestones:</strong> Unless otherwise stipulated in an SOW, development projects operate on structured milestone payments (e.g. initial deposit, milestone completions, final delivery).</li>
                <li><strong>Invoicing & Taxes:</strong> Payments are due within 14 calendar days of invoice date. Prices are exclusive of statutory taxes (such as GST in India) unless stated otherwise.</li>
                <li><strong>Late Payments:</strong> Invoices remaining unpaid past 30 days may incur late interest charges at 1.5% per month or the maximum statutory rate permitted by law. We reserve the right to pause active development or suspend staging server access for overdue accounts.</li>
              </ul>
            </section>

            {/* Section 6 */}
            <section id="confidentiality" className="legal-section">
              <h2>6. Confidentiality & Non-Disclosure</h2>
              <p>
                Both parties agree that all confidential information—including business plans, source code, database structures, customer lists, financial data, and technical secrets disclosed during consultations or engineering engagements—shall be kept strictly confidential.
              </p>
              <p>
                Neither party will disclose confidential information to any third party except to employees, subcontractors, or legal/financial advisors who have a strict need to know and are bound by confidentiality terms no less protective than these Terms.
              </p>
            </section>

            {/* Section 7 */}
            <section id="warranties-disclaimers" className="legal-section">
              <h2>7. Warranties & Disclaimers</h2>
              <p>
                <strong>Warranty Period:</strong> Unless specified otherwise in a signed SOW, {COMPANY.name} provides a 30-day bug-fix warranty following production launch for custom deliverables. During this period, we will remediate non-conformities or reproducible bugs that cause software to deviate from agreed specifications at no additional cost.
              </p>
              <p>
                <strong>Website Disclaimer:</strong> Our public website content, blog posts, and interactive demos are provided on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis without warranties of any kind, whether express or implied. We do not guarantee uninterrupted or error-free site operation.
              </p>
            </section>

            {/* Section 8 */}
            <section id="liability" className="legal-section">
              <h2>8. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, in no event shall {COMPANY.legalName}, its directors, officers, employees, or partners be liable for any indirect, incidental, special, consequential, or punitive damages (including loss of profits, revenue, data, or goodwill) arising out of or related to your use of our website or services.
              </p>
              <p>
                Our aggregate financial liability under any client engagement shall not exceed the total fees paid by the Client to {COMPANY.name} under the specific Statement of Work giving rise to the claim during the preceding six (6) months.
              </p>
            </section>

            {/* Section 9 */}
            <section id="termination" className="legal-section">
              <h2>9. Contract Termination & Handoff</h2>
              <p>
                Either party may terminate a software service engagement for convenience by providing 30 days written notice, or immediately in the event of a material breach by the other party that remains uncured for 14 days following written notification.
              </p>
              <p>
                Upon termination, the Client shall pay for all work completed and expenses incurred up to the effective termination date. Upon receipt of final payment, {COMPANY.name} will deliver all completed source code, documentation, and assets to the Client.
              </p>
            </section>

            {/* Section 10 */}
            <section id="governing-law" className="legal-section">
              <h2>10. Governing Law & Dispute Resolution</h2>
              <p>
                These Terms and any non-contractual obligations or disputes arising out of them shall be governed by and construed in accordance with the laws of <strong>India</strong>, without regard to its conflict of laws principles.
              </p>
              <p>
                Any dispute, claim, or controversy arising out of or relating to these Terms or client engagements shall be subject to the exclusive jurisdiction of the competent courts located in <strong>{COMPANY.state}, India</strong>.
              </p>
            </section>

            {/* Section 11 */}
            <section id="contact-terms" className="legal-section">
              <h2>11. Modifications & Contact Information</h2>
              <p>
                We reserve the right to modify these Terms of Service at any time. Changes will take effect immediately upon posting to this page. Your continued use of our website or services after any modifications indicates your acceptance of the updated Terms.
              </p>

              <LegalContactCard subtitle="Legal & Contract Management Office" />
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
