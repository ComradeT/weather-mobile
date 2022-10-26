import React, { FC } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { Location } from 'assets/svgs';
import { Toggler } from 'ui';
import { styles } from './header-screen.styles';
import { TempEnum } from 'types';

type HeaderProps = {
  activeTab: TempEnum;
  onActiveСelsius: () => void;
  onActiveFahrenheit: () => void;
  onToggleInput: () => void;
  sityName: string;
};

const Header: FC<HeaderProps> = ({
  activeTab,
  onActiveFahrenheit,
  onActiveСelsius,
  onToggleInput,
  sityName,
}) => {
  return (
    <View style={styles.header}>
      <View style={styles.topRow}>
        <Text style={styles.cityTitle}>{sityName}</Text>
        <Toggler
          activeTab={activeTab}
          onActiveСelsius={onActiveСelsius}
          onActiveFahrenheit={onActiveFahrenheit}
        />
      </View>
      <View style={styles.topRow}>
        <TouchableOpacity onPress={onToggleInput}>
          <Text style={styles.text}>Сменить город</Text>
        </TouchableOpacity>
        <View style={styles.locationRow}>
          <Location />
          <Text style={styles.text}>Мое местоположение</Text>
        </View>
      </View>
    </View>
  );
};

export default Header;
