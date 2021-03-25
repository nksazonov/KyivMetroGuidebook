import React from 'react'
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'
import colors from '.././styles/colors'

const SelectStation = ({ style, stName, lineColor, onPress, onCancel }) => {
  return (
    <View
      style={{ ...styles.container, ...style }}
      onPress={onPress}
    >
      <View style={{ ...styles.line, backgroundColor: lineColor}} />
      <Text numberOfLines={1} style={ styles.text }>{stName}</Text>

      { onCancel
        ?
        <TouchableHighlight
          style={styles.cancelIconContainer}
          activeOpacity={0.65}
          underlayColor={colors.grey}
          onPress={onCancel}
        >
          <FontAwesome5
            name="times"
            style={ styles.cancelIcon }
          />
        </TouchableHighlight>
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
  cancelIconContainer: {
    width: 25,
    height: 25,
    borderRadius: 30,
  },
  cancelIcon: {
    color: colors.grey,
    fontSize: 15,
    backgroundColor: colors.lightgrey,
    flex: 1,
    borderRadius: 30,
    textAlign: 'center',
    lineHeight: 25
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