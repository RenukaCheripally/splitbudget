import React from 'react';
import { View, ImageBackground, StyleSheet, Text, Image } from 'react-native';

import AppButton from '../components/AppButton';
import AppText from '../components/AppText';
import colors from '../config/colors';

function WelcomeScreen(props) {
  return (
    <ImageBackground
    blurRadius={2}
      style={styles.background}
      source={require("../assets/background.jpeg")}
    >
      {/* <View style={styles.logoContainer}>
        <Image
          source={require("../assets/logo.jpeg")}
          style={styles.logo}
        />
        <AppText style={styles.caption}>Reb</AppText>
      </View> */}
      <View style={styles.buttonsContainer}>
        <AppButton title={"Login"} />
        <AppButton style={styles.registerButton} title={"Register"} />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    alignItems: "center",
    bottom: 20,
    flex: 1,
    justifyContent: "flex-end",
  },
  buttonsContainer: {
    padding: 20,
    width: "100%",
  },
  caption: {
    color: colors.white,
    fontSize: 19,
    fontWeight: "bold",
    marginTop: 10
  },
  logo: {
    // backgroundBlendMode: "overlay",
    height: 100,
    width: 100,
  },
  logoContainer: {
    alignItems: "center",
    position: "absolute",
    top: 140,
  },
  registerButton: {
    backgroundColor: colors.secondary,
  },
})

export default WelcomeScreen;