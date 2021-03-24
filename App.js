import React from 'react';
import { Provider as RouteProvider } from './src/context/RouteContext'

import MapScreen from './src/screens/MapScreen'

const App = MapScreen;

export default () => {
  return (
      <RouteProvider>
        <App />
      </RouteProvider>
  )
}