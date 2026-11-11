import React from 'react';
import SubpageLayout from './SubpageLayout.jsx';

export default function DisabledCitizen() {
  const defaultData = [
    { id: 1, title: 'ADIP Scheme', details: 'Assistance to disabled persons for purchasing assistive devices and aids.', eligibility: 'Persons with 40%+ disability status' },
    { id: 2, title: 'Deendayal Disabled Rehabilitation', details: 'Financial support to non-governmental organizations providing rehabilitation services.', eligibility: 'Registered PwD beneficiaries' }
  ];
  return <SubpageLayout title="Disabled Citizen Schemes" description="Support programs and assistive schemes for persons with disabilities." categoryKey="disabled-citizen" defaultData={defaultData} />;
}