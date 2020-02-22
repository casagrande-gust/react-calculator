import PropTypes from 'prop-types';
import React from 'react';
import { View } from 'react-native';

/**
 * Header Component
 *
 * Displays the title of the app.
 */
export const Header = () => (
  <View />
);

export default Header;

// Default props for Header.
Header.defaultProps = {
  title: '',
};

// PropTypes for Header.
Header.propTypes = {
  title: PropTypes.string,
};
