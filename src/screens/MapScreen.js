import React, { Component } from 'react';
import { View, StyleSheet, Dimensions, Animated } from 'react-native';
import Svg, { G, Text, Path, Rect } from 'react-native-svg';

import Map from '../svg/map'

import ZoomableSvg from 'zoomable-svg';

const { width, height } = Dimensions.get('window');

class SvgRoot extends Component {
  state = {
    color: 'red',
    initAnim: new Animated.Value(0),
  };

  render() {
    const { transform } = this.props;
    return (
      <Svg width={width} height={height}>
        <G transform={transform}>
					
					{Map}
					
        </G>
      </Svg>
    );
  }
}

const constraintCombinations = [
  'none',
  'dynamic',
  'static',
  'union',
  'intersect',
];

export default class MapScreen extends Component {
  state = {
    type: 1,
    constrain: true,
    constraints: {
      combine: 'dynamic',
      scaleExtent: [1, 4],
      translateExtent: [[0, 0], [1333, 1333]],
    },
  };

  onToggle = () =>
    this.setState(({ type, constraints }) => {
      const nextType = (type + 1) % constraintCombinations.length;
      return {
        type: nextType,
        constrain: nextType !== 0,
        constraints: {
          ...constraints,
          combine: constraintCombinations[nextType],
        },
      };
    });

  childProps = { onToggle: this.onToggle };

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

// const ZOOM_MULT = 1;

// const MapScreen = ()=> {
//   return (
//     <SafeAreaView style={{ flex: 1 }}>
//       <Svg viewBox={`0 0 ${1333.3333 / ZOOM_MULT} ${1333.3333 / ZOOM_MULT}`}>
        
					
//       </Svg>
//     </SafeAreaView>
//   )
// }

// const styles = StyleSheet.create({
//   map: {
//     backgroundColor: "green",
//   },
// })

// export default MapScreen;