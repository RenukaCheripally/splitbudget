import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

import AppText from '../components/AppText';
import colors from '../config/colors';
import Profile from '../components/Profile';

function ListItineraries(props) {
  return (
    <View style={styles.itinerary}>
      <Image source={require("../assets/pondicherry.jpeg")} style={styles.image} />
      <View style={styles.details}>
        <AppText title="Pondicherry" style={styles.title} />
        <AppText title="₹12000" style={styles.price} />
        <View style={styles.profile}>
          <Profile title={"Renuka Cheripally"} subTitle="Organizer" image={require("../assets/rc.jpeg")} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  details: {
    padding: 15,
  },
  image: {
    width: "100%",
    height: 300,
  },
  itinerary: {
  },
  price: {
    color: colors.medium,
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 5
  },
  profile: {
    marginTop: 20
  },
  title: {
    color: colors.black,
    fontSize: 24,
    fontWeight: "bold"
  }
})

export default ListItineraries;