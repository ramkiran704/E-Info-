import React from 'react';
import SubpageLayout from './SubpageLayout.jsx';

export default function Employment() {
  const defaultData = [
    { id: 1, title: 'MGNREGA', details: 'Guarantees 100 days of wage employment per financial year to rural households.', eligibility: 'Adult members of rural households' },
    { id: 2, title: 'PM Kaushal Vikas Yojana', details: 'Free skill training initiatives to help youth secure better livelihoods.', eligibility: 'Unemployed youth & school/college dropouts' }
  ];
  return <SubpageLayout title="Employment & Skill Schemes" description="Wage employment guarantees and vocational skill development programs." categoryKey="employment" defaultData={defaultData} />;
}