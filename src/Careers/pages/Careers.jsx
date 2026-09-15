// src/Careers/pages/Careers.jsx — written for the candidate: opening → open roles → what it's like → how hiring works → write anyway
import usePageMeta from '@hooks/usePageMeta';
import { COMPANY } from '@data/company';
import { ROLES } from '@data/roles';
import Opening from '@/Careers/Careers/Opening';
import Roles from '@/Careers/Careers/Roles';
import Life from '@/Careers/Careers/Life';
import Hiring from '@/Careers/Careers/Hiring';
import WriteAnyway from '@/Careers/Careers/WriteAnyway';
import './styles/Careers.css';

export default function Careers() {
  usePageMeta({
    title: `Careers at ${COMPANY.name} | ${ROLES.length} open roles in ${COMPANY.operationsCity}`,
    description: `Join a small, senior software team in ${COMPANY.operationsCity}, ${COMPANY.state}. Open roles in engineering and design — hybrid, full-time, real products for real clients.`,
  });

  return (
    <div className="careers-page">
      <Opening />
      <Roles />
      <Life />
      <Hiring />
      <WriteAnyway />
    </div>
  );
}
