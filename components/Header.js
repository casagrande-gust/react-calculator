import PropTypes from 'prop-types';
import React from 'react';
import { Text, View } from 'react-native';

/**
 * Header Component
 *
 * Displays the title of the app.
 */
export const Header = (props) => {
  const { title } = props;

  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
};

export default Header;

// Default props for Header.
Header.defaultProps = {
  title: '',
};

// PropTypes for Header.
Header.propTypes = {
  title: PropTypes.string,
};
