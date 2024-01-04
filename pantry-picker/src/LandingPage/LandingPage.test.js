// LandingPage.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LandingPage from './LandingPage';

test('renders landing page with logo, app name, description, and buttons', () => {
  render(<LandingPage />);

  // Check if the logo is rendered
  const logoElement = screen.getByAltText('App Logo');
  expect(logoElement).toBeInTheDocument();

  // Check if the app name is rendered
  const appNameElement = screen.getByText(/Recipe Match/i);
  expect(appNameElement).toBeInTheDocument();

  // Check if the description is rendered
  const descriptionElement = screen.getByText(/Your go-to app for quick and delicious recipes!/i);
  expect(descriptionElement).toBeInTheDocument();

  // Check if the buttons are rendered
  const signUpButton = screen.getByText(/Sign Up/i);
  const loginButton = screen.getByText(/Login/i);
  const continueAsGuestButton = screen.getByText(/Continue as Guest/i);

  expect(signUpButton).toBeInTheDocument();
  expect(loginButton).toBeInTheDocument();
  expect(continueAsGuestButton).toBeInTheDocument();
});

test('buttons trigger expected actions', () => {
  render(<LandingPage />);

  // Mock functions for button actions (you can replace these with your actual functions)
  const signUpMock = jest.fn();
  const loginMock = jest.fn();
  const continueAsGuestMock = jest.fn();

  // Attach click events to buttons
  const signUpButton = screen.getByText(/Sign Up/i);
  const loginButton = screen.getByText(/Login/i);
  const continueAsGuestButton = screen.getByText(/Continue as Guest/i);

  userEvent.click(signUpButton);
  userEvent.click(loginButton);
  userEvent.click(continueAsGuestButton);

  // Check if the mock functions are called
  expect(signUpMock).toHaveBeenCalled();
  expect(loginMock).toHaveBeenCalled();
  expect(continueAsGuestMock).toHaveBeenCalled();
});