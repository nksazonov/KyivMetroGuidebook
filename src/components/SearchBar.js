import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import { Feather, FontAwesome5 } from '@expo/vector-icons'
import colors from '../styles/colors'
import dimensions from '../styles/dimensions'

const SearchBar = ({ style, onChangeText, value, placeholder }) => {
  return (
    <View style={[ styles.container, style ]}>
      <Feather
        name='search'
        style={styles.icon}
      />

      <TextInput
        value={value}
        onChangeText={onChangeText}
        style={styles.textInput}
        placeholder={placeholder}
        autoCapitalize="none"
        autoCorrect={ false }
        autoFocus
      />

      { value
        ? <FontAwesome5
            name="times"
            style={[ styles.icon, styles.closeIcon ]}
            onPress={() => onChangeText('')}
          />
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
    backgroundColor: colors.lightgrey,
  },
  icon: {
    color: colors.grey,
    fontSize: 20,
    width: dimensions.iconContainerWidth,
    borderRadius: 30,
    textAlign: 'center',
    lineHeight: 25,
  },
  closeIcon: {
    fontSize: 15,
    color: colors.mediumgrey
  },
  textInput: {
    flex: 10,
    fontSize: 17,
    fontFamily: 'Roboto',
    marginRight: 5,
    marginLeft: dimensions.iconMargin,
    color: colors.darkblue
  }
})

export default SearchBar;