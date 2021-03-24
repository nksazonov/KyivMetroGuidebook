import React from 'react'
import { View, StyleSheet } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'

import SelectStation from './SelectStation'
import colors from '.././styles/colors'

const DestStationsBar = ({ style }) => {
  return (
    <View style={{ ...styles.container, ...style }}>
      <SelectStation
        stName="From"
        lineColor="#bfbfbf"
        style={ styles.selectSt }
      />

      <FontAwesome5
        name="exchange-alt"
        style={ styles.icon }
      />

      <SelectStation
        stName="Politekhichnyi instityt"
        lineColor="#2382bf"
        style={ styles.selectSt }
        cancellable
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 7,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'stretch',
  },
  icon: {
    flex: 1,
    fontSize: 15,
    alignSelf: 'center',
    textAlign: 'center',
    color: colors.grey,
  },
  selectSt: {
    flex: 5,
  }
})

export default DestStationsBar;