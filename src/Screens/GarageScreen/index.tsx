import React from 'react';
import { View } from 'react-native';

import { styles } from './styles';
import { CardView } from '../../Components/CardView';

export function GarageScreen() {
  return (
    <View style={styles.container}>
      <CardView></CardView>
    </View>
  );
}