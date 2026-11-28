import React from 'react';
import SubpageLayout from './SubpageLayout.jsx';

export default function Housing() {
  const defaultData = [
    { id: 1, title: 'PM Awas Yojana (Urban & Gramin)', details: 'Financial assistance for construction of pucca homes for eligible beneficiaries.', eligibility: 'Economically Weaker Section (EWS) / LIG households' }
  ];
  return <SubpageLayout title="Housing Schemes" description="Affordable housing subsidies and home construction grants." categoryKey="housing" defaultData={defaultData} />;
}