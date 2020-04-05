import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders option button link', () => {
  const { getByText } = render(<App />);
  const buttonElement = getByText(/Option 1/i);
  expect(buttonElement).toBeInTheDocument();
});
