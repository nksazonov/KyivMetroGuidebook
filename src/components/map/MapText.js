import React from 'react'
import { Text } from 'react-native-svg'

export default MapText = ({ station, onPress, onLongPress }) => {
  const [ x, y ] = station['text-coords'];
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

        {station.name}

    </Text>
  )
};