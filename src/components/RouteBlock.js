import React, { useContext } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'

import { Context as RouteContext } from '../context/RouteContext'
import Highlightable from '../components/common/Highlightable'
import dimensions from '../styles/dimensions'
import colors from '../styles/colors'
import Curtain from './common/Curtain'

const RouteBlock = ({ style }) => {
  const { state: { route }, setArrival } = useContext(RouteContext);

  return (
    <View style={[ styles.container, style ]}>
      <Curtain style={{ position: 'absolute' }} color={ colors.lightgrey } />

      <View style={ styles.topContainer }>
        <Text style={ styles.time }>
          10 хв
        </Text>

        <Highlightable
          onPress={ () => setArrival('') }
          activeOpacity={ .4 }
          underlayColor={ '#fff' }
        >
          <FontAwesome
            name="times-circle"
            style={ styles.close }
          />
        </Highlightable>
      </View>

      <View style={ styles.topContainer }>
        <Text style={ styles.timeSchedule }>
          Date here
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#fff',
    paddingVertical: dimensions.paddingSide,
    paddingHorizontal: dimensions.smallPaddingSide + dimensions.iconMargin,
  },
  topContainer: {
    width: '100%',
    height: 35,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  time: {
    fontSize: dimensions.bigFont,
    color: colors.darkblue,
    fontWeight: 'bold'
  },
  close: {
    color: colors.grey,
    fontSize: dimensions.hugeFont,
    flex: 1,
    textAlign: 'center',
  },
  timeSchedule: {
    fontSize: dimensions.mediumFont,
    color: colors.grey
  }
})

export default RouteBlock;