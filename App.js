import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider as RouteProvider } from './src/context/RouteContext'

import MapScreen from './src/screens/MapScreen'

const App = MapScreen;

export default () => {
  return (
    <SafeAreaProvider>
      <RouteProvider>
        <App />
      </RouteProvider>
    </SafeAreaProvider>
  )
}