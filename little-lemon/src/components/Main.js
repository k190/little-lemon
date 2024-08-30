import React, { useReducer, useState } from 'react';
import BookingForm from './BookingForm';
import './styles.css';
import resturantfood from '../images/restauranfood.jpg'
import {routes,route,Link}from 'react-router-dom'
// Function to initialize available times
const initializeTimes = () => {
    return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
};
  // Reducer function to update available times
const updateTimes = (state, action) => {
    switch (action.type) {
      case 'UPDATE_TIMES':
        // For now, return the same times regardless of the date
        return initializeTimes();
      default:
        return state;
    }
};
const Main = () => {
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
        <div className="main-content">
            <div className="Hero-section">
                <article>
                    <h1>Little Lemon</h1>
                    <h2>chicago</h2>
                    <p>By completing this exercise, you have a complete CSS code for the HTML elements which you can use to style the elements in your project.</p>
                    <button>Reserv a Table</button>  
                    <Link to="/BookingForm"className="BookingForm">BookingForm</Link>                
                </article>
                <article>
                    <img src={resturantfood} alt="resturantfoodd" />
                </article>
            </div>
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
            </div>
            <div className="highlights">
                <h1>Specials</h1>
                <article>
                    <img src={resturantfood} alt="resturantfoodd" />
                    <h2>greek salad</h2>
                    <p>By completing this exercise, you have a complete CSS code for the HTML elements which you can use to style the elements in your project.</p>
                </article>
                <article>
                    <img src={resturantfood} alt="resturantfoodd" />
                    <h2>greek salad</h2>
                    <p>By completing this exercise, you have a complete CSS code for the HTML elements which you can use to style the elements in your project.</p>
                </article>
                <article>
                    <img src={resturantfood} alt="resturantfoodd" />
                    <h2>greek salad</h2>
                    <p>By completing this exercise, you have a complete CSS code for the HTML elements which you can use to style the elements in your project.</p>
                </article>

            </div>
            <div className="testimonials">
                <h1>Testimonials</h1>
                <article>
                    <img src={resturantfood} alt="resturantfoodd" />
                    <p>By completing this exercise, you have a complete CSS code for the HTML elements which you can use to style the elements in your project.</p>
                </article>
                <article>
                    <img src={resturantfood} alt="resturantfoodd" />
                    <p>By completing this exercise, you have a complete CSS code for the HTML elements which you can use to style the elements in your project.</p>
                </article>
                 <article>
                    <img src={resturantfood} alt="resturantfoodd" />
                    <p>By completing this exercise, you have a complete CSS code for the HTML elements which you can use to style the elements in your project.</p>
                </article>
                 <article>
                    <img src={resturantfood} alt="resturantfoodd" />
                    <p>By completing this exercise, you have a complete CSS code for the HTML elements which you can use to style the elements in your project.</p>
                </article>

            </div>
            <div className='About'>
                <article>
                    <h1>Little Lemon</h1>
                    <h2>chicago</h2>
                    <p>By completing this exercise, you have a complete CSS code for the HTML elements which you can use to style the elements in your project.By completing this exercise, you have a complete CSS code for the HTML elements which you can use to style the elements in your project.</p>
                </article>
                <article>
                    <img src={resturantfood} alt="resturantfoodd" />
                </article>
              

            </div>
        </div>   
    );
}

export default Main;
