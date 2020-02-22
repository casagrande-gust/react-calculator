import { render } from '@testing-library/react-native';
import React from 'react';

import AppStrings from '../constants/app-strings';
import Header from './Header';

describe('Header Component', () => {
  let testFuncs = {};

  beforeAll(() => {
    testFuncs = render(<Header title={AppStrings.appTitle} />);
  });

  it('should display the app title', () => {
    expect(testFuncs.getByText(AppStrings.appTitle)).toBeTruthy();
  });
});
