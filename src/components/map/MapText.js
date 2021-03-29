import React from 'react'
import { Text } from 'react-native-svg'

export default MapText = ({ text, coords, onPress, onLongPress }) => {
  const [ x, y ] = coords;
  return (
    <Text
      fontSize="19"
      stroke="white"
      strokeWidth="10"
      strokeOpacity="0"
      fill="#000"
      x={x}
      y={y}
      onPress={onPress}
      onLongPress={onLongPress}>

        { text }

    </Text>
  )
};