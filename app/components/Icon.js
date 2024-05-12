import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StyleSheet } from 'react-native';

const size = 40;
const backgroundColor = "red";

function Icon({name, size, color, style}) {
  return (
    <MaterialCommunityIcons name={name} size={size} color={color} style={style} />
  );
}

const styles = StyleSheet.create({
  icon: {
    width: size,
    height: size,
    borderRadius: size / 2,
    backgroundColor: backgroundColor,
    justifyContent: "center",
    alignItems: "center"
  }
})

export default Icon;