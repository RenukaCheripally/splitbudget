import React from 'react';
import { View, StyleSheet, Image, TouchableHighlight } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import AppText from './AppText';
import colors from '../config/colors';

function Profile({title, subTitle, image, onPress, renderRightActions}) {
  return (
        <Swipeable renderRightActions={renderRightActions}>
          <TouchableHighlight
            underlayColor={colors.light}
            onPress={onPress}
          >
            <View style={styles.profile}>
              <Image source={image} style={styles.image} />
              <View style={styles.details}>
                <AppText title={title} style={styles.title} />
                <AppText title={subTitle} style={styles.subTitle} />
              </View>
            </View>
          </TouchableHighlight>
        </Swipeable>
  );
}

const styles = StyleSheet.create({
  details: {
    justifyContent: "center",
  },
  profile: {
    flexDirection: "row",
    padding: 15
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