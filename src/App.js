import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home';
import JobList from './components/JobList';
import JobApplication from './components/JobApplication';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import Login from "./components/Login";
import AdminLogin from "./components/AdminLogin";  // Import AdminLogin component
import AdminDashboard from "./components/AdminDashboard";  // Import AdminDashboard component

function App() {
  return (
    <div>
      <Header /> {/* Always render Header */}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/job-list" element={<JobList />} />
        <Route path="/job-application/:role" element={<JobApplication />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin-login" element={<AdminLogin />} /> {/* Admin Login */}
        <Route path="/admin-dashboard" element={<AdminDashboard />} /> {/* Admin Dashboard */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>

      <Footer /> {/* Always render Footer */}
    </div>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}
