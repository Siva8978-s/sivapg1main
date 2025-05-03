import React from 'react';

export default function Login({ onLogin }) {
  const handleSubmit = e => {
    e.preventDefault();
    const username = e.target.elements.username.value;
    const password = e.target.elements.password.value;
    onLogin(username, password);
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h2 style={styles.heading}>Student Login</h2>
        <input
          style={styles.input}
          type="text"
          name="username"
          placeholder="Username"
          required
          autoFocus
          spellCheck="false"
        />
        <input
          style={styles.input}
          type="password"
          name="password"
          placeholder="Password"
          spellCheck="false"
        />
        <button type="submit" style={styles.button}>Login</button>
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
  input: {
    padding: 14,
    fontSize: 16,
    borderRadius: 10,
    border: '2px solid #d1c4e9',
    outline: 'none',
    transition: 'border-color 0.3s ease',
    boxShadow: 'inset 1px 1px 6px rgba(103, 58, 183, 0.1)',
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
  },
};
