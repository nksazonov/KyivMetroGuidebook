import React from 'react'
import { TouchableHighlight, StyleSheet } from 'react-native'
import colors from '../../styles/colors'
import dimensions from '../../styles/dimensions'

const Highlightable = ({ children, style, onPress, underlayColor = colors.mediumgrey, activeOpacity = 0.65, }) => {
  return (
    <TouchableHighlight
      style={[ styles.container, style ]}
      activeOpacity={activeOpacity}
      underlayColor={underlayColor}
      onPress={onPress}
    >
      { children }
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  container: {
    width: dimensions.iconHighlightable,
    height: dimensions.iconHighlightable,
    borderRadius: dimensions.iconHighlightable,
    flexDirection: 'row',
    alignItems: 'center',
  },
})

export default Highlightable;