import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import App from './App';
import DetailPage from './Pages/DetailPage/DetailPage'

test('renders logo', () => {
  render(
    <Router>
      <App />
    </Router>
  );
  const logoElement = screen.getByAltText('logo');
  expect(logoElement).toBeInTheDocument();
});

test('navigates to home page', () => {
  render(
    <Router>
      <App />
    </Router>
  );

  const homeComponent = screen.getByTestId('home-component');

  expect(homeComponent).toBeInTheDocument();
});

test('navigates to detail page', () => {
  render(
    <Router>
      <DetailPage />
    </Router>
  );

  const backButton = screen.getByText(/Back/i);

  expect(backButton).toBeInTheDocument();
});
