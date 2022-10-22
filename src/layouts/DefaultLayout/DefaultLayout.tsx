import React, { FC } from 'react';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import styles from './styles';

type DefaultLayoutProps = {
  children: React.ReactNode;
};

const DefaultLayout: FC<DefaultLayoutProps> = ({ children }) => {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.root, { paddingTop: insets.top || 20, paddingBottom: insets.bottom || 20 }]}>
      {children}
    </View>
  );
};

export default DefaultLayout;
