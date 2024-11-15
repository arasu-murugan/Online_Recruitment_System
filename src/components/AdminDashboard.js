import React, { useState, useEffect } from "react";

const AdminDashboard = () => {
  const [loggedInUsers, setLoggedInUsers] = useState(0);

  useEffect(() => {
    // This is where you would fetch the actual count of logged-in users from your backend
    const fetchLoggedInUsers = async () => {
      // Mock API call to simulate fetching logged-in users
      const response = await mockGetLoggedInUsers();
      setLoggedInUsers(response.count);
    };

    fetchLoggedInUsers();
  }, []);

  const mockGetLoggedInUsers = async () => {
    // Simulate an API call to your backend
    return { count: 10 }; // Mocked logged-in users count
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <p>Currently logged-in users: {loggedInUsers}</p>
    </div>
  );
};

export default AdminDashboard;
