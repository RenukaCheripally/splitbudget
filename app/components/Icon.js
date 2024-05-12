import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';

function Icon({name, size, color}) {
  return (
    <MaterialCommunityIcons name={name} size={size} color={color} />
  );
}

export default Icon;