// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import JobList from './components/JobList';
import AddJob from './components/AddJob';
import JobDetails from './components/JobDetails';
import Contacts from './components/Contacts';
import './App.css'; // Ensure this file is correctly imported

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apply" element={<AddJob />} />
        <Route path="/jobs" element={<JobList />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/job/:id" element={<JobDetails />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
