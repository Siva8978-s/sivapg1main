import React, { useState } from 'react';
import Login from './Login';
import PropertyList from './PropertyList';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (username, password) => {
    // simple dummy login check
    if (username != null && password != null) {
      setIsLoggedIn(true);
    } else {
      alert('Invalid credentials. Try username: student and password: password');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <>
      {isLoggedIn ? (
        <PropertyList onLogout={handleLogout} />
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </>
  );
}
