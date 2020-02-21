import { render } from '@testing-library/react-native';
import React from 'react';

import DualDisplay from './DualDisplay';

describe('DualDisplay component', () => {
  let testFuncs = {};

  beforeAll(() => {
    testFuncs = render(<DualDisplay main="Main Message" secondary="Secondary Message" />);
  });

  it('should display the main input string on the screen', () => {
    expect(testFuncs.getByText('Main Message')).toBeTruthy();
  });

  it('should display the secondary input string on the screen', () => {
    expect(testFuncs.getByText('Secondary Message')).toBeTruthy();
  });
});
