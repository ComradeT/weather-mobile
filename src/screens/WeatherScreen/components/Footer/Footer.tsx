import React, { FC } from 'react';
import { Text, View } from 'react-native';
import { WindDirEnum } from 'types';

import { styles } from './footer-screen.styles';

type FooterProps = {
  windSpeed: number;
  windDir: WindDirEnum;
  pressure: number;
  humidity: number;
  precStrength: number;
};

const Footer: FC<FooterProps> = ({ humidity, precStrength, pressure, windDir, windSpeed }) => {
  return (
    <View style={styles.footer}>
      <View style={styles.parameterItem}>
        <Text style={styles.text}>Ветер</Text>
        <Text style={styles.contentDesc}>
          {windSpeed} м/c, {WindDirEnum[windDir]}
        </Text>
      </View>
      <View style={styles.parameterItem}>
        <Text style={styles.text}>Давление</Text>
        <Text style={styles.contentDesc}>{pressure} мм рт. ст.</Text>
      </View>
      <View style={styles.parameterItem}>
        <Text style={styles.text}>Влажность</Text>
        <Text style={styles.contentDesc}>{humidity}%</Text>
      </View>
      <View style={styles.parameterItem}>
        <Text style={styles.text}>Вероятность дождя</Text>
        <Text style={styles.contentDesc}>{precStrength * 100}%</Text>
      </View>
    </View>
  );
};

export default Footer;
