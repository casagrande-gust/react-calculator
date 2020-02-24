import { render } from '@testing-library/react-native';
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
});
