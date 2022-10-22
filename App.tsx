import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
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
        <View style={styles.root}>
          <View style={styles.header}>
            <View style={styles.topRow}>
              <Text style={styles.cityTitle}>Омск</Text>
              <Toggler
                activeTab={activeTab}
                onActiveСelsius={onActiveСelsius}
                onActiveFahrenheit={onActiveFahrenheit}
              />
            </View>
            <View style={styles.topRow}>
              <TouchableOpacity>
                <Text style={styles.text}>Сменить город</Text>
              </TouchableOpacity>
              <Text style={styles.text}>Мое местоположение</Text>
            </View>
          </View>

          <View>
            <Text style={styles.contentText}>14º</Text>
            <Text style={styles.contentDesc}>Дождь</Text>
          </View>

          <View style={styles.footer}>
            <View style={styles.parameterItem}>
              <Text style={styles.text}>Ветер</Text>
              <Text style={styles.contentDesc}>5 м/c, западный</Text>
            </View>
            <View style={styles.parameterItem}>
              <Text style={styles.text}>Давление</Text>
              <Text style={styles.contentDesc}>752 мм рт. ст.</Text>
            </View>
            <View style={styles.parameterItem}>
              <Text style={styles.text}>Влажность</Text>
              <Text style={styles.contentDesc}>60%</Text>
            </View>
            <View style={styles.parameterItem}>
              <Text style={styles.text}>Вероятность дождя</Text>
              <Text style={styles.contentDesc}>10%</Text>
            </View>
          </View>
        </View>
      </DefaultLayout>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  header: {
    width: '100%',
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 18,
  },
  cityTitle: {
    fontSize: 30,
    fontWeight: '600',
    color: colors.white,
  },
  text: {
    fontSize: 15,
    color: colors.whiteOpacity[60],
  },
  contentText: {
    fontSize: 100,
    color: colors.white,
  },
  contentDesc: {
    fontSize: 15,
    color: colors.white,
  },
  footer: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  parameterItem: {
    width: '50%',
    marginBottom: 35,
  },
});

export default App;
