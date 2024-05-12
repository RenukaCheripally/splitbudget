import React from 'react';
import { View, StyleSheet } from 'react-native';

import colors from '../../config/colors';
import Icon from '../Icon';
import AppText from '../AppText';

function ListItem({ item }) {
  return (
    <View style={styles.profile}>
      <View style={[styles.iconContainer, {
        backgroundColor: item.icon.backgroundColor
      }]}>
        <Icon
          name={item.icon.name}
          size={item.icon.size}
          color={item.icon.color}
        />
      </View>
      <AppText title={item.title} />
    </View>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.light,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10
  },
  profile: {
    padding: 15,
    flexDirection: "row",
    alignItems: 'center'
  },
})

export default ListItem;