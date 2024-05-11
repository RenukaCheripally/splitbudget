import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

import AppText from './AppText';
import colors from '../config/colors';

function Profile({title, subTitle, image}) {
  return (
    <View style={styles.profile}>
      <Image source={image} style={styles.image} />
      <View style={styles.details}>
        <AppText title={title} style={styles.title} />
        <AppText title={subTitle} style={styles.subTitle} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  details: {
    justifyContent: "center",
  },
  profile: {
    flexDirection: "row",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10
  },
  subTitle: {
    color: colors.medium,
    fontSize: 18,
    fontWeight: "400"
  },
  title: {
    color: colors.black,
    fontSize: 20,
  }
})

export default Profile;