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

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    borderRadius: 5,
    backgroundColor: colors.lightgrey,
    overflow: 'hidden',
  },
  line: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 5,
  },
  cancelIcon: {
    fontSize: 12,
    flex: 1,
    color: colors.grey
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