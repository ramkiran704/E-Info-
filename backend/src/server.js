import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/e_info_db';

mongoose
  .connect(MONGO_URI)
  .then(() => console.log('MongoDB connected successfully'))
  .catch((err) => console.error('MongoDB connection error:', err));

app.use(cors());
app.use(express.json());

// -------------------------------------------------------------
// MONGOOSE SCHEMAS & MODELS
// -------------------------------------------------------------

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: { type: String, default: '' },
    userType: {
      type: String,
      enum: ['Student', 'Farmer', 'Business', 'Senior Citizen', 'Disabled Citizen', 'General'],
      default: 'General'
    },
    state: { type: String, default: '' },
    categoryDetails: {
      institution: { type: String, default: '' },
      educationLevel: { type: String, default: '' },
      landSizeInAcres: { type: Number, default: 0 },
      cropTypes: [{ type: String }],
      companyName: { type: String, default: '' },
      registrationNumber: { type: String, default: '' },
      disabilityType: { type: String, default: '' },
      disabilityPercentage: { type: Number, default: 0 },
      age: { type: Number, default: 0 }
    }
  },
  { timestamps: true }
);

const SchemeSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    categoryKey: { type: String, required: true, index: true },
    description: { type: String, required: true },
    eligibility: { type: String, required: true },
    benefits: { type: String, default: '' },
    isActive: { type: Boolean, default: true }
  },
  { timestamps: true }
);

const User = mongoose.model('User', UserSchema);
const Scheme = mongoose.model('Scheme', SchemeSchema);

// -------------------------------------------------------------
// API ROUTES
// -------------------------------------------------------------

// Root Endpoint
app.get('/', (req, res) => {
  res.send({ status: 'success', message: 'E-Info Backend API is running' });
});

// Fetch Schemes by Subpage Category
app.get('/api/schemes/:category', async (req, res) => {
  try {
    const category = req.params.category.toLowerCase();
    const schemes = await Scheme.find({ categoryKey: category, isActive: true });
    res.json({ success: true, category, data: schemes });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// User Registration Route
app.post('/api/register', async (req, res) => {
  try {
    const { name, email, password, userType, phone, state, categoryDetails } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ success: false, message: 'Email already registered' });
    }

    const newUser = new User({
      name,
      email,
      password,
      userType,
      phone,
      state,
      categoryDetails
    });

    await newUser.save();
    res.status(201).json({ success: true, message: 'Registration successful', user: newUser });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// User Login Route
app.post('/api/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email, password });

    if (!user) {
      return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }

    res.json({ success: true, message: 'Login successful', user });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});