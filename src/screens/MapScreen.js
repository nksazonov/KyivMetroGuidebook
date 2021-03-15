import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import ZoomableMap from '../components/ZoomableMap'

export default class MapScreen extends Component {

  render() {
    return (
        <View>
          <ZoomableMap />
        </View>
    );
  }
}
