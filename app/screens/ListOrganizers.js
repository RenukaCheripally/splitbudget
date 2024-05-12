import React from 'react';
import { FlatList } from 'react-native';

import Screen from '../components/Screen';
import Profile from '../components/Profile';
import ListItemSeparator from '../components/ListItemSeparator';

const organizers = [
  {
    id: "TS1",
    name: "Tina Smith",
    image: require("../assets/rc.jpeg"),
    description: "Humble and Expert"
  },
  {
    id: "TS2",
    name: "Travis Decker",
    image: require("../assets/rc.jpeg"),
    description: "Skilled"
  },
  {
    id: "TS3",
    name: "Beth Adam",
    image: require("../assets/rc.jpeg"),
    description: "Adventurous and Curious"
  },
]

function ListOrganizers(props) {
  return (
    <Screen>
      <FlatList
        data={organizers}
        keyExtractor={(organizer) => organizer.id.toString()}
        renderItem={({ item }) => (
          <Profile
            title={item.name}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log('Message selected', item)}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
      />
    </Screen>
  );
}

export default ListOrganizers;