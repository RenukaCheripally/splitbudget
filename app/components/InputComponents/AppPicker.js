import React, { useState } from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, Modal, Button, FlatList, Alert } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import defaultStyles from '../../config/styles';
import AppText from '../AppText';
import Screen from '../Screen';
import PickerItem from './PickerItem';

const categories = ["IT", "Health", "Engineering"];

function AppPicker({ icon, placeholder, items = categories, selectedItem = categories[0], onSelectItem, ...otherProps }) {
  const [ modalVisible, setModalVisible ] = useState(false);

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.container}>
          {icon && <MaterialCommunityIcons name={icon} size={20} color={defaultStyles.colors.medium} style={styles.icon} />}
          <AppText title={selectedItem ? selectedItem : placeholder} style={[styles.textInput, defaultStyles.text]} {...otherProps} />
          <MaterialCommunityIcons name="chevron-down" size={20} color={defaultStyles.colors.medium} />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType='slide'>
        <Screen>
          <Button title='Close' onPress={() => setModalVisible(false)} />
          <FlatList
            data={items}
            keyExtractor={item => item.toString()}
            renderItem={({ item }) => (
              <PickerItem
                label={item}
                onPress={() => {
                  setModalVisible(false);
                  onSelectItem(item);
                }}
              />
            )}
          />
        </Screen>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 25,
    flexDirection: "row",
    marginVertical: 10,
    padding: 15,
    width: "100%",
  },
  icon: {
    marginRight: 10,
  },
  textInput: {
    width: '100%',
    flex: 1
  }
})

export default AppPicker;