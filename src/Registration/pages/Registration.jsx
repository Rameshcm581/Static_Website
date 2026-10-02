import { useCallback, useState } from 'react';
import usePageMeta from '@hooks/usePageMeta';
import PageBanner from '@components/PageBanner';
import SelectionCard from '../components/SelectionCard';
import RegistrationForm from '../components/RegistrationForm';
import { INITIAL_VALUES } from '../data/courses';
import { COMPANY } from '@data/company';
import { ROUTES } from '@data/navigation';
import '../styles/Registration.css';

const META = [
  { icon: 'award', title: 'Accreditation', sub: 'Industry-recognized certifications' },
  { icon: 'users', title: 'Cohort Size', sub: 'Limited seats per batch' },
  { icon: 'calendar', title: 'New Batches', sub: 'Monthly flexible intakes' },
  { icon: 'shield', title: 'Mentorship', sub: 'Senior engineer-led reviews' },
];

export default function Registration() {
  usePageMeta({
    title: `Course Registration & Admissions | ${COMPANY.name}`,
    description: `Enroll in industry-led software engineering, UI/UX design, and technology courses at ${COMPANY.name}. Streamlined 3-step registration.`,
  });

  const [values, setValues] = useState(INITIAL_VALUES);

  const handleChange = useCallback((name, value) => {
    setValues((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleReset = useCallback(() => {
    setValues(INITIAL_VALUES);
  }, []);

  return (
    <div className="reg-page">
      <PageBanner
        crumbs={[{ label: 'Home', to: ROUTES.HOME }, { label: 'Register' }]}
        eyebrow="Admissions &amp; Upskilling"
        title="Register for a course that"
        accent="propels your engineering career."
        lede="Complete this streamlined single-page registration to reserve your cohort seat. Admissions evaluates every profile and confirms enrollment within one business day."
        meta={META}
      />

      <section className="reg-section">
        <div className="wrap reg-layout">
          <div className="reg-layout__sidebar">
            <SelectionCard values={values} />
          </div>
          <div className="reg-layout__main">
            <RegistrationForm
              values={values}
              onChange={handleChange}
              onReset={handleReset}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
