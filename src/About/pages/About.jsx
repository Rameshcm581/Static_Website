// src/About/pages/About.jsx — the studio, told as a story: opening → why we started → principles → what we build → who you'll work with
import usePageMeta from '@hooks/usePageMeta';
import TrustBand from '@components/TrustBand';
import FinalCta from '@components/FinalCta';
import Opening from '@/About/About/Opening';
import Letter from '@/About/About/Letter';
import Principles from '@/About/About/Principles';
import WhatWeBuild from '@/About/About/WhatWeBuild';
import People from '@/About/About/People';
import { COMPANY } from '@data/company';
import './styles/About.css';

export default function About() {
  usePageMeta({
    title: `About ${COMPANY.name} | Software studio in ${COMPANY.operationsCity}`,
    description: `${COMPANY.name} is a small software studio in ${COMPANY.operationsCity}, ${COMPANY.state}, building mobile apps, web applications and secure digital systems — with reliable data entry services.`,
  });

  return (
    <div className="about-page">
      <Opening />
      <Letter />
      <Principles />
      <WhatWeBuild />
      <People />
      <TrustBand />
      <FinalCta />
    </div>
  );
}
