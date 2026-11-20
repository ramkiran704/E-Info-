import React from 'react';
import SubpageLayout from './SubpageLayout.jsx';

export default function SeniorCitizen() {
  const defaultData = [
    { id: 1, title: 'Rashtriya Vayoshri Yojana', details: 'Free physical aids and assisted-living devices for senior citizens belonging to BPL category.', eligibility: 'Senior Citizens (60+ years) in BPL category' },
    { id: 2, title: 'Pradhan Mantri Vaya Vandana Yojana', details: 'Guaranteed pension scheme with stable returns for elderly citizens.', eligibility: 'Senior citizens aged 60 and above' }
  ];
  return <SubpageLayout title="Senior Citizen Schemes" description="Healthcare, pensions, and living assistance for elderly citizens." categoryKey="senior-citizen" defaultData={defaultData} />;
}