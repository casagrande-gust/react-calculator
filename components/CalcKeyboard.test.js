import { render } from '@testing-library/react-native';
import React from 'react';

import CalcKeyboard from './CalcKeyboard';

describe('CalcKeyboard Component', () => {
  let testFuncs = {};

  beforeAll(() => {
    testFuncs = render(<CalcKeyboard />);
  });

  test.each(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '+', '-', 'x', '/', 'CLEAR', '.', '='])(
    'display button %s',
    (i) => {
      expect(testFuncs.getByText(i)).toBeTruthy();
    },
  );
});
