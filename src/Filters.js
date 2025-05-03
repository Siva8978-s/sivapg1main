import React from 'react';

const locations = ['Mumbai', 'Delhi', 'Bangalore'];

export default function Filters({ filters, onFilterChange }) {
  const handleInputChange = e => {
    const { name, value } = e.target;
    onFilterChange({ ...filters, [name]: value });
  };

  return (
    <div style={styles.container}>
      <input
        style={styles.input}
        placeholder="Max Rent (₹)"
        type="number"
        name="rent"
        value={filters.rent}
        onChange={handleInputChange}
        min="0"
      />
      <select
        style={styles.select}
        name="location"
        value={filters.location}
        onChange={handleInputChange}
      >
        <option value="">All Locations</option>
        {locations.map(loc => (
          <option key={loc} value={loc}>
            {loc}
          </option>
        ))}
      </select>
      <select
        style={styles.select}
        name="availability"
        value={filters.availability}
        onChange={handleInputChange}
      >
        <option value="">Any Availability</option>
        <option value="available">Available</option>
        <option value="notavailable">Not Available</option>
      </select>
    </div>
  );
}

const styles = {
  container: {
    marginBottom: 16,
    display: 'flex',
    gap: 12,
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  input: {
    flex: '1 1 120px',
    padding: 12,
    fontSize: 15,
    borderRadius: 12,
    border: '1.8px solid #a0aec0',
    boxShadow: 'inset 0 1px 4px rgba(0, 0, 0, 0.1)',
    outline: 'none',
    transition: 'border-color 0.3s ease',
  },
  select: {
    flex: '1 1 120px',
    padding: 12,
    fontSize: 15,
    borderRadius: 12,
    border: '1.8px solid #a0aec0',
    boxShadow: 'inset 0 1px 4px rgba(0, 0, 0, 0.1)',
    outline: 'none',
    transition: 'border-color 0.3s ease',
  },
};
