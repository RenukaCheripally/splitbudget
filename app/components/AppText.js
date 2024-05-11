import React from 'react';
import { Text, StyleSheet } from 'react-native';

import colors from '../config/colors';

function AppText({ title, style }) {
  return (
    <Text style={[styles.text, style]}>{title}</Text>
  );
}

const styles = StyleSheet.create({
  text: {
    color: colors.white,
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: 'Avenir'
  }
})

export default AppText;