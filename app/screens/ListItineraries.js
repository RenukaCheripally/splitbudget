import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import Screen from '../components/Screen';
import Card from '../components/Card';
import colors from '../config/colors';

function ListItineraries(props) {
  const itineraries = [
    {
      id: 1,
      title: "Pondicherry",
      subTitle: 8000,
      image: require("../assets/pondicherry.jpeg"),
      organizer: {
        name: "Renuka Cheripally",
        image: require("../assets/rc.jpeg")
      },
      duration: "5N/6D"
    },
    {
      id: 2,
      title: "Gokarna",
      subTitle: 5000,
      image: require("../assets/gokarna.jpeg"),
      organizer: {
        name: "Renuka Cheripally",
        image: require("../assets/rc.jpeg")
      },
      duration: "3N/4D"
    },
    {
      id: 3,
      title: "Goa",
      subTitle: 6000,
      image: require("../assets/goa.jpeg"),
      organizer: {
        name: "Renuka Cheripally",
        image: require("../assets/rc.jpeg")
      },
      duration: "4N/5D"
    }
  ]

  return (
    <Screen style={styles.screen}>
      <FlatList
        data={itineraries}
        keyExtractor={itinerary => itinerary.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={item.subTitle}
            image={item.image}
            organizer={item.organizer}
            duration={item.duration}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
    padding: 20
  }
})

export default ListItineraries;