import React from 'react';
import { View, Image } from 'react-native';

import { styles } from './styles';
import { Divider } from '../Divider';
const logo = require('./../../../assets/logo.png');

export function CardView() {
  return (
    <View style={styles.imageContainer}>
        <View style={styles.logoContainer}>
        <Image source={logo} style={styles.imageLogo}></Image>
        </View>
        <Divider></Divider>
    </View>
  );
}