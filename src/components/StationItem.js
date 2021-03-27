import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'
import colors from '../styles/colors'
import dimensions from '../styles/dimensions'
import Highlightable from './common/Highlightable'

const StationItem = ({ style, stName, lineColor, onPress, onInfoPress }) => {
  return (
    <View style={[ styles.container, style ]}>
      <View style={ styles.lineContainer }>
        <View style={{ ...styles.line, backgroundColor: lineColor}}/>
      </View>

      <Text style={styles.text}>
        { stName }
      </Text> 

      { onInfoPress
        ? <Highlightable
            onPress={onInfoPress}
            underlayColor={ colors.lightgrey }
            activeOpacity={1}
          >
            <FontAwesome5
              name='info-circle'
              style={styles.infoIcon}
            />
          </Highlightable>
        : null
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  lineContainer: {
    width: dimensions.iconContainerWidth,
    alignItems: 'center',
    marginRight: dimensions.iconMargin,
  },
  line: {
    width: 10,
    height: 10,
    borderRadius: 5,
    overflow: 'hidden'
  },
  text: {
    flex: 10,
    fontSize: 17,
    fontFamily: 'Roboto',
    marginRight: 5,
    color: colors.darkblue
  },
  infoIcon: {
    color: colors.blue,
    fontSize: 17,
    flex: 1,
    borderRadius: 30,
    textAlign: 'center',
  }
})

export default StationItem;