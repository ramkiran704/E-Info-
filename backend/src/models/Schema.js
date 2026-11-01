import mongoose from 'mongoose';

const SchemeSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Scheme title is required'],
      trim: true
    },
    // Key used for API routing: /api/schemes/:categoryKey
    categoryKey: {
      type: String,
      required: true,
      enum: [
        'education',
        'employment',
        'housing',
        'financial',
        'senior-citizen',
        'disabled-citizen',
        'farmers',
        'healthcare',
        'business',
        'students'
      ],
      index: true
    },
    description: {
      type: String,
      required: true
    },
    eligibility: {
      type: String,
      required: true
    },
    benefits: {
      type: String,
      default: ''
    },
    documentsRequired: [
      {
        type: String
      }
    ],
    applicationLink: {
      type: String,
      default: ''
    },
    isActive: {
      type: Boolean,
      default: true
    }
  },
  {
    timestamps: true
  }
);

export default mongoose.model('Scheme', SchemeSchema);