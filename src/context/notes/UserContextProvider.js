import UserContext from './UserContext';
import React, { useState } from 'react';

export default function UserContextProvider(props) {
  const [authToken, setAuthToken] = useState(null);

  // login function
  const Login = async (body) => {
    let headers = {
      'accept': '*/*',
      'Content-Type': 'application/json'
    };
    let url = 'http://localhost:3000/api/auth/login';
    try {
      let response = await fetch(url, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(body)
      });

      if (response.status === 200) {
        let parsedData = await response.json();
        setAuthToken(parsedData.authToken);
        alert('Login successful');
      } else {
        let errorData = await response.json(); // Optional: handle error details
        alert(`Login failed: ${errorData.message || 'Unknown error'}`);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      alert('An error occurred during login');
    }
  };

  return (
    <UserContext.Provider value={{ Login, authToken }}>
      {props.children}
    </UserContext.Provider>
  );
}
