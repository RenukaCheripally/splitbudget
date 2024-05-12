import React from 'react';
import { Text, StyleSheet } from 'react-native';

import defaultStyles from '../config/styles';

function AppText({ title, style }) {
  return (
    <Text style={[styles.text, defaultStyles.text, style]}>{title}</Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontWeight: "bold",
  }
})

export default AppText;