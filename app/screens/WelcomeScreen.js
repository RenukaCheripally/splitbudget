import React from 'react';
import { View, ImageBackground, StyleSheet, Text, Image } from 'react-native';

import colors from '../config/colors';

function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.jpeg")}
    >
      {/* <View style={styles.logoContainer}>
        <Image
          source={require("../assets/logo.jpeg")}
          style={styles.logo}
        />

      </View> */}
      <View style={styles.loginButton}><Text>Login</Text></View>
      <View style={styles.registerButton}><Text>Register</Text></View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  caption: {
    color: colors.white,
    fontSize: 19,
    fontWeight: "bold",
    marginTop: 5
  },
  logo: {
    width: 100,
    height: 100,
    backgroundBlendMode: "overlay",
  },
  logoContainer: {
    position: "absolute",
    top: 140,
    alignItems: "center",
  },
  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: colors.primary,
  },
  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: colors.secondary,
  },
})

export default WelcomeScreen;