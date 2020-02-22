import PropTypes from 'prop-types';
import React from 'react';
import { View } from 'react-native';

export const CalcKeyboard = () => (
  <View />
);

export default CalcKeyboard;

CalcKeyboard.propTypes = {
  /**
   * numericBtnFn
   *
   * Function executed when a numeric button is pressed.
   */
  numericBtnFn: PropTypes.func,
  /**
   * operatorBtnFn
   *
   * Function executed when an operator button is pressed.
   */
  operatorBtnFn: PropTypes.func,
  /**
   * clearBtnFn
   *
   * Function executed when the "clear" button is pressed.
   */
  clearBtnFn: PropTypes.func,
};

// Default props for CalcKeyboard.
CalcKeyboard.defaultProps = {
  numericBtnFn: () => {},
  operatorBtnFn: () => {},
  clearBtnFn: () => {},
};
