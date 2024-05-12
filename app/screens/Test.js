import React from 'react';
import { Text, SafeAreaView, StyleSheet } from 'react-native';

import Icon from '../components/Icon';

function Test(props) {
  return (
    <SafeAreaView style={styles.container}>
      <Icon name="email" />
      <Text>Renu</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default Test;