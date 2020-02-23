import React from 'react';
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
  return (
    <View style={styles.container}>
      <Header title={AppStrings.appTitle} />
      <DualDisplay />
      <CalcKeyboard />
    </View>
  );
}
