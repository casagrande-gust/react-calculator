import PropTypes from 'prop-types';
import React from 'react';
import { View } from 'react-native';

export const CalcKeyboard = (props) => {
  const { numericBtnFn, operatorBtnFn, clearBtnFn } = props;

  const keyboardButtons = [
    [
      { title: '7', buttonFn: numericBtnFn },
      { title: '8', buttonFn: numericBtnFn },
      { title: '9', buttonFn: numericBtnFn },
      { title: '+', buttonFn: operatorBtnFn },
    ],
    [
      { title: '4', buttonFn: numericBtnFn },
      { title: '5', buttonFn: numericBtnFn },
      { title: '6', buttonFn: numericBtnFn },
      { title: '-', buttonFn: operatorBtnFn },
    ],
    [
      { title: '1', buttonFn: numericBtnFn },
      { title: '2', buttonFn: numericBtnFn },
      { title: '3', buttonFn: numericBtnFn },
      { title: 'x', buttonFn: operatorBtnFn },
    ],
    [
      { title: 'CLR', buttonFn: clearBtnFn },
      { title: '0', buttonFn: numericBtnFn },
      { title: '=', buttonFn: operatorBtnFn },
      { title: '/', buttonFn: operatorBtnFn },
    ],
  ];

  return (
    <View />
  );
};

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
