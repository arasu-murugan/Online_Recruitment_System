// server.js
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("MongoDB connection error: ", err));

// User Schema
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const User = mongoose.model('User', userSchema);

// Login Log Schema
const loginLogSchema = new mongoose.Schema({
  username: { type: String, required: true },
  loginTime: { type: Date, default: Date.now },
});

const LoginLog = mongoose.model('LoginLog', loginLogSchema);

// Admin Authentication (Mocked for simplicity)
const adminCredentials = {
  username: "admin",
  password: "adminpassword123",
};

// User Registration
app.post('/register', async (req, res) => {
  const { username, password } = req.body;

  try {
    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      username,
      password: hashedPassword,
    });

    await newUser.save();
    res.status(201).json({ message: "User registered successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Error registering user.", error });
  }
});

// User Login
app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Compare the password with the stored hash
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Generate JWT Token
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });

    res.status(200).json({ message: "Login successful!", token });

    // Log the login time to LoginLog collection
    const loginLog = new LoginLog({ username });
    await loginLog.save();
    console.log("Login log created for user: ", username);
  } catch (error) {
    res.status(500).json({ message: "Error logging in.", error });
  }
});

// Admin Login (Mock Admin login with hardcoded credentials)
app.post('/admin/login', (req, res) => {
  const { username, password } = req.body;

  if (username === adminCredentials.username && password === adminCredentials.password) {
    // Generate Admin Token
    const token = jwt.sign({ role: 'admin' }, process.env.JWT_SECRET, { expiresIn: '1h' });
    return res.status(200).json({ message: "Admin login successful!", token });
  }

  return res.status(400).json({ message: "Invalid admin credentials" });
});

// Fetch All Users (Admin-Only Access)
app.get('/admin/dashboard', async (req, res) => {
  const token = req.headers.authorization?.split(' ')[1];  // Bearer token

  if (!token) {
    return res.status(403).json({ message: "No token provided" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Check if the user is admin
    if (decoded.role !== 'admin') {
      return res.status(403).json({ message: "Unauthorized access" });
    }

    // Fetch all users
    const users = await User.find();
    res.status(200).json({ users });
  } catch (error) {
    res.status(500).json({ message: "Error fetching users", error });
  }
});

// Fetch All Login Logs (Admin-Only Access)
app.get('/admin/logins', async (req, res) => {
  const token = req.headers.authorization?.split(' ')[1];  // Bearer token

  if (!token) {
    return res.status(403).json({ message: "No token provided" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Check if the user is admin
    if (decoded.role !== 'admin') {
      return res.status(403).json({ message: "Unauthorized access" });
    }

    // Fetch all login logs
    const loginLogs = await LoginLog.find().sort({ loginTime: -1 });
    res.status(200).json({ loginLogs });
  } catch (error) {
    res.status(500).json({ message: "Error fetching login logs", error });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
