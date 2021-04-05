import React from 'react'
import { View, StyleSheet } from 'react-native'
import { vw } from 'react-native-css-vh-vw'

const Curtain = ({ style, color, width }) => {
  return (
    <View style={[ styles.curtainContainer, style ]}>
      <View style={[ styles.curtainIcon, { backgroundColor: color, width } ]} />
    </View>
  )
}

const styles = StyleSheet.create({
  curtainContainer: {
    width: vw(100),
    flexDirection: 'row',
    justifyContent: 'center',
    top: 7,
  },
  curtainIcon: {
    width: 25,
    height: 3,
    borderRadius: 5,
    backgroundColor: 'black',
  },
})

export default Curtain;