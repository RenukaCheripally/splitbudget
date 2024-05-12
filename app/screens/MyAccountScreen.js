import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

import Screen from '../components/Screen';
import Profile from '../components/Profile';
import colors from '../config/colors';
import ListItemSeparator from '../components/ListComponents/ListItemSeparator';
import Icon from '../components/Icon';

function MyAccountScreen(props) {
  const menuItems = [
    {
      title: "My Listings",
      style: {
        title: {
          fontSize: 16,
        }
      },
      icon: {
        name: "format-list-bulleted",
        backgroundColor: colors.primary,
        size: 40,
      }
    },
    {
      title: "My Messages",
      style: {
        title: {
          fontSize: 16,
        }
      },
      icon: {
        name: "email",
        backgroundColor: colors.secondary,
        size: 40,
      }
    }
  ]

  return (
    <Screen style={styles.screen}>
      <View style={styles.profile}>
        <Profile
          title={"Steven Tucker"}
          subTitle={"steven.tucker@gmail.com"}
          image={require("../assets/rc.jpeg")}
        />
      </View>
      <View style={styles.menu}>
        <FlatList
          data={menuItems}
          keyExtractor={item => item.title}
          renderItem={({ item }) => (
            <Profile 
              title={item.title}
              style={item.style}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  size={40}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
            />
          )}
          ItemSeparatorComponent={ListItemSeparator}
        />
      </View>
      <View style={[styles.menu, styles.logout]}>
        <Profile
          title={"Log Out"}
          IconComponent={
            <Icon
              name={"logout"}
              size={40}
              backgroundColor={colors.yellow}
            />
          }
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