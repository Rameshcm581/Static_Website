// src/common/pages/NotFound.jsx — 404
import usePageMeta from '@hooks/usePageMeta';
import { COMPANY } from '@data/company';
import Button from '@components/Button';
import { ROUTES } from '@data/navigation';
import './styles/NotFound.css';

export default function NotFound() {
  usePageMeta({
    title: `Page not found — ${COMPANY.name}`,
    description: 'The page you were looking for does not exist.',
  });

  return (
    <section className="not-found">
      <div className="wrap flex flex-col items-start gap-4">
        <div className="eyebrow">Error 404</div>
        <h1 className="not-found__title">
          That page<br /><span className="italic not-found__accent">isn&apos;t here.</span>
        </h1>
        <p className="lede max-w-xl">
          The link may be old, or the page may have moved. Head back home, or tell us what you were looking for.
        </p>
        <div className="flex flex-wrap gap-3 mt-4">
          <Button to={ROUTES.HOME} variant="primary" iconLeft="arrow">Back to home</Button>
          <Button to={ROUTES.CONTACT} variant="ghost" iconLeft="mail">Contact us</Button>
        </div>
      </div>
    </section>
  );
}
