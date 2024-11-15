import React, { useState } from 'react';
import './Home.css';

const jobs = [
  "Software Development and Engineering",
  "Software Engineer",
  "Full-Stack Developer",
  "Front-End Developer",
  "Back-End Developer",
  "Mobile App Developer",
  "DevOps Engineer",
  "Game Developer",
  "Data Science and Analytics",
  "Data Scientist",
  "Data Analyst",
  "Data Engineer",
  "Business Intelligence Analyst",
  "Machine Learning Engineer",
  "Cloud Computing and Infrastructure",
  "Cloud Engineer",
  "Cloud Solutions Architect",
  "System Administrator",
  "Network Engineer",
  "Site Reliability Engineer (SRE)",
  "Cybersecurity",
  "Security Analyst",
  "Security Engineer",
  "Penetration Tester (Ethical Hacker)",
  "Security Architect",
  "Information Security Manager",
  "Artificial Intelligence and Machine Learning",
  "AI Engineer",
  "NLP Engineer",
  "Robotics Engineer",
  "IT Support and Operations",
  "IT Support Specialist",
  "Help Desk Technician",
  "Systems Analyst",
  "Database Administrator (DBA)",
  "Project Management",
  "IT Project Manager",
  "Scrum Master",
  "Product Manager",
  "Quality Assurance and Testing",
  "QA Engineer",
  "Automation Tester",
  "Manual Tester",
  "UI/UX Design",
  "UI/UX Designer",
  "Interaction Designer",
  "Graphic Designer",
  "Emerging Technology Roles",
  "Blockchain Developer",
  "AR/VR Developer",
  "Quantum Computing Researcher",
  "IoT Engineer",
];

const Home = () => {
  const [searchInput, setSearchInput] = useState('');
  
  const filteredJobs = jobs.filter(job => 
    job.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <h1 className="tagline">Find Your Dream Job Today!</h1>
        <div className="search-bar-container">
          <input
            type="text"
            className="search-bar"
            placeholder="Search for jobs..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
        </div>
        <button className="cta-button">Start Job Search</button>

        {/* Job Suggestions */}
        {searchInput && (
          <div className="job-suggestions">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job, index) => (
                <div key={index} className="job-suggestion">
                  {job}
                </div>
              ))
            ) : (
              <div className="no-results">No results found</div>
            )}
          </div>
        )}
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Features</h2>
        <div className="feature">
          <h3>Job Search</h3>
          <p>Filter and sort jobs to find the perfect fit.</p>
        </div>
        <div className="feature">
          <h3>Employer Services</h3>
          <p>Post jobs and manage candidates with ease.</p>
        </div>
        <div className="feature">
          <h3>Resources</h3>
          <p>Access career advice and industry news.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
