import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Colors from '../constants/colors';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 90,
    backgroundColor: Colors.primary,
    paddingTop: 20,
  },
  title: {
    color: Colors.white,
    fontSize: 18,
  },
});

/**
 * Header Component
 *
 * Displays the title of the app.
 */
export const Header = (props) => {
  const { title } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default Header;

Header.propTypes = {
  /**
   * title
   *
   * String displayed inside of a blue rectangular container.
   */
  title: PropTypes.string,
};

// Default props for Header.
Header.defaultProps = {
  title: '',
};
