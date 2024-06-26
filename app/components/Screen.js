import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Platform, StyleSheet, SafeAreaView, View } from 'react-native';

function Screen({children, style}) {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <View style={style}>
        {children}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    flex: 1,
  }
})

export default Screen;