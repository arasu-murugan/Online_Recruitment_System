import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import "./JobList.css";

// Job data categorized by role
const jobs = [
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

const JobList = () => {
  const navigate = useNavigate(); // Hook for navigation

  // Function to handle job role click and navigate to the application form
  const handleJobClick = (role) => {
    navigate(`/job-application/${role}`); // Navigate to JobApplication page with the role parameter
  };

  return (
    <div className="job-list-container">
      <h1 className="job-list-title">Available Job Roles</h1>
      <div className="job-category-container">
        {jobs.map((jobCategory, index) => (
          <div key={index} className="job-category-card">
            <h2 className="job-category-title">{jobCategory.category}</h2>
            <ul className="job-roles-list">
              {jobCategory.roles.map((role, idx) => (
                <li
                  key={idx}
                  className="job-role-item"
                  onClick={() => handleJobClick(role)} // Navigate on role click
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

export default JobList;
