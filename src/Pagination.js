import React from 'react';

export default function Pagination({ currentPage, totalPages, onPageChange }) {
  if (totalPages <= 1) return null;

  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <nav aria-label="Pagination" style={styles.container}>
      <button
        style={{ ...styles.button, ...styles.navButton }}
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Previous Page"
      >
        &lt;
      </button>
      {pages.map(page => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          style={{
            ...styles.button,
            ...(page === currentPage ? styles.active : {}),
          }}
          aria-current={page === currentPage ? 'page' : undefined}
        >
          {page}
        </button>
      ))}
      <button
        style={{ ...styles.button, ...styles.navButton }}
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="Next Page"
      >
        &gt;
      </button>
    </nav>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    gap: 10,
    marginBottom: 20,
  },
  button: {
    padding: '10px 16px',
    borderRadius: 14,
    border: '2px solid #5a67d8',
    backgroundColor: 'white',
    color: '#5a67d8',
    cursor: 'pointer',
    fontWeight: '600',
    fontSize: 16,
    minWidth: 42,
    transition: 'background-color 0.3s ease, color 0.3s ease, box-shadow 0.3s ease',
    boxShadow: '0 2px 6px rgba(90, 103, 216, 0.25)',
  },
  navButton: {
    padding: '10px 16px',
    fontWeight: '700',
    fontSize: 18,
  },
  active: {
    backgroundColor: '#5a67d8',
    color: 'white',
    boxShadow: '0 4px 12px rgba(90, 103, 216, 0.6)',
  },
};
