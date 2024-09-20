import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from './components/BookingForm';
// Mock functions for the props
const mockSetDate = jest.fn();
const mockSetTime = jest.fn();
const mockSetGuests = jest.fn();
const mockSetOccasion = jest.fn();
const mockOnSubmit = jest.fn();

const defaultProps = {
  date: '',
  setDate: mockSetDate,
  time: '',
  setTime: mockSetTime,
  guests: 1,
  setGuests: mockSetGuests,
  occasion: '',
  setOccasion: mockSetOccasion,
  availableTimes: ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'],
};

test('renders the BookingForm with correct HTML5 validation attributes', () => {
  render(<BookingForm {...defaultProps} />);
  
  // Check date input field
  const dateInput = screen.getByLabelText(/choose date/i);
  expect(dateInput).toBeInTheDocument();
  expect(dateInput).toHaveAttribute('type', 'date');

  // Check time select field
  const timeSelect = screen.getByLabelText(/choose time/i);
  expect(timeSelect).toBeInTheDocument();

  // Check guests input field
  const guestsInput = screen.getByLabelText(/number of guests/i);
  expect(guestsInput).toBeInTheDocument();
  expect(guestsInput).toHaveAttribute('min', '1');
  expect(guestsInput).toHaveAttribute('max', '10');

  // Check occasion select field
  const occasionSelect = screen.getByLabelText(/occasion/i);
  expect(occasionSelect).toBeInTheDocument();

  // Check that guests input has a default value of 1
  expect(guestsInput).toHaveValue(1);
});


describe('BookingForm Validation Tests', () => {
  const defaultProps = {
    date: '',
    setDate: jest.fn(),
    time: '',
    setTime: jest.fn(),
    guests: 1,
    setGuests: jest.fn(),
    occasion: '',
    setOccasion: jest.fn(),
    availableTimes: ['17:00', '18:00', '19:00'],
    onSubmit: mockOnSubmit,
  };

  test('should show error for empty date', () => {
    render(<BookingForm {...defaultProps} />);
    
    fireEvent.change(screen.getByLabelText(/choose date/i), { target: { value: '' } });
    
    expect(screen.getByText(/please choose a date/i)).toBeInTheDocument();
  });

  test('should show error for empty time', () => {
    render(<BookingForm {...defaultProps} />);
    
    fireEvent.change(screen.getByLabelText(/choose time/i), { target: { value: '' } });
    
    expect(screen.getByText(/please select a time/i)).toBeInTheDocument();
  });

  test('should show error for guests less than 1', () => {
    render(<BookingForm {...defaultProps} />);
    
    fireEvent.change(screen.getByLabelText(/number of guests/i), { target: { value: '0' } });
    
    expect(screen.getByText(/Guests should be between 1 and 10/i)).toBeInTheDocument();
  });

  test('should show error for guests greater than 10', () => {
    render(<BookingForm {...defaultProps} />);
    
    fireEvent.change(screen.getByLabelText(/number of guests/i), { target: { value: '11' } });
    
    expect(screen.getByText(/guests should be between 1 and 10/i)).toBeInTheDocument();
  });

  test('should show error for empty occasion', () => {
    render(<BookingForm {...defaultProps} />);
    
    fireEvent.change(screen.getByLabelText(/occasion/i), { target: { value: '' } });
    
    expect(screen.getByText(/please select an occasion/i)).toBeInTheDocument();
  });


   test('should submit form when all fields are valid', () => {
    render(<BookingForm {...defaultProps} />);
    
    fireEvent.change(screen.getByLabelText(/choose date/i), { target: { value: '2024-09-21' } });
    fireEvent.change(screen.getByLabelText(/choose time/i), { target: { value: '17:00' } });
    fireEvent.change(screen.getByLabelText(/number of guests/i), { target: { value: '2' } });
    fireEvent.change(screen.getByLabelText(/occasion/i), { target: { value: 'birthday' } });
    
    fireEvent.click(screen.getByRole('button', { name: /make your reservation/i }));
    
    expect(mockOnSubmit).toHaveBeenCalledWith({
      date: '2024-09-21',
      time: '17:00',
      guests: 2,
      occasion: 'birthday',
    });
  });
  
});

