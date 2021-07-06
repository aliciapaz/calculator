import { render } from '@testing-library/react';
import App from '../components/App';

test('renders 19 buttons', () => {
  render(<App />);
  const buttons = document.body.getElementsByTagName('BUTTON');
  expect(buttons.length).toEqual(19);
});
