import React, { Component } from 'react'
import { View, StyleSheet, Dimensions } from 'react-native'
import Svg, { G } from 'react-native-svg';
import ZoomableSvg from 'zoomable-svg';

import SVGMap from './map/Map'

const { width, height } = Dimensions.get('window');

class SvgRoot extends Component {
  render() {
    const { transform } = this.props;
    return (
      <Svg width={width} height={height}>
        <G transform={transform}>
          <SVGMap />
        </G>
      </Svg>
    );
  }
}

export default class Map extends Component {
  state = {
    type: 1,
    constrain: true,
    constraints: {
      combine: 'dynamic',
			scaleExtent: [1, 4],
      translateExtent: [
				[0, 700],			//[minX - fx, minY - fy]
				[1333, 700],	//[maxX + fx, maxY + fy]
			],
    },
  };

  render() {
    const { constrain, constraints } = this.state;
    return (
        <View style={styles.container}>
          <ZoomableSvg
            align="mid"
            vbWidth={1333}
            vbHeight={1333}
            width={width}
            height={height}
            doubleTapThreshold={300}
            doubleTapZoom={4}
            meetOrSlice="meet"
            svgRoot={SvgRoot}
            childProps={this.childProps}
            constrain={constrain ? constraints : null}
          />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ecf0f1',
	},
});