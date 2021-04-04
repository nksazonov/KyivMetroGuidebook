import React, { useState } from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import { vw } from 'react-native-css-vh-vw'

import SearchBar from './SearchBar'
import StationItem from './StationItem'
import colors from '../styles/colors'
import dimensions from '../styles/dimensions'
import { getLine } from '../hooks/useStation'
import Highlightable from './common/Highlightable'

const stations = require('../data/stations.json');

const SearchStationBlock = ({ style, onSelect, onCancel, searchText }) => {
  const [ search, setSearch ] = useState('');

  return (
    <View style={[ styles.container, style ]}>
      <View style={ styles.searchBlock }>
        <View style={ styles.curtainContainer }>
          <View style={ styles.curtainIcon } />
        </View>

        <SearchBar
          style={ styles.searchBar }
          placeholder={ searchText }
          value={ search }
          onChangeText={ setSearch }
        />

        <Highlightable
          onPress={() => onCancel()}
          style={{ borderRadius: 5, height: 'auto', width: 'auto', padding: 5, left: 5 }}
          underlayColor={ colors.lightgrey }
          activeOpacity={1}
        >
          <Text style={ styles.cancelText }>
            Скасувати
          </Text>
        </Highlightable>
      </View>

      <FlatList
        keyboardShouldPersistTaps='handled'
        data={ stations.filter(item => item.name.split(' ').some(word => word.toLowerCase().startsWith(search.toLowerCase()))) }
        renderItem={ ({ item }) => {
          return (
          <StationItem
            style={ styles.stationItem }
            stName={ item.name }
            lineColor={ getLine(Math.floor(item.id / 100)).color }
            onPress={() => onSelect(item.id)}
            onInfoPress={() => {}}
          />
         )}}
        keyExtractor={ ( item, counter ) => (item.id + counter).toString() }
        ItemSeparatorComponent={ () => <View style={ styles.itemSeparator } /> }
        style={ styles.stationList }
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#fff'
  },
  searchBlock: {
    width: '100%',
    height: 80,
    paddingVertical: 20,
    paddingHorizontal: dimensions.paddingSide,
    borderBottomWidth: 2,
    borderBottomColor: colors.lightgrey,
    flexDirection: 'row',
    alignItems: 'center',
  },
  curtainContainer: {
    width: vw(100),
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'absolute',
    top: 7,
  },
  curtainIcon: {
    width: 25,
    height: 3,
    borderRadius: 5,
    backgroundColor: colors.lightgrey,
  },
  searchBar: {
    height: 40,
    borderRadius: 40,
    flex: 11,
    marginRight: 30,
    backgroundColor: '#fff',
  },
  closeIcon: {
    fontSize: 30,
    color: colors.grey,
  },
  stationItem: {
    width: '100%',
    height: 75,
    paddingRight: dimensions.paddingSide - 5, //-5 to align with "cancel"
  },
  stationList: {
    flex: 1,
    paddingLeft: dimensions.paddingSide,
  },
  itemSeparator: {
    width: vw(100),
    height: 1,
    backgroundColor: colors.lightgrey,
    marginLeft: dimensions.iconContainerWidth + dimensions.iconMargin,
  },
  cancelText: {
    fontSize: 18,
    color: colors.blue,
  }
})

export default SearchStationBlock;