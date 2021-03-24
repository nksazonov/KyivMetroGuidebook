import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'
import colors from '.././styles/colors'

const SelectStation = ({ style, stName, lineColor, cancellable, onPress, onCancel }) => {
  return (
    <View
      style={{ ...styles.container, ...style }}
      onPress={onPress}
    >
      <View style={{ ...styles.line, backgroundColor: lineColor}} />
      <Text numberOfLines={1} style={ styles.text }>{stName}</Text>

      { cancellable
      ?
      <FontAwesome5
        name="times"
        style={ styles.cancelIcon }
        onPress={onCancel}
      />
      : null
      }
    </View>
  )
}
//TODO: add "remove" button shadow on station name
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
    backgroundColor: colors.lightgrey,
    overflow: 'hidden',
    position: 'relative'
  },
  line: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 8,
  },
  cancelIcon: {
    color: colors.grey,
    fontSize: 12,
    flex: 1,
    position: 'absolute',
    right: 0,
    backgroundColor: colors.lightgrey,
    padding: 10,
  },
  text: {
    fontSize: 17,
    fontWeight: 'bold',
    overflow: 'hidden',
    fontFamily: 'Roboto',
    flex: 10,
    marginRight: 5,
    color: colors.darkblue
  }
})

export default SelectStation;