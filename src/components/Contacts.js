import React from "react";
import './Contacts.css'; // Ensure you have the CSS file for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Contacts = () => {
  return (
    <div className="contacts-container">
      <h1>Contact Us</h1>
      <div className="footer-sections">
        <div className="footer-column">
          <h3>HR</h3>
          <ul>
            <li>Employee Management</li>
            <li>Time & Attendance</li>
            <li>Leave Management</li>
            <li>Employee Self Service</li>
            <li>Employee Onboarding</li>
            <li>Employee Offboarding</li>
            <li>Expense Management</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Payroll</h3>
          <ul>
            <li>Payroll Automation</li>
            <li>Statutory Compliance</li>
            <li>Overtime & Incentives</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Recruit</h3>
          <ul>
            <li>Candidate Management</li>
            <li>Requisition Management</li>
            <li>Applicant Tracking System</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Performance</h3>
          <ul>
            <li>Reviews (KRA/KPI)</li>
            <li>Objectives (OKR)</li>
            <li>Feedback</li>
            <li>Compensation</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Customers</h3>
          <ul>
            <li>Customer Story</li>
            <li>Customer Support</li>
            <li>Customer Onboarding</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Industry</h3>
          <ul>
            <li>Automotive</li>
            <li>Banking & Finance</li>
            <li>Education</li>
            <li>Hospitality/F&B</li>
            <li>Logistics</li>
            <li>Manufacturing</li>
            <li>IT & SaaS</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Resources</h3>
          <ul>
            <li>Blogs</li>
            <li>Calculators</li>
            <li>Glossary</li>
            <li>Guides</li>
            <li>Infographics</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>About</h3>
          <ul>
            <li>Story</li>
            <li>Investors</li>
            <li>Careers</li>
            <li>Coverage</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Partner With Us</h3>
          <ul>
            <li>India</li>
            <li>Middle East</li>
          </ul>
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="social-media">
        <h3>Follow Us</h3>
        <div className="social-icons">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
