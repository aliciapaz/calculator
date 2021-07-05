import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/There will be a calculator here soon.../i);
  expect(linkElement).toBeInTheDocument();
});
