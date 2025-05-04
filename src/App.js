import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import PropertyList from './PropertyList';
import BookingPage from './BookingPage'; // <-- Import the new BookingPage component

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (username, password) => {
    // Simple dummy login check
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
    <Router>
      {isLoggedIn ? (
        <Routes>
          <Route path="/" element={<PropertyList onLogout={handleLogout} />} />
          <Route path="/book/:id" element={<BookingPage />} />
        </Routes>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </Router>
  );
}
