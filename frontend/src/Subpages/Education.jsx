import React from 'react';
import SubpageLayout from './SubpageLayout.jsx';

export default function Education() {
  const defaultData = [
    { id: 1, title: 'Post-Matric Scholarship', details: 'Financial assistance to SC/ST/OBC students studying at post-secondary level.', eligibility: 'Family income below specified threshold' },
    { id: 2, title: 'National Means-cum-Merit Scholarship', details: 'Scholarship for meritorious students of economically weaker sections.', eligibility: 'Class 8 students with min 55% marks' }
  ];
  return <SubpageLayout title="Education & Scholarships" description="Scholarships, grants, and education loan interest subsidy schemes." categoryKey="education" defaultData={defaultData} />;
}