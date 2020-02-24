import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

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

  return (
    <View style={styles.container}>
      <Header title={AppStrings.appTitle} />
      <DualDisplay />
      <CalcKeyboard />
    </View>
  );
}
