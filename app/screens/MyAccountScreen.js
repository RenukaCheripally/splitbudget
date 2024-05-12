import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

import Screen from '../components/Screen';
import Profile from '../components/Profile';
import colors from '../config/colors';
import ListItemSeparator from '../components/ListItemSeparator';
import ListItem from '../components/ListComponents/ListItem';

function MyAccountScreen(props) {
  const menu = [
    {
      title: "My Listings",
      icon: {
        name: "format-list-bulleted",
        backgroundColor: colors.primary,
        size: 20,
        color: colors.white,
      }
    },
    {
      title: "My Messages",
      icon: {
        name: "email",
        backgroundColor: colors.secondary,
        size: 20,
        color: colors.white,
      }
    }
  ]

  return (
    <Screen style={styles.screen}>
      <View style={styles.profile}>
        <Profile title={"Steven Tucker"} subTitle={"steven.tucker@gmail.com"} image={require("../assets/rc.jpeg")} />
      </View>
      <View style={styles.menu}>
        <FlatList
          data={menu}
          keyExtractor={item => item.title}
          renderItem={({ item }) => (
            <ListItem item={item} />
          )}
          ItemSeparatorComponent={ListItemSeparator}
        />
      </View>
      <View style={[styles.menu, styles.logout]}>
        <ListItem
          item={{
            title: "Log Out",
            icon: {
              name: "logout",
              backgroundColor: colors.yellow,
              size: 20,
              color: colors.white
            }
          }}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  icon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logout: {
    marginTop: 20,
  },
  menu: {
    backgroundColor: colors.white,
    marginTop: 30
  },
  profile: {
    backgroundColor: colors.white,
    marginTop: 10,
    flexDirection: "row",
  },
  screen: {
    backgroundColor: colors.light
  }
})

export default MyAccountScreen;