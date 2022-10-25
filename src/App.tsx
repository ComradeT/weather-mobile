import React, { useState } from 'react';
import { ActivityIndicator, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import useGetWeather from './api';
import { styles } from './App.styles';
import { DefaultLayout } from './layouts';
import colors from './styles/themes/light';
import { ConditionsEnum, TempEnum, WindDirEnum } from './types';
import { Toggler } from './ui';
import { onConvertCelsiusToFahrenheit } from './utils';

const App = () => {
  const [activeTab, setActiveTab] = useState<TempEnum>(TempEnum.CEL);

  const onActiveСelsius = () => setActiveTab(TempEnum.CEL);
  const onActiveFahrenheit = () => setActiveTab(TempEnum.FAHR);

  const { data } = useGetWeather();

  const temperature =
    activeTab === TempEnum.CEL ? data?.fact.temp : onConvertCelsiusToFahrenheit(data?.fact.temp);

  return (
    <SafeAreaProvider>
      <DefaultLayout>
        {!data ? (
          <View style={styles.loading}>
            <ActivityIndicator size="large" color={colors.white} />
          </View>
        ) : (
          <View style={styles.root}>
            <View style={styles.header}>
              <View style={styles.topRow}>
                <Text style={styles.cityTitle}>{data.geo_object.locality.name}</Text>
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

            <View style={styles.tempBlock}>
              <Text style={styles.tempText}>{temperature}º</Text>
              <Text style={styles.contentDesc}>{ConditionsEnum[data.fact.condition]}</Text>
            </View>

            <View style={styles.footer}>
              <View style={styles.parameterItem}>
                <Text style={styles.text}>Ветер</Text>
                <Text style={styles.contentDesc}>
                  {data.fact.wind_speed} м/c, {WindDirEnum[data.fact.wind_dir]}
                </Text>
              </View>
              <View style={styles.parameterItem}>
                <Text style={styles.text}>Давление</Text>
                <Text style={styles.contentDesc}>{data.fact.pressure_mm} мм рт. ст.</Text>
              </View>
              <View style={styles.parameterItem}>
                <Text style={styles.text}>Влажность</Text>
                <Text style={styles.contentDesc}>{data.fact.humidity}%</Text>
              </View>
              <View style={styles.parameterItem}>
                <Text style={styles.text}>Вероятность дождя</Text>
                <Text style={styles.contentDesc}>{data.fact.prec_strength! * 100}%</Text>
              </View>
            </View>
          </View>
        )}
      </DefaultLayout>
    </SafeAreaProvider>
  );
};

export default App;
