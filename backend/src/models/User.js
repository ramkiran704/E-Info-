import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      lowercase: true,
      trim: true
    },
    password: {
      type: String,
      required: [true, 'Password is required']
    },
    phone: {
      type: String,
      trim: true,
      default: ''
    },
    // Main User Category matching your subpages
    userType: {
      type: String,
      required: true,
      enum: [
        'Student',
        'Farmer',
        'Business',
        'Senior Citizen',
        'Disabled Citizen',
        'General'
      ],
      default: 'General'
    },
    state: {
      type: String,
      default: ''
    },
    // Category-specific details stored cleanly as a flexible sub-document
    categoryDetails: {
      // For Students
      institution: { type: String, default: '' },
      educationLevel: { type: String, default: '' },

      // For Farmers
      landSizeInAcres: { type: Number, default: 0 },
      cropTypes: [{ type: String }],

      // For Business
      companyName: { type: String, default: '' },
      registrationNumber: { type: String, default: '' },

      // For Disabled Citizens
      disabilityType: { type: String, default: '' },
      disabilityPercentage: { type: Number, default: 0 },

      // For Senior Citizens
      age: { type: Number, default: 0 }
    },
    // Tracking scheme applications for user profiles
    appliedSchemes: [
      {
        schemeId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Scheme'
        },
        appliedAt: {
          type: Date,
          default: Date.now
        },
        status: {
          type: String,
          enum: ['Pending', 'Approved', 'Rejected'],
          default: 'Pending'
        }
      }
    ]
  },
  {
    timestamps: true // Automatically generates createdAt & updatedAt
  }
);

export default mongoose.model('User', UserSchema);