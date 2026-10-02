import Icon from '@components/Icon';

const HIGHLIGHTS = [
  {
    icon: 'award',
    title: 'Industry-Accredited Certification',
    text: 'Demonstrable engineering credentials verifiable on LinkedIn and GitHub',
  },
  {
    icon: 'users',
    title: 'Small Cohorts & Senior Mentors',
    text: 'Every cohort is strictly capped to ensure personal code reviews and weekly office hours',
  },
  {
    icon: 'briefcase',
    title: 'Career & Portfolio Placement',
    text: 'Real-world project deliverables, resume workshops, and direct hiring partner referrals',
  },
];

export default function IntroPanel() {
  return (
    <section className="reg-intro" aria-labelledby="reg-page-title">
      <div className="reg-intro__inner">
        <span className="eyebrow reg-intro__eyebrow">Academic &amp; Professional Programs</span>
        <h1 className="reg-intro__title" id="reg-page-title">
          Begin your journey with <span className="italic">industry-led training.</span>
        </h1>
        <p className="reg-intro__lead">
          Reserve your place in upcoming engineering and design cohorts. Admissions reviews each application
          individually and confirms batch placement within one business day.
        </p>

        <ul className="reg-highlights" aria-label="Program benefits">
          {HIGHLIGHTS.map((item) => (
            <li key={item.title} className="reg-highlights__item">
              <span className="reg-highlights__icon">
                <Icon name={item.icon} size={20} stroke={1.75} />
              </span>
              <div className="reg-highlights__text">
                <strong className="reg-highlights__title">{item.title}</strong>
                <span className="reg-highlights__desc">{item.text}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
