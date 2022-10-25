import React, { useState } from 'react';
import { ActivityIndicator, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import useGetWeather from './api';
import { styles } from './App.styles';
import { Sun, Cloud, Location, PartlyCloudy, Rain, Strom } from './assets/svgs';
import { DefaultLayout } from './layouts';
import colors from './styles/themes/light';
import { ConditionsEnum, TempEnum, WindDirEnum } from './types';
import { Toggler } from './ui';
import { onConvertCelsiusToFahrenheit } from './utils';

const weatherIcons = {
  clear: <Sun height={150} width={150} />,
  'partly-cloudy': <PartlyCloudy height={150} width={150} />,
  cloudy: <Sun height={150} width={150} />,
  overcast: <Cloud height={150} width={150} />,
  drizzle: <Rain height={150} width={150} />,
  'light-rain': <Rain height={150} width={150} />,
  rain: <Rain height={150} width={150} />,
  'moderate-rain': <Rain height={150} width={150} />,
  'heavy-rain': <Rain height={150} width={150} />,
  'continuous-heavy-rain': <Rain height={150} width={150} />,
  showers: <Rain height={150} width={150} />,
  'wet-snow': <Rain height={150} width={150} />,
  'light-snow': <Rain height={150} width={150} />,
  snow: <Rain height={150} width={150} />,
  'snow-showers': <Rain height={150} width={150} />,
  hail: <Strom height={150} width={150} />,
  thunderstorm: <Strom height={150} width={150} />,
  'thunderstorm-with-rain': <Strom height={150} width={150} />,
  'thunderstorm-with-hail': <Strom height={150} width={150} />,
};

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
                <View style={styles.locationRow}>
                  <Location />
                  <Text style={styles.text}>Мое местоположение</Text>
                </View>
              </View>
            </View>

            <View style={styles.tempBlock}>
              <View style={styles.tempRow}>
                {weatherIcons[data.fact.condition]}
                <Text style={styles.tempText}>{temperature}º</Text>
              </View>
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
