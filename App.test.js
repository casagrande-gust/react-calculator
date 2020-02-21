import { render } from '@testing-library/react-native';
import React from 'react';

import App from './App';

describe('App Component', () => {
  it('should display the initial message', () => {
    const { getByText } = render(<App />);
    expect(getByText('Open up App.js to start working on your app!')).toBeTruthy();
  });
});
