import React, { useState } from 'react';
import '../css/Home.css'
const Home = () => {
  const [userType, setUserType] = useState('');
  const [consultationType, setConsultationType] = useState('');
  const [consultationMessage, setConsultationMessage] = useState('');

  const handleConsultationRequest = () => {
    // Implement logic to submit consultation request
    console.log('Consultation Request:', { userType, consultationType, consultationMessage });
    // Assuming some API call or further processing would happen here
    // After submission, you can display a success message or redirect the user
  };

  return (
    <div>
      <h1>Welcome to Health Consultation System</h1>
      <p>
        The Online Health and Nutrition Consultation System is a web-based platform that enables users to access professional health and nutrition advice and consultation remotely. It serves as a virtual platform where individuals can connect with qualified health and nutrition experts for personalized guidance and support. The system aims to promote healthy lifestyles, provide expert advice, and offer convenient access to healthcare services for users.
      </p>
      <h2>Request a Consultation</h2>
      <form onSubmit={handleConsultationRequest}>
        <div>
          <label>
            Are you a new user or an existing user?
            <select value={userType} onChange={(e) => setUserType(e.target.value)}>
              <option value="">Select User Type</option>
              <option value="new">New User</option>
              <option value="existing">Existing User</option>
            </select>
          </label>
        </div>
        <div>
          <label>
            Select Consultation Type:
            <select value={consultationType} onChange={(e) => setConsultationType(e.target.value)}>
              <option value="">Select Consultation Type</option>
              <option value="health">Health Consultation</option>
              <option value="nutrition">Nutrition Consultation</option>
            </select>
          </label>
        </div>
        <div>
          <label>
            Message:
            <textarea
              value={consultationMessage}
              onChange={(e) => setConsultationMessage(e.target.value)}
              rows={4}
              cols={50}
            />
          </label>
        </div>
        <button type="submit">Submit Consultation Request</button>
      </form>
    </div>
  );
};

export default Home;
