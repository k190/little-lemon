import React, { useState, useEffect } from 'react';

function BookingForm({
  date,
  setDate,
  time,
  setTime,
  guests,
  setGuests,
  occasion,
  setOccasion,
  availableTimes,
  onSubmit,
}) {
  // State to track form validity
  const [isFormValid, setIsFormValid] = useState(false);

  // Validation state for each input
  const [dateValid, setDateValid] = useState(false);
  const [timeValid, setTimeValid] = useState(false);
  const [guestsValid, setGuestsValid] = useState(false);
  const [occasionValid, setOccasionValid] = useState(false);

  // Handle guests input change and ensure it's stored as a number
  const handleGuestsChange = (e) => {
    const guestsValue = parseInt(e.target.value, 10); // Convert input to number
    setGuests(guestsValue);
  };

  // Update validation states when inputs change
  useEffect(() => {
    const isDateValid = date !== "";
    const isTimeValid = time !== "";
    const isGuestsValid = guests >= 1 && guests <= 10 && !isNaN(guests); // Ensure guests is a number and within the valid range
    const isOccasionValid = occasion !== "";

    setDateValid(isDateValid);
    setTimeValid(isTimeValid);
    setGuestsValid(isGuestsValid);
    setOccasionValid(isOccasionValid);

    // Set form validity based on the validity of all inputs
    setIsFormValid(isDateValid && isTimeValid && isGuestsValid && isOccasionValid);
  }, [date, time, guests, occasion]);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      onSubmit({ date, time, guests, occasion });
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'grid', maxWidth: '200px', gap: '20px' }}>
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        name="res-date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
        aria-label="Reservation date input" 
      />
      {!dateValid && <span style={{ color: 'red' }}>Please choose a date</span>}

      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        name="res-time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
        aria-label="Reservation time selection" 
      >
        <option value="">Select a time</option>
        {availableTimes.map((timeOption) => (
          <option key={timeOption} value={timeOption}>
            {timeOption}
          </option>
        ))}
      </select>
      {!timeValid && <span style={{ color: 'red' }}>Please select a time</span>}

      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        min="1"
        max="10"
        id="guests"
        value={guests}
        onChange={handleGuestsChange}
        required
        aria-label="Select number of guests between 1 and 10" 
      />
      {!guestsValid && (
        <span style={{ color: 'red' }} aria-live="polite">
          Guests should be between 1 and 10
        </span>
      )}

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
        required
        aria-label="Occasion selection" 
      >
        <option value="">Select an occasion</option>
        <option value="birthday">Birthday</option>
        <option value="anniversary">Anniversary</option>
      </select>
      {!occasionValid && <span style={{ color: 'red' }}>Please select an occasion</span>}

      {/* Submit button is disabled if the form is invalid */}
      <input
        type="submit"
        value="Make Your Reservation"
        disabled={!isFormValid}
        aria-label="Submit reservation form" 
      />
    </form>
  );
}

export default BookingForm;
