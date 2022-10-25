import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { WeatherScreen } from './screens';

const App = () => {
  return (
    <SafeAreaProvider>
      <WeatherScreen />
    </SafeAreaProvider>
  );
};

export default App;
