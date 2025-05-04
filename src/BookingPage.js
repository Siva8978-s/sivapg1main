import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const BookingPage = () => {
  const { id } = useParams(); // Get the property ID from URL
  const navigate = useNavigate();
  
  // Dummy property data (In a real app, this would come from an API or a global state)
  const properties = [
    { id: '1', title: 'Cozy 1BHK', location: 'Vijayawada', rent: 12000, available: true, imageUrl: 'https://via.placeholder.com/300' },
    { id: '2', title: 'Luxury 2BHK', location: 'Vijayawada', rent: 20000, available: true, imageUrl: 'https://via.placeholder.com/300' },
    { id: '3', title: 'Spacious Studio', location: 'Vijayawada', rent: 15000, available: true, imageUrl: 'https://via.placeholder.com/300' },
    // Add more properties as needed
  ];

  // Find the property based on URL parameter
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [bookingConfirmed, setBookingConfirmed] = useState(true); // Set to true since booking is already confirmed in PropertyCard

  useEffect(() => {
    // Find the property that matches the ID from the URL
    const property = properties.find(p => p.id === id);
    if (property) {
      setSelectedProperty(property);
    } else {
      // If property not found, redirect back to property list
      navigate('/');
    }
  }, [id, navigate, properties]);

  // If property is not found yet, show loading
  if (!selectedProperty) {
    return <div style={styles.container}>Loading property details...</div>;
  }

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Booking Confirmation</h2>
      
      <div style={styles.card}>
        <img src={selectedProperty.imageUrl} alt={selectedProperty.title} style={styles.image} />
        
        <div style={styles.propertyDetails}>
          <h3 style={styles.propertyTitle}>{selectedProperty.title}</h3>
          <p style={styles.text}><strong>Location:</strong> {selectedProperty.location}</p>
          <p style={styles.text}><strong>Rent:</strong> ₹{selectedProperty.rent}</p>
          <p style={styles.text}><strong>Monthly Rent After Discount:</strong> <span style={styles.discountedPrice}>₹{selectedProperty.rent - 500}</span></p>
        </div>
      </div>

      <div style={styles.confirmationSection}>
        <h3 style={styles.confirmationTitle}>Booking Confirmed!</h3>
        <p style={styles.confirmationText}>
          Congratulations! Your booking for {selectedProperty.title} has been confirmed.
        </p>
        <p style={styles.offerText}>
          🎉 You've received ₹500 OFF on your first month's rent!
        </p>
        <p style={styles.confirmationDetails}>
          We've sent the booking details to your registered email address.
          Our representative will contact you shortly with next steps.
        </p>
        
        <button 
          onClick={() => navigate('/')} 
          style={styles.backButton}
        >
          Back to Property List
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: 20,
    maxWidth: 800,
    margin: '0 auto',
    fontFamily: 'Arial, sans-serif',
  },
  title: {
    fontSize: 28,
    marginBottom: 20,
    textAlign: 'center',
    color: '#2d3748',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'white',
    borderRadius: 12,
    overflow: 'hidden',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    marginBottom: 30,
  },
  image: {
    width: '100%',
    height: 250,
    objectFit: 'cover',
  },
  propertyDetails: {
    padding: 20,
  },
  propertyTitle: {
    fontSize: 22,
    marginBottom: 10,
    color: '#2d3748',
  },
  text: {
    fontSize: 16,
    marginBottom: 8,
    color: '#4a5568',
  },
  discountedPrice: {
    color: '#38a169',
    fontWeight: 'bold',
  },
  confirmationSection: {
    backgroundColor: '#f0fff4',
    padding: 25,
    borderRadius: 12,
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    textAlign: 'center',
    border: '1px solid #c6f6d5',
  },
  confirmationTitle: {
    fontSize: 24,
    color: '#38a169',
    marginBottom: 15,
  },
  confirmationText: {
    fontSize: 18,
    marginBottom: 15,
    color: '#2d3748',
  },
  offerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#38a169',
    marginBottom: 15,
  },
  confirmationDetails: {
    fontSize: 16,
    marginBottom: 25,
    color: '#4a5568',
    lineHeight: 1.6,
  },
  backButton: {
    padding: '12px 24px',
    backgroundColor: '#3182ce',
    color: 'white',
    border: 'none',
    borderRadius: 8,
    fontSize: 16,
    cursor: 'pointer',
    fontWeight: 'bold',
    transition: 'background-color 0.2s',
  },
};

export default BookingPage;