import PropTypes from 'prop-types';
import React from 'react';
import { Text, View } from 'react-native';

/**
 * DualDisplay Component
 *
 * A component that renders two containers,
 * main and secondary, to display string values.
 */
export const DualDisplay = (props) => {
  const { main, secondary } = props;

  return (
    <View>
      <View>
        <Text>{secondary}</Text>
      </View>
      <View>
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
