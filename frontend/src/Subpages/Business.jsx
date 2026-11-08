import React from 'react';
import SubpageLayout from './SubpageLayout.jsx';

export default function Business() {
  const defaultData = [
    { id: 1, title: 'PMEGP Scheme', details: 'Credit-linked subsidy program to generate employment opportunities via micro-enterprises.', eligibility: 'Individuals above 18 years' },
    { id: 2, title: 'PM Mudra Yojana', details: 'Loans up to ₹10 Lakhs provided to non-corporate, non-farm small/micro enterprises.', eligibility: 'Small business owners & entrepreneurs' }
  ];
  return <SubpageLayout title="Business Schemes" description="Government funding, loans, and support for startup entrepreneurs and businesses." categoryKey="business" defaultData={defaultData} />;
}