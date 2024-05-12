import React, { useState } from 'react';
import { Alert, FlatList } from 'react-native';

import Screen from '../components/Screen';
import Profile from '../components/Profile';
import ListItemSeparator from '../components/ListComponents/ListItemSeparator';
import ListItemDeleteAction from '../components/ListComponents/ListItemDeleteAction';

const initialOrganizers = [
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
  const [organizers, setOrganizers] = useState(initialOrganizers);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = item => {
    setOrganizers(organizers.filter((organizer) => organizer.id !== item.id));
  }

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
            onPress={() => Alert.alert(item.name)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {setOrganizers(initialOrganizers)}}
      />
    </Screen>
  );
}

export default ListOrganizers;