import React, { useState } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';

import { Cloud, PartlyCloudy, Rain, Strom, Sun } from 'assets/svgs';
import { useGetWeather } from 'hooks';
import { DefaultLayout } from 'layouts';
import { colors } from 'styles';
import { ConditionsEnum, TempEnum } from 'types';
import { Input } from 'ui';
import { onConvertCelsiusToFahrenheit } from 'utils';
import { Footer, Header } from './components';
import { styles } from './weather-screen.styles';

const weatherIcons = {
  clear: <Sun height={150} width={150} />,
  'partly-cloudy': <PartlyCloudy height={150} width={150} />,
  cloudy: <PartlyCloudy height={150} width={150} />,
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

const WeatherScreen = () => {
  const [activeTab, setActiveTab] = useState<TempEnum>(TempEnum.CEL);
  const [cityName, setCityName] = useState<string | null>(null);
  const [isEndEdditing, setIsEndEdditing] = useState(false);
  const [isActiveInput, setIsActiveInput] = useState(false);

  const onActiveСelsius = () => setActiveTab(TempEnum.CEL);
  const onActiveFahrenheit = () => setActiveTab(TempEnum.FAHR);

  const { data, isLoading } = useGetWeather(cityName, isEndEdditing);

  const temperature =
    activeTab === TempEnum.CEL ? data?.fact.temp : onConvertCelsiusToFahrenheit(data?.fact.temp);

  const onChangeText = (text: string) => {
    setIsEndEdditing(false);
    setCityName(text);
  };
  const onSetIsEndEdditing = () => setIsEndEdditing(true);

  const onShowInput = () => setIsActiveInput(true);

  const onHideInput = () => {
    setIsEndEdditing(true);
    setIsActiveInput(false);
  };

  return (
    <DefaultLayout>
      {!data || isLoading ? (
        <View style={styles.loading}>
          <ActivityIndicator size="large" color={colors.white} />
        </View>
      ) : (
        <View style={styles.root}>
          {isActiveInput ? (
            <Input
              onChangeText={onChangeText}
              onSetIsEndEdditing={onSetIsEndEdditing}
              onHideInput={onHideInput}
            />
          ) : (
            <Header
              activeTab={activeTab}
              onActiveFahrenheit={onActiveFahrenheit}
              onActiveСelsius={onActiveСelsius}
              onShowInput={onShowInput}
              sityName={data.geo_object.locality ? data.geo_object.locality.name : 'Неопределено'}
            />
          )}

          <View style={styles.tempBlock}>
            <View style={styles.tempRow}>
              {weatherIcons[data.fact.condition]}
              <Text style={styles.tempText}>{temperature}º</Text>
            </View>
            <Text style={styles.contentDesc}>{ConditionsEnum[data.fact.condition]}</Text>
          </View>

          <Footer
            humidity={data.fact.humidity}
            precStrength={data.fact.prec_strength}
            pressure={data.fact.pressure_mm}
            windDir={data.fact.wind_dir}
            windSpeed={data.fact.wind_speed}
          />
        </View>
      )}
    </DefaultLayout>
  );
};

export default WeatherScreen;
