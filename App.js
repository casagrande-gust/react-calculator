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
    // If there's a resultValue, clear resultValue
    // and set current value and history to numericInput.
    if (resultValue) {
      setResultValue('');
      setCurrValue(numericInput);
      setHistory(numericInput);
      setDecimalPressed(numericInput === '.');
    } else {
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
    }
  };

  /**
   * operatorBtnHandler
   *
   * Executes when user presses one of the operation buttons: +, -, x or /.
   * Saves the current value as the first operand, resets appropriate
   * state values to build the second operand.
   * @param {string} chosenOperator the title of the operator chosen for calculation.
   */
  const operatorBtnHandler = (chosenOperator) => {
    // If user already chose an operator for the
    // current calculation, display an error message.
    if (operator) {
      Alert.alert(
        'Operator already chosen!',
        'If you want to change the operator, press the CLR button.',
        [{ text: 'Ok', style: 'cancel' }],
      );
      return;
    }
    // If user did not input a value before choosing
    // an operator, display an error message.
    if (!currValue) {
      Alert.alert(
        'No Value!',
        'Please insert a value before choosing an operation.',
        [{ text: 'Ok', style: 'cancel' }],
      );
      return;
    }
    // If user presses an operator button right after a calculation,
    // use the result of the calculation as the first new operand.
    if (resultValue) {
      setPrevValue(resultValue);
      setResultValue('');
    } else {
      // Otherwise, set currently built value as the first operand.
      setPrevValue(currValue);
    }
    // Reset current value string to build second operand.
    setCurrValue('');
    // Set operator for current calculation.
    setOperator(chosenOperator);
    // Update user input history.
    setHistory(`${currValue} ${chosenOperator} `);
    // Reset decimalPressed flag.
    setDecimalPressed(false);
  };

  const equalsBtnHandler = () => {
    // Convert strings stored in State variables to float numbers.
    const a = parseFloat(prevValue, 10);
    const b = parseFloat(currValue, 10);
    // If conversion fails, display an error message, clear State and return.
    if (Number.isNaN(a) || Number.isNaN(b)) {
      Alert.alert(
        'Calculator Error!',
        'Please enter two values and an operator',
        [{ text: 'Ok', style: 'cancel' }],
      );
      clearBtnHandler();
      return;
    }
    let numericResult;
    switch (operator) {
      case '+':
        numericResult = a + b;
        break;
      case '-':
        numericResult = a - b;
        break;
      case 'x':
        numericResult = a * b;
        break;
      case '/':
        if (b) {
          const value = a / b;
          numericResult = Math.floor(value * 100) / 100;
        } else {
          Alert.alert(
            'Math Error!',
            'You can not divide a number by 0',
            [{ text: 'Ok', style: 'cancel' }],
          );
          clearBtnHandler();
          return;
        }
        break;
      default:
        Alert.alert(
          'Calculator Error!',
          'Please enter two values and an operator',
          [{ text: 'Ok', style: 'cancel' }],
        );
        clearBtnHandler();
        return;
    }
    const result = numericResult.toFixed(2);
    setResultValue(result);
    setCurrValue(result);
    setOperator('');
    setDecimalPressed(false);
    setPrevValue('');
  };

  return (
    <View style={styles.container}>
      <Header title={AppStrings.appTitle} />
      <DualDisplay main={currValue} secondary={history} />
      <CalcKeyboard
        clearBtnFn={clearBtnHandler}
        numericBtnFn={numericBtnHandler}
        operatorBtnFn={operatorBtnHandler}
        equalBtnFn={equalsBtnHandler}
      />
    </View>
  );
}
