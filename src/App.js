import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Login';
import PropertyList from './PropertyList';
import BookingPage from './BookingPage';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  const handleLogin = (username, password) => {
    // Simple dummy login check
    if (username != null && password != null) {
      setIsLoggedIn(true);
    } else {
      alert('Invalid credentials. Please enter username and password.');
    }
  };
  
  const handleLogout = () => {
    setIsLoggedIn(false);
  };
  
  return (
    <Router>
      <Routes>
        {isLoggedIn ? (
          <>
            <Route path="/" element={<PropertyList onLogout={handleLogout} />} />
            <Route path="/book/:id" element={<BookingPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </>
        ) : (
          <>
            <Route path="/" element={<Login onLogin={handleLogin} />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </>
        )}
      </Routes>
    </Router>
  );
}
