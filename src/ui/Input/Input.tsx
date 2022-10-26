import React, { FC } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

import styles from './Input.styles';

type TogglerProps = {
  onChangeText: (text: string) => void;
  onSetIsEndEdditing: () => void;
  onHideInput: () => void;
};

const Input: FC<TogglerProps> = ({ onChangeText, onSetIsEndEdditing, onHideInput }) => {
  return (
    <View style={styles.root}>
      <TextInput
        onEndEditing={onSetIsEndEdditing}
        onChangeText={onChangeText}
        onSubmitEditing={onHideInput}
        style={styles.input}
        placeholder="Введите название города"
      />
      <TouchableOpacity onPress={onHideInput} style={styles.button}>
        <Text style={styles.text}>OK</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Input;
