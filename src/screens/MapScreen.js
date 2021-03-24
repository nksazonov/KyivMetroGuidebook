import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import ZoomableMap from '../components/ZoomableMap'
import { vw, vh } from 'react-native-css-vh-vw'
import DestStationsBar from '../components/DestStationsBar'

const MapScreen = () => {
    return (
        <View style={styles.container}>
          <ZoomableMap />
          <DestStationsBar style={ styles.destStationsBar } />
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  destStationsBar: {
    width: vw(100),
    height: vw(15),
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#fcfcfc',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,

    elevation: 24,
  }
})

export default MapScreen;