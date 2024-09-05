import React, { useReducer, useState } from 'react';
import BookingForm from './BookingForm';
import './styles.css';
const fetchAPI = async (date) => {
    // Replace this with your actual API call
    // Simulated API call
    return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
};

const initializeTimes = async () => {
    const today = new Date();
    try {
        const availableTimes = await fetchAPI(today);
        return availableTimes;
    } catch (error) {
        console.error("Failed to fetch available times:", error);
        return []; // Return an empty array on failure
    }
};

const updateTimes = async (state, action) => {
    switch (action.type) {
        case 'UPDATE_TIMES':
            const availableTimes = await fetchAPI(action.date);
            return availableTimes;
        default:
            return state;
    }
};
const BookingPage = () => {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState('');
    const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);
    const handleDateChange = (selectedDate) => {
        setDate(selectedDate);
        dispatch({ type: 'UPDATE_TIMES', date: selectedDate });
      };
    // Create a single props object to pass to BookingForm
    const bookingProps = {
      date,
      setDate,
      time,
      setTime,
      guests,
      setGuests,
      occasion,
      setOccasion,
      availableTimes,
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
  />
        </div>)
        }
        export default BookingPage;