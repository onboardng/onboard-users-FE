import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders home page', () => {
  render(<App />);
  const buttonElement = screen.getByText(/search/i);
  expect(buttonElement).toBeInTheDocument();
})