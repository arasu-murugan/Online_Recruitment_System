import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SearchBar.css";

const jobs = [
  // Your job data from JobList.js
  {
    category: "Software Development and Engineering",
    roles: [
      "Software Engineer",
      "Full-Stack Developer",
      "Front-End Developer",
      "Back-End Developer",
      "Mobile App Developer",
      "DevOps Engineer",
      "Game Developer",
    ],
  },
  // Add more categories and roles as needed
  {
    category: "Data Science and Analytics",
    roles: [
      "Data Scientist",
      "Data Analyst",
      "Data Engineer",
      "Business Intelligence Analyst",
      "Machine Learning Engineer",
    ],
  },
  {
    category: "Cloud Computing and Infrastructure",
    roles: [
      "Cloud Engineer",
      "Cloud Solutions Architect",
      "System Administrator",
      "Network Engineer",
      "Site Reliability Engineer (SRE)",
    ],
  },
  {
    category: "Cybersecurity",
    roles: [
      "Security Analyst",
      "Security Engineer",
      "Penetration Tester (Ethical Hacker)",
      "Security Architect",
      "Information Security Manager",
    ],
  },
  {
    category: "Artificial Intelligence and Machine Learning",
    roles: [
      "AI Engineer",
      "NLP Engineer",
      "Robotics Engineer",
    ],
  },
  {
    category: "IT Support and Operations",
    roles: [
      "IT Support Specialist",
      "Help Desk Technician",
      "Systems Analyst",
      "Database Administrator (DBA)",
    ],
  },
  {
    category: "Project Management",
    roles: [
      "IT Project Manager",
      "Scrum Master",
      "Product Manager",
    ],
  },
  {
    category: "Quality Assurance and Testing",
    roles: [
      "QA Engineer",
      "Automation Tester",
      "Manual Tester",
    ],
  },
  {
    category: "UI/UX Design",
    roles: [
      "UI/UX Designer",
      "Interaction Designer",
      "Graphic Designer",
    ],
  },
  {
    category: "Emerging Technology Roles",
    roles: [
      "Blockchain Developer",
      "AR/VR Developer",
      "Quantum Computing Researcher",
      "IoT Engineer",
    ],
  },
];

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate(); // To programmatically navigate to the application page

  // Filter jobs based on the search term
  const filteredJobs = jobs
    .map((jobCategory) => ({
      ...jobCategory,
      roles: jobCategory.roles.filter((role) =>
        role.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    }))
    .filter((jobCategory) => jobCategory.roles.length > 0); // Only display categories with matching jobs

  // Handle search input
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Handle job click
  const handleJobClick = (role) => {
    navigate(`/apply/${role}`); // Navigate to the application page with the selected job role
  };

  return (
    <div className="search-bar-container">
      <input
        type="text"
        placeholder="Search for jobs..."
        value={searchTerm}
        onChange={handleChange}
        className="search-input"
      />
      <div className="job-results">
        {filteredJobs.map((jobCategory, index) => (
          <div key={index}>
            <h3>{jobCategory.category}</h3>
            <ul>
              {jobCategory.roles.map((role, idx) => (
                <li
                  key={idx}
                  onClick={() => handleJobClick(role)}
                  className="job-item"
                >
                  {role}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;
