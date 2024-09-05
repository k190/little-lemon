

import React, { useReducer, useEffect, useState } from 'react';
import BookingForm from './BookingForm';
import './styles.css';
import resturantfood from '../images/restauranfood.jpg';
import { Link } from 'react-router-dom';

const initializeTimes = async () => {
    const today = new Date();
    try {
        const availableTimes = await fetchAPI(today);
        return availableTimes;
    } catch (error) {
        console.error("Failed to fetch available times:", error);
        return [];
    }
};

const updateTimes = async (state, action) => {
    switch (action.type) {
        case 'UPDATE_TIMES':
            try {
                const availableTimes = await fetchAPI(action.date);
                return availableTimes;
            } catch (error) {
                console.error("Failed to fetch available times:", error);
                return [];
            }
        default:
            return state;
    }
};
const Main = () => {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState('');
    const [availableTimes, dispatch] = useReducer((state, action) => state, []);

    useEffect(() => {
        const initTimes = async () => {
            const times = await initializeTimes();
            dispatch({ type: 'INIT_TIMES', times });
        };
        initTimes();
    }, []);

    const handleDateChange = async (selectedDate) => {
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
                    <Link to="/BookingPage">
                        <button>Reserve a Table</button>
                    </Link>
                </article>
                <article>
                    <img src={resturantfood} alt="restaurant food" />
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
};

export default Main;
