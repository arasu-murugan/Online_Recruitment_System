import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./jobApplication.css";

const JobApplication = () => {
  const { role } = useParams(); // Get the job role from URL
  const navigate = useNavigate(); // Initialize navigation function
  const [formData, setFormData] = useState({
    fullName: "",
    contactNumber: "",
    email: "",
    address: "",
    dateOfBirth: "",
    startDate: "",
    preferredLocation: "",
    salaryExpectation: "",
    jobTitle: "",
    previousEmployer: "",
    employmentStartDate: "",
    employmentEndDate: "",
    jobResponsibilities: "",
    reasonForLeaving: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false); // Track submission status

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Application submitted for", role);
    console.log(formData);

    setIsSubmitted(true); // Set submission status to true

    // Delay navigation to display the success message
    setTimeout(() => {
      navigate("/"); // Redirect to home page after 2 seconds
    }, 2000);
  };

  return (
    <div className="job-application-container">
      <h1>Apply for {role}</h1>
      <form onSubmit={handleSubmit} className="job-application-form">
        {/* Personal Information */}
        <h2>Personal Information</h2>
        <label>
          Full Name:
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Phone Number:
          <input
            type="tel"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Email Address:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Mailing Address:
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Date of Birth:
          <input
            type="date"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
            required
          />
        </label>

        {/* Job Information */}
        <h2>Job Information</h2>
        <label>
          Position Applying For:
          <input
            type="text"
            name="position"
            value={role} // Pre-filled with job role
            disabled
          />
        </label>
        <label>
          Availability (When can you start?):
          <input
            type="date"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Preferred Location:
          <input
            type="text"
            name="preferredLocation"
            value={formData.preferredLocation}
            onChange={handleChange}
          />
        </label>
        <label>
          Salary Expectation:
          <input
            type="number"
            name="salaryExpectation"
            value={formData.salaryExpectation}
            onChange={handleChange}
            placeholder="Optional"
          />
        </label>

        {/* Employment History */}
        <h2>Employment History</h2>
        <label>
          Previous Employer:
          <input
            type="text"
            name="previousEmployer"
            value={formData.previousEmployer}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Job Title:
          <input
            type="text"
            name="jobTitle"
            value={formData.jobTitle}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Employment Start Date:
          <input
            type="month"
            name="employmentStartDate"
            value={formData.employmentStartDate}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Employment End Date:
          <input
            type="month"
            name="employmentEndDate"
            value={formData.employmentEndDate}
            onChange={handleChange}
          />
        </label>
        <label>
          Job Responsibilities:
          <textarea
            name="jobResponsibilities"
            value={formData.jobResponsibilities}
            onChange={handleChange}
            required
          ></textarea>
        </label>
        <label>
          Reason for Leaving:
          <textarea
            name="reasonForLeaving"
            value={formData.reasonForLeaving}
            onChange={handleChange}
          ></textarea>
        </label>

        {/* Submit Button */}
        <button type="submit">Submit Application</button>
      </form>

      {/* Success Message */}
      {isSubmitted && (
        <p className="success-message">Application successfully submitted!</p>
      )}
    </div>
  );
};

export default JobApplication;
