import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';
import { Alert } from 'react-native';

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

  it('should sum two numbers correctly', () => {
    fireEvent.press(testFuncs.getByText('5'));
    fireEvent.press(testFuncs.getByText('+'));
    fireEvent.press(testFuncs.getByText('7'));
    fireEvent.press(testFuncs.getByText('='));
    // Display history of user inputs in upper container of DualDisplay
    expect(testFuncs.getAllByText('5 + 7').length).toEqual(1);
    // Display result of calculation in bottom container of DualDisplay
    expect(testFuncs.getAllByText('12.00').length).toEqual(1);
  });

  it('should subtract two numbers correctly', () => {
    fireEvent.press(testFuncs.getByText('9'));
    fireEvent.press(testFuncs.getByText('-'));
    fireEvent.press(testFuncs.getByText('2'));
    fireEvent.press(testFuncs.getByText('='));
    expect(testFuncs.getAllByText('9 - 2').length).toEqual(1);
    expect(testFuncs.getAllByText('7.00').length).toEqual(1);
  });

  it('should multiply two numbers correctly', () => {
    fireEvent.press(testFuncs.getByText('8'));
    fireEvent.press(testFuncs.getByText('x'));
    fireEvent.press(testFuncs.getByText('6'));
    fireEvent.press(testFuncs.getByText('='));
    expect(testFuncs.getAllByText('8 x 6').length).toEqual(1);
    expect(testFuncs.getAllByText('48.00').length).toEqual(1);
  });

  it('should divide two numbers correctly', () => {
    fireEvent.press(testFuncs.getByText('4'));
    fireEvent.press(testFuncs.getByText('5'));
    fireEvent.press(testFuncs.getByText('/'));
    fireEvent.press(testFuncs.getByText('4'));
    fireEvent.press(testFuncs.getByText('.'));
    fireEvent.press(testFuncs.getByText('5'));
    fireEvent.press(testFuncs.getByText('='));
    expect(testFuncs.getAllByText('45 / 4.5').length).toEqual(1);
    expect(testFuncs.getAllByText('10.00').length).toEqual(1);
  });

  it('should clear the DualDisplay values after pressing the CLEAR button', () => {
    fireEvent.press(testFuncs.getByText('5'));
    fireEvent.press(testFuncs.getByText('+'));
    fireEvent.press(testFuncs.getByText('7'));
    fireEvent.press(testFuncs.getByText('='));
    expect(testFuncs.queryAllByText('12.00').length).toEqual(1);
    expect(testFuncs.queryAllByText('5 + 7').length).toEqual(1);
    fireEvent.press(testFuncs.getByText('CLEAR'));
    expect(testFuncs.queryAllByText('12.00').length).toEqual(0);
    expect(testFuncs.queryAllByText('5 + 7').length).toEqual(0);
  });

  it('should display an error message when trying to divide by zero', () => {
    const spy = jest.spyOn(Alert, 'alert');
    fireEvent.press(testFuncs.getByText('3'));
    fireEvent.press(testFuncs.getByText('/'));
    fireEvent.press(testFuncs.getByText('0'));
    fireEvent.press(testFuncs.getByText('='));
    expect(spy).toHaveBeenCalledWith(
      'Math Error!',
      'You can not divide a number by 0',
      [{ text: 'Ok', style: 'cancel' }],
    );
  });
});
