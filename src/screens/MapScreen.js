import React, { useContext } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import ZoomableMap from '../components/ZoomableMap'
import { vw, vh } from 'react-native-css-vh-vw'
import DestStationsBar from '../components/DestStationsBar'
import SearchStationBlock from '../components/SearchStationBlock'
import { Context as RouteContext } from '../context/RouteContext'
import { useSelecting, getSelectingFunc } from '../hooks/useSelecting'

const MapScreen = () => {
    const { state: { selecting, departure, arrival }, setDepartureForced, setArrivalForced, setSelecting } = useContext(RouteContext);

    return (
        <View style={styles.container}>
          <ZoomableMap />
          <DestStationsBar style={ styles.destStationsBar } />

          {
            selecting
            ?
            //TODO: slide from&to bottom animation
            <SearchStationBlock style={[ styles.searchStationBlock, (selecting && { display: 'flex', bottom: 0 }) ]}
              onCancel={() => setSelecting('')}
              searchText={ useSelecting(selecting) }
              onSelect={ getSelectingFunc(selecting, (selected) => setDepartureForced(selected, arrival), (selected) => setArrivalForced(selected, departure)) }
            />
            : null
          }
          
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative'
  },
  destStationsBar: {
    width: vw(100),
    height: vw(13.5),
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#fcfcfc',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,

    elevation: 24,
  },
  searchStationBlock: {
    display: 'none',
    position: 'absolute',
    bottom: -vh(90),
    width: vw(100),
    height: vh(90),
    elevation: 24,
  }
})

export default MapScreen;