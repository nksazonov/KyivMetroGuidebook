import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import MapScreen from './src/screens/MapScreen'

const App = MapScreen;

export default () => {
  return (
    <SafeAreaProvider>
      <App />
    </SafeAreaProvider>
  )
}