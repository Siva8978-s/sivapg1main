import React, { useState } from 'react';

export default function PropertyCard({ property }) {
  const [booked, setBooked] = useState(false);

  const handleBook = () => {
    setBooked(true);
  };

  return (
    <div style={styles.card}>
      <img src={property.imageUrl} alt={property.title} style={styles.image} />
      <div style={styles.content}>
        <h3 style={styles.title}>{property.title}</h3>
        <p style={styles.text}><strong>Location:</strong> {property.location}</p>
        <p style={styles.text}><strong>Rent:</strong> ₹{property.rent}</p>
        <p style={styles.text}>
          <strong>Availability:</strong>{' '}
          {property.available ? (
            <span style={styles.available}>Available</span>
          ) : (
            <span style={styles.notAvailable}>Not Available</span>
          )}
        </p>

        {/* Single Book Now button */}
        {property.available && !booked && (
          <button onClick={handleBook} style={styles.button}>
            Book Now
          </button>
        )}

        {/* Confirmation with ₹500 offer */}
        {booked && (
          <div style={styles.confirmationBox}>
            <p style={styles.offer}>🎉 Booking Confirmed! You get ₹500 OFF on first rent!</p>
            <p style={styles.text}>Our team will contact you shortly to complete the booking.</p>
          </div>
        )}
      </div>
    </div>
  );
}

const styles = {
  card: {
    background: 'white',
    borderRadius: 16,
    boxShadow: '0 10px 18px rgba(0,0,0,0.1)',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    cursor: 'pointer',
  },
  image: {
    width: '100%',
    height: 200,
    objectFit: 'cover',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  content: {
    padding: 16,
  },
  title: {
    margin: '0 0 10px 0',
    fontSize: 18,
    color: '#1a202c',
    fontWeight: '700',
  },
  text: {
    margin: '6px 0',
    fontSize: 15,
    color: '#4a5568',
  },
  available: {
    color: '#38a169',
    fontWeight: '600',
  },
  notAvailable: {
    color: '#e53e3e',
    fontWeight: '600',
  },
  button: {
    marginTop: 10,
    padding: '8px 12px',
    backgroundColor: '#3182ce',
    color: 'white',
    border: 'none',
    borderRadius: 6,
    cursor: 'pointer',
    fontWeight: '600',
  },
  offer: {
    color: '#38a169',
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: 5,
  },
  confirmationBox: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#f0fff4',
    borderRadius: 8,
    border: '1px solid #c6f6d5',
  },
};
