import React, { useState } from 'react';
import { Alert, StyleSheet, View } from 'react-native';

import CalcKeyboard from './components/CalcKeyboard';
import DualDisplay from './components/DualDisplay';
import Header from './components/Header';
import AppStrings from './constants/app-strings';
import Colors from './constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function App() {
  /**
   * State Variables and Setter Functions
   */

  /**
   * prevValue
   *
   * Stores the value previously built via user input,
   * or the result of the previous operation.
   */
  const [prevValue, setPrevValue] = useState('');

  /**
   * currValue
   *
   * Stores the value currently being built via user input.
   */
  const [currValue, setCurrValue] = useState('');

  /**
   * operator
   *
   * Stores the operator chosen by the user
   * for the current calculation.
   */
  const [operator, setOperator] = useState('');

  /**
   * resultValue
   *
   * The result of the current calculation.
   */
  const [resultValue, setResultValue] = useState('');

  /**
   * history
   *
   * A string storing all user inputs, representing
   * the current calculation/number being built.
   */
  const [history, setHistory] = useState('');

  /**
   * decimalPressed
   *
   * Represents whether or not the user has
   * added a decimal point to the current value.
   */
  const [decimalPressed, setDecimalPressed] = useState(false);

  /**
   * clearBtnHandler
   *
   * Executed when user presses the CLEAR button.
   * Erases all current data.
   */
  const clearBtnHandler = () => {
    setPrevValue('');
    setOperator('');
    setCurrValue('');
    setHistory('');
    setResultValue('');
    setDecimalPressed(false);
  };

  /**
   * numericBtnHandler
   *
   * Executes when the user presses 0-9 or the '.' button.
   * Updates the current value being built and the history of user input.
   * @param {string} numericInput the title of the button pressed by the user.
   */
  const numericBtnHandler = (numericInput) => {
    // If there's a resultValue, clear it.
    if (resultValue) {
      setResultValue('');
    }
    if (numericInput === '.') {
      // If the user pressed '.', check if the current value
      // already has a decimal point. Throw an error if true.
      if (decimalPressed) {
        Alert.alert(
          'Math Error!',
          'You can not add two decimal points to the same value',
          [{ text: 'Ok', style: 'cancel' }],
        );
        return;
      }
      // Otherwise, set decimalPressed to true.
      setDecimalPressed(true);
    }
    // Update current value and history with new input.
    setCurrValue(currValue + numericInput);
    setHistory(history + numericInput);
  };

  return (
    <View style={styles.container}>
      <Header title={AppStrings.appTitle} />
      <DualDisplay main={currValue} secondary={history} />
      <CalcKeyboard clearBtnFn={clearBtnHandler} numericBtnFn={numericBtnHandler} />
    </View>
  );
}
