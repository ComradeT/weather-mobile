import React, { FC, useCallback } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { colors } from '../../styles';
import { TempEnum } from '../../types';

import styles from './Toggler.styles';

type TogglerProps = {
  onActiveСelsius: () => void;
  onActiveFahrenheit: () => void;
  activeTab: TempEnum;
};

const Toggler: FC<TogglerProps> = ({ onActiveFahrenheit, onActiveСelsius, activeTab }) => {
  const getBackgroundColor = useCallback(
    (buttonType: TempEnum) => (activeTab === buttonType ? colors.whiteOpacity[40] : colors.transparent),
    [activeTab],
  );
  const getColor = useCallback(
    (buttonType: TempEnum) => (activeTab === buttonType ? colors.white : colors.whiteOpacity[40]),
    [activeTab],
  );
  return (
    <View style={styles.root}>
      <TouchableOpacity
        onPress={onActiveСelsius}
        style={[styles.button, styles.celButton, { backgroundColor: getBackgroundColor(TempEnum.CEL) }]}>
        <Text style={[styles.text, { color: getColor(TempEnum.CEL) }]}>C</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={onActiveFahrenheit}
        style={[styles.button, styles.fahrButton, { backgroundColor: getBackgroundColor(TempEnum.FAHR) }]}>
        <Text style={[styles.text, { color: getColor(TempEnum.FAHR) }]}>F</Text>
      </TouchableOpacity>

      <View style={styles.degree}>
        <Text style={styles.degreeText}>º</Text>
      </View>
    </View>
  );
};

export default Toggler;
