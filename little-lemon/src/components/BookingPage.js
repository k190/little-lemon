import React, { useReducer, useState, useEffect } from 'react';
import BookingForm from './BookingForm';
import './styles.css';

// Fetch API function
const fetchAPI = async (date) => {
    // Simulated API call
    console.log('Fetching available times for date:', date);

    return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
};

// Reducer function for managing available times
const updateTimes = (state, action) => {
    switch (action.type) {
        case 'UPDATE_TIMES':
            return action.times; // Update state with new available times
        default:
            return state;
    }
};

const BookingPage = () => {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState('');
    const [availableTimes, dispatch] = useReducer(updateTimes, []); // Initialize state as empty array

    // Fetch initial available times on component mount or when the date changes
    useEffect(() => {
        const fetchTimes = async () => {
            if (date) { // Only fetch if a date is selected
                const times = await fetchAPI(date);
                dispatch({ type: 'UPDATE_TIMES', times });
            }
        };

        fetchTimes();
    }, [date]); 

    // Handle date change
    const handleDateChange = (selectedDate) => {
        setDate(selectedDate); // Update date state
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
                availableTimes={availableTimes} // Pass the updated times
            />
        </div>
    );
};

export default BookingPage;
