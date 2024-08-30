import { render, screen } from '@testing-library/react';
import App from './App';
import BookingForm from './components/BookingForm';

/*test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});*/


// Create mock functions for the props
const mockSetDate = jest.fn();
const mockSetTime = jest.fn();
const mockSetGuests = jest.fn();
const mockSetOccasion = jest.fn();

// Default props for BookingForm
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

test('Renders the "Choose date" label', () => {
  // Render the BookingForm component with default props
  render(<BookingForm {...defaultProps} />);
  
  // Find the element with the static text "Choose date"
  const labelElement = screen.getByText("Choose date");
  
  // Check that the element is in the document
  expect(labelElement).toBeInTheDocument();
});
