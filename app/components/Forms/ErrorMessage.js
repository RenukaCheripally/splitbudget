import React from 'react';
import { StyleSheet } from 'react-native';

import AppText from '../AppText';
import colors from '../../config/colors';

function ErrorMessage({ error, visible }) {
  if(!error || !visible) return null;
  return (
    <AppText style={{color: colors.danger}} title={error} />
  );
}

const styles = StyleSheet.create({
  
})

export default ErrorMessage;