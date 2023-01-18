import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders search button on home page', () => {
  render(<App />);
  const buttonElement = screen.getByText(/search/i);
  expect(buttonElement).toBeInTheDocument();
})

test('renders subscribe button on home page', () => {
  render(<App />);
  const buttonElement = screen.getByText(/subscribe/i);
  expect(buttonElement).toBeInTheDocument();
})