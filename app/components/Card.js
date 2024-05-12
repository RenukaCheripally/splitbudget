import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

import colors from '../config/colors';
import AppText from './AppText';

function Card({ title, subTitle, image, organizer, duration }) {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} />
      <View style={styles.detailsContainer}>
        <View style={styles.details}>
          <AppText title={title} style={styles.title} />
          <AppText title={"₹" + subTitle} style={styles.price} />
        </View>
        <View>
          <AppText title={duration} style={styles.duration} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 15,
    marginBottom: 20,
    overflow: "hidden",
  },
  details: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  detailsContainer: {
    padding: 15,
  },
  image: {
    height: 200,
    width: "100%",
  },
  price: {
    color: colors.secondary,
    fontSize: 18,
    fontWeight: "bold",
  },
})

export default Card;