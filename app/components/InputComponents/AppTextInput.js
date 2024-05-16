import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import defaultStyles from '../../config/styles';

function AppTextInput({ icon, ...otherProps }) {
  return (
    <View style={styles.container}>
      {icon && <Ionicons name={icon} size={20} color={defaultStyles.colors.medium} style={styles.icon} />}
      <TextInput style={[styles.textInput, defaultStyles.text]} {...otherProps} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 25,
    flexDirection: "row",
    marginVertical: 10,
    paddingHorizontal: 15,
    width: "100%",
  },
  icon: {
    marginRight: 10,
  },
  textInput: {
    paddingVertical: 15,
    width: '100%',
  }
})

export default AppTextInput;