import React, { useState } from 'react';

export default function Login({ onLogin }) {
  const [error, setError] = useState('');
  
  const handleSubmit = e => {
    e.preventDefault();
    const username = e.target.elements.username.value.trim();
    const password = e.target.elements.password.value.trim();
    
    // Additional validation to ensure values aren't empty
    if (!username || !password) {
      setError('Both username and password are required');
      return;
    }
    
    setError('');
    onLogin(username, password);
  };
  
  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h2 style={styles.heading}>Student Login</h2>
        
        {error && <div style={styles.errorMessage}>{error}</div>}
        
        <div style={styles.inputGroup}>
          <label htmlFor="username" style={styles.label}>Username <span style={styles.required}>*</span></label>
          <input
            id="username"
            style={styles.input}
            type="text"
            name="username"
            placeholder="Enter your username"
            required
            autoFocus
            spellCheck="false"
          />
        </div>
        
        <div style={styles.inputGroup}>
          <label htmlFor="password" style={styles.label}>Password <span style={styles.required}>*</span></label>
          <input
            id="password"
            style={styles.input}
            type="password"
            name="password"
            placeholder="Enter your password"
            required
            spellCheck="false"
          />
        </div>
        
        <button type="submit" style={styles.button}>
          Login
        </button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    padding: 20,
    fontFamily: "'Poppins', sans-serif",
  },
  form: {
    background: 'white',
    padding: 40,
    borderRadius: 16,
    width: '100%',
    maxWidth: 360,
    boxShadow: '0 12px 30px rgba(103, 58, 183, 0.3)',
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
    transition: 'box-shadow 0.3s ease-in-out',
  },
  heading: {
    margin: 0,
    textAlign: 'center',
    color: '#4b0082',
    fontWeight: '700',
    fontSize: '1.8rem',
    letterSpacing: 1,
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#4b0082',
  },
  required: {
    color: '#e53e3e',
  },
  input: {
    padding: 14,
    fontSize: 16,
    borderRadius: 10,
    border: '2px solid #d1c4e9',
    outline: 'none',
    transition: 'border-color 0.3s ease',
    boxShadow: 'inset 1px 1px 6px rgba(103, 58, 183, 0.1)',
  },
  errorMessage: {
    backgroundColor: '#fff5f5',
    color: '#e53e3e',
    padding: '10px 12px',
    borderRadius: 8,
    fontSize: 14,
    fontWeight: '500',
    borderLeft: '4px solid #e53e3e',
  },
  button: {
    padding: 14,
    fontSize: 16,
    borderRadius: 12,
    border: 'none',
    backgroundImage: 'linear-gradient(45deg, #7628e6, #3a1bf0)',
    color: 'white',
    cursor: 'pointer',
    fontWeight: '600',
    boxShadow: '0 6px 15px rgba(115, 29, 230, 0.6)',
    transition: 'background-image 0.4s ease, box-shadow 0.4s ease',
    marginTop: 5,
  },
};
