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
  // State variables and setter functions.
  const [prevValue, setPrevValue] = useState('');
  const [currValue, setCurrValue] = useState('');
  const [operator, setOperator] = useState('');
  const [resultValue, setResultValue] = useState('');
  const [history, setHistory] = useState('');
  const [decimalPressed, setDecimalPressed] = useState(false);

  return (
    <View style={styles.container}>
      <Header title={AppStrings.appTitle} />
      <DualDisplay />
      <CalcKeyboard />
    </View>
  );
}
