import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'

import Highlightable from '../components/common/Highlightable'
import dimensions from '../styles/dimensions'
import colors from '../styles/colors'
import Curtain from './common/Curtain'

const RouteBlock = ({ style, route, onClose }) => {

  const routeDur = Math.ceil(route.weight);

  let depTime = new Date(Date.now());
  let arrTime = new Date(Date.now());
  arrTime.setMinutes(depTime.getMinutes() + routeDur);

  console.log(arrTime.toTimeString());

  return (
    <View style={[ styles.container, style ]}>
      <Curtain style={{ position: 'absolute' }} color={ colors.lightgrey } />

      <View style={ styles.topContainer }>
        <Text style={ styles.time }>
          { routeDur } хв
        </Text>

        <Highlightable
          onPress={ () => onClose('') }
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
        <Text style={ styles.timeSchedule }>{/* implements adding leading 0 if minutes < 10 */}
          { depTime.getHours() + ':' + String(depTime.getMinutes()).padStart(2, "0") } - { arrTime.getHours() + ':' + String(arrTime.getMinutes()).padStart(2, "0") }
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
    fontSize: dimensions.smallFont,
    color: colors.grey
  }
})

export default RouteBlock;