import React from 'react';
import { Text, StyleSheet, Platform } from 'react-native';

import colors from '../config/colors';

function AppText({ title, style }) {
  return (
    <Text style={[styles.text, style]}>{title}</Text>
  );
}

const styles = StyleSheet.create({
  text: {
    color: colors.black,
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
  }
})

export default AppText;