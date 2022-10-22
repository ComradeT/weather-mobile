import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { DefaultLayout } from './src/layouts';
import colors from './src/styles/themes/light';
import { TempEnum } from './src/types';

import { Toggler } from './src/ui';

const App = () => {
  const [activeTab, setActiveTab] = useState<TempEnum>(TempEnum.CEL);

  const onActiveСelsius = () => setActiveTab(TempEnum.CEL);
  const onActiveFahrenheit = () => setActiveTab(TempEnum.FAHR);

  return (
    <SafeAreaProvider>
      <DefaultLayout>
        <View style={styles.topRow}>
          <Text style={styles.cityTitle}>Омск</Text>
          <Toggler
            activeTab={activeTab}
            onActiveСelsius={onActiveСelsius}
            onActiveFahrenheit={onActiveFahrenheit}
          />
        </View>
      </DefaultLayout>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cityTitle: {
    fontSize: 30,
    fontWeight: '600',
    color: colors.white,
  },
});

export default App;
