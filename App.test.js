import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';

import App from './App';
import AppStrings from './constants/app-strings';

describe('App Component', () => {
  let testFuncs = {};

  beforeEach(() => {
    testFuncs = render(<App />);
  });

  it('should display the app header containing the title', () => {
    expect(testFuncs.getAllByText(AppStrings.appTitle).length).toEqual(1);
  });

  it('should build and display numbers correctly', () => {
    fireEvent.press(testFuncs.getByText('5'));
    fireEvent.press(testFuncs.getByText('.'));
    fireEvent.press(testFuncs.getByText('7'));
    fireEvent.press(testFuncs.getByText('3'));
    // Value appears in both containers of DualDisplay
    expect(testFuncs.getAllByText('5.73').length).toEqual(2);
  });
});
