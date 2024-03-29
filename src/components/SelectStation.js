import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'
import colors from '.././styles/colors'
import Highlightable from './common/Highlightable'
import Ripple from 'react-native-material-ripple'

const SelectStation = ({ style, stName, lineColor, onPress, onCancel }) => {
  return (
    <View style={{ ...styles.container, ...style }}>
      <Ripple
        style={ styles.ripple }
        onPress={onPress}
        rippleColor={ colors.grey }
        rippleOpacity={ .7 }
      >

        <View style={{ ...styles.line, backgroundColor: lineColor}} />
        <Text numberOfLines={1} style={ styles.text }>{stName}</Text>
      </Ripple>

      { onCancel
        &&
        <Highlightable
          onPress={onCancel}
        >
          <FontAwesome5
            name="times"
            style={ styles.cancelIcon }
          />
        </Highlightable>
      }
    </View>
  )
}

//TODO: add "remove" button shadow on station name
// https://www.npmjs.com/package/react-native-linear-gradient

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: colors.lightgrey,
    overflow: 'hidden',
    position: 'relative'
  },
  ripple: {
    flex: 1, 
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    paddingRight: 0
  },
  line: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 8,
  },
  cancelIcon: {
    color: colors.grey,
    fontSize: 15,
    flex: 1,
    borderRadius: 30,
    textAlign: 'center',
  },
  text: {
    fontSize: 17,
    fontWeight: 'bold',
    overflow: 'hidden',
    fontFamily: 'Roboto',
    flex: 10,
    color: colors.darkblue
  }
})

export default SelectStation;