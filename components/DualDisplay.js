import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Colors from '../constants/colors';

const styles = StyleSheet.create({
  container: {
    width: '80%',
    height: '20%',
    borderRadius: 10,
    backgroundColor: Colors.accent,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
    marginHorizontal: '10%',
  },
  secondaryContainer: {
    flex: 3,
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: Colors.white,
  },
  secondaryText: {
    color: Colors.white,
    fontSize: 20,
  },
  mainContainer: {
    flex: 7,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

/**
 * DualDisplay Component
 *
 * A component that renders two containers,
 * main and secondary, to display string values.
 */
export const DualDisplay = (props) => {
  const { main, secondary } = props;

  return (
    <View style={styles.container}>
      <View style={styles.secondaryContainer}>
        <Text style={styles.secondaryText}>{secondary}</Text>
      </View>
      <View style={styles.mainContainer}>
        <Text>{main}</Text>
      </View>
    </View>
  );
};

export default DualDisplay;

// Default props for DualDisplay.
DualDisplay.defaultProps = {
  main: '',
  secondary: '',
};

// PropTypes for DualDisplay props.
DualDisplay.propTypes = {
  main: PropTypes.string,
  secondary: PropTypes.string,
};
