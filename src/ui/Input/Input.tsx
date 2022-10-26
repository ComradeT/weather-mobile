import React, { FC } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

import styles from './Input.styles';

type TogglerProps = {
  onChangeText: (text: string) => void;
  onSetIsEndEdditing: () => void;
  onToggleInput: () => void;
};

const Input: FC<TogglerProps> = ({ onChangeText, onSetIsEndEdditing, onToggleInput }) => {
  return (
    <View style={styles.root}>
      <TextInput
        onEndEditing={onSetIsEndEdditing}
        onChangeText={onChangeText}
        style={styles.input}
        placeholder="Введите название города"
      />
      <TouchableOpacity onPress={onToggleInput} style={styles.button}>
        <Text style={styles.text}>OK</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Input;
