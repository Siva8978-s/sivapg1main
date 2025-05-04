import React, { useState, useMemo, useEffect } from 'react';
import PropertyCard from './PropertyCard';
import Filters from './Filters';
import Pagination from './Pagination';
import propertiesData from './data/properties.json';

const pageSize = 3;

export default function PropertyList({ onLogout }) {
  const [filters, setFilters] = useState({
    rent: '',
    location: '',
    availability: '',
  });

  const [currentPage, setCurrentPage] = useState(1);

  const filteredProperties = useMemo(() => {
    return propertiesData.filter(p => {
      const matchesRent =
        filters.rent === '' || p.rent <= parseInt(filters.rent, 10);
      const matchesLocation =
        filters.location === '' || p.location.toLowerCase() === filters.location.toLowerCase();
      const matchesAvailability =
        filters.availability === ''
          ? true
          : filters.availability === 'available'
          ? p.available === true
          : p.available === false;
      return matchesRent && matchesLocation && matchesAvailability;
    });
  }, [filters]);

  const totalPages = Math.ceil(filteredProperties.length / pageSize);

  const currentProperties = filteredProperties.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(1);
    }
  }, [filters, totalPages, currentPage]);

  const handleFilterChange = newFilters => {
    setFilters(newFilters);
    setCurrentPage(1);
  };

  const handleClearFilters = () => {
    setFilters({
      rent: '',
      location: '',
      availability: '',
    });
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.heading}>PG Listing Portal</h1>
        <button onClick={onLogout} style={styles.logoutButton}>Logout</button>
      </header>

      <Filters filters={filters} onFilterChange={handleFilterChange} />

      <button onClick={handleClearFilters} style={styles.clearButton}>
        Clear Filters
      </button>

      <div style={styles.list}>
        {currentProperties.length > 0 ? (
          currentProperties.map(p => (
            <PropertyCard key={p.id} property={p} />
          ))
        ) : (
          <p style={styles.noResults}>No properties match your filters.</p>
        )}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}

const styles = {
  container: {
    maxWidth: 550,
    margin: '12px auto',
    padding: '12px 16px',
    fontFamily: "'Poppins', sans-serif",
    minHeight: '80vh',
    maxHeight: '90vh',
    overflowY: 'auto',
    background: 'linear-gradient(120deg, #f8fafc, #e0e7ff)',
    borderRadius: 16,
    boxShadow: '0 15px 25px rgba(0,0,0,0.15)',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 14,
    paddingBottom: 6,
    borderBottom: '2px solid #d1d5db',
  },
  heading: {
    fontSize: 22,
    fontWeight: '700',
    color: '#2d3748',
  },
  logoutButton: {
    padding: '6px 14px',
    borderRadius: 10,
    border: 'none',
    backgroundColor: '#c53030',
    color: 'white',
    fontWeight: '700',
    fontSize: 14,
    cursor: 'pointer',
    boxShadow: '0 4px 12px rgba(197, 48, 48, 0.5)',
    transition: 'background-color 0.3s ease',
  },
  clearButton: {
    padding: '6px 12px',
    backgroundColor: '#a0aec0',
    color: 'white',
    border: 'none',
    borderRadius: 8,
    fontWeight: '600',
    fontSize: 14,
    margin: '8px 0',
    cursor: 'pointer',
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
    marginBottom: 14,
  },
  noResults: {
    textAlign: 'center',
    color: '#6b7280',
    fontStyle: 'italic',
    fontSize: 16,
  },
};
