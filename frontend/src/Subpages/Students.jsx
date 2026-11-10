import React from 'react';
import SubpageLayout from './SubpageLayout.jsx';

export default function Students() {
  const defaultData = [
    { id: 1, title: 'Central Sector Scheme of Scholarships', details: 'Financial aid for meritorious college and university students.', eligibility: 'Top 20th percentile in Class 12 board exams' },
    { id: 2, title: 'PM Vidyalaxmi Education Loan Scheme', details: 'Single window portal for accessing education loans and subsidies.', eligibility: 'Students pursuing higher studies in India or abroad' }
  ];
  return <SubpageLayout title="Student Welfare Schemes" description="Higher education funding, laptop distribution, and student subsidies." categoryKey="students" defaultData={defaultData} />;
}