import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Colors from '../constants/colors';

const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: '20%',
    borderRadius: 10,
    backgroundColor: Colors.accent,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
    marginHorizontal: '5%',
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
  mainText: {
    color: Colors.white,
    fontSize: 36,
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
        <Text style={styles.mainText}>{main}</Text>
      </View>
    </View>
  );
};

export default DualDisplay;

DualDisplay.propTypes = {
  /**
   * main
   *
   * String displayed in the main container, which is located at
   * the bottom of the component. Appears in a large font size.
   */
  main: PropTypes.string,
  /**
   * secondary
   *
   * String displayed in the secondary container, which is located at
   * the top of the component. Appears in a smaller font size.
   */
  secondary: PropTypes.string,
};

// Default props for DualDisplay.
DualDisplay.defaultProps = {
  main: '',
  secondary: '',
};
