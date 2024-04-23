// SearchForm.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SearchForm from './SearchForm';

test('renders search form', () => {
  const { getByLabelText, getByText } = render(<SearchForm />);
  
  // Assert that input fields and button are rendered
  expect(getByLabelText('From Input')).toBeInTheDocument();
  expect(getByLabelText('To Input')).toBeInTheDocument();
  expect(getByLabelText('Date Input')).toBeInTheDocument();
  expect(getByLabelText('Class Type Dropdown')).toBeInTheDocument();
  expect(getByText('Search')).toBeInTheDocument();
});


