import React from 'react';
import { View } from 'react-native';

import { styles } from './styles';

export function Divider() {
  return (
    <View style={styles.DividerContainer}>
        <View  style={styles.Divider}></View>
    </View>
  );
}