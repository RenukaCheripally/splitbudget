import React from 'react';
import { View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/colors';

function Icon({name, size=40, color=colors.white, backgroundColor=colors.black}) {
  return (
    <View style={{
      width: size,
      height: size,
      borderRadius: size / 2,
      backgroundColor,
      justifyContent: "center",
      alignItems: "center"
    }}>
      <MaterialCommunityIcons name={name} size={size * 0.5} color={color} />
    </View>
  );
}

export default Icon;