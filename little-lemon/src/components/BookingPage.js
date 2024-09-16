import React, { useReducer, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import BookingForm from './BookingForm';
import './styles.css';

// Simulated fetchAPI function
const fetchAPI = async (date) => {
  console.log('Fetching available times for date:', date);
  // Simulated response
  return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
};

// Simulated submitAPI function
const submitAPI = async (formData) => {
  console.log('Submitting form data:', formData);
  // Simulated response
  return true; // Assume submission is successful
};

// Reducer function for managing available times
const updateTimes = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      return action.times;
    default:
      return state;
  }
};

const BookingPage = () => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('');
  const [availableTimes, dispatch] = useReducer(updateTimes, []);
  const navigate = useNavigate();

  // Fetch available times when date changes
  useEffect(() => {
    const fetchTimes = async () => {
      if (date) {
        const times = await fetchAPI(date);
        dispatch({ type: 'UPDATE_TIMES', times });
      }
    };

    fetchTimes();
  }, [date]);

  // Handle form submission
  const submitForm = async (formData) => {
    try {
      const success = await submitAPI(formData);
      if (success) {
        navigate('/BookingConfirmed'); // Navigate to confirmation page
      } else {
        console.error('Failed to submit the form');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  // Handle date change
  const handleDateChange = (selectedDate) => {
    setDate(selectedDate);
  };

  return (
    <div>
      <BookingForm
        date={date}
        setDate={handleDateChange}
        time={time}
        setTime={setTime}
        guests={guests}
        setGuests={setGuests}
        occasion={occasion}
        setOccasion={setOccasion}
        availableTimes={availableTimes}
        onSubmit={submitForm} // Pass submitForm function as prop
      />
    </div>
  );
};

export default BookingPage;
