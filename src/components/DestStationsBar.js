import React, { useContext } from 'react'
import { View, StyleSheet } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'

import SelectStation from './SelectStation'
import colors from '.././styles/colors'
import { Context as RouteContext } from '../context/RouteContext'
import { getStation, getLine } from '../hooks/useStation'

const DestStationsBar = ({ style }) => {
  const { state: { departure, arrival }, setDeparture, setArrival } = useContext(RouteContext);

  return (
    <View style={{ ...styles.container, ...style }}>
      <SelectStation
        stName={ departure ? getStation(departure).name : "From" }
        lineColor={ departure ? getLine(Math.floor(getStation(departure).id / 100)).color : colors.grey}
        style={ styles.selectSt }
        onCancel={ departure ? () => setDeparture(0) : null }
      />

      <FontAwesome5
        name="exchange-alt"
        style={ styles.icon }
      />

      <SelectStation
        stName={ arrival ? getStation(arrival).name : "To" }
        lineColor={ arrival ? getLine(Math.floor(getStation(arrival).id / 100)).color : colors.grey}
        style={ styles.selectSt }
        onCancel={ arrival ? () => setArrival(0) : null }
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