import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from '@layout/Layout';
import NotFound from '@common/pages/NotFound';
import { ROUTES } from '@data/navigation';

// Feature pages — lazy loaded
const Home = lazy(() => import('@/Home/pages/Home'));
const About = lazy(() => import('@/About/pages/About'));
const Services = lazy(() => import('@/Services/pages/Services'));
const MvpDevelopment = lazy(() => import('@/Services/pages/MvpDevelopment'));
const TechnologyConsulting = lazy(() => import('@/Services/pages/TechnologyConsulting'));
const Careers = lazy(() => import('@/Careers/pages/Careers'));
const Contact = lazy(() => import('@/Contact/pages/Contact'));

export default function App() {
  return (
    <Suspense fallback={<div className="page-loader">Loading…</div>}>
      <Routes>
        <Route path={ROUTES.HOME} element={<Layout />}>
          <Route index element={<Home />} />
          <Route path={ROUTES.ABOUT} element={<About />} />
          <Route path={ROUTES.SERVICES} element={<Services />} />
          <Route path={ROUTES.MVP} element={<MvpDevelopment />} />
          <Route path={ROUTES.CONSULTING} element={<TechnologyConsulting />} />
          <Route path={ROUTES.CAREERS} element={<Careers />} />
          <Route path={ROUTES.CONTACT} element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
