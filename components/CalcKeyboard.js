import PropTypes from 'prop-types';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

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

  /**
   * createBtnRow
   *
   * @param {Object[]} buttons an array containing button objects,
   *                           as defined in the keyboardButtons constant.
   * @param {number}   index   the index of a row, used as key property
   *                           value when rendering.
   * @returns JSX code that renders a row of buttons in the keyboard.
   */
  const createBtnRow = (buttons, index) => (
    <View key={index}>
      {
        buttons.map((button) => (
          <TouchableOpacity
            activeOpacity={0.9}
            key={`${button.title} container`}
            onPress={button.buttonFn.bind(this, button.title)}
          >
            <Text key={button.title}>{button.title}</Text>
          </TouchableOpacity>
        ))
      }
    </View>
  );

  /**
   * createKeyboard
   *
   * Creates multiple rows of buttons.
   * @param {Object[]} rows an array containing arrays of buttons,
   *                        as defined in the keyboardButtons constant.
   * @returns JSX code that renders the calculator's keyboard.
   */
  const createKeyboard = (rows) => (
    rows.map((row, index) => createBtnRow(row, index))
  );

  return (
    <View>
      {createKeyboard(keyboardButtons)}
    </View>
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
