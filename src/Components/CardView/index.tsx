import React from 'react';
import { View, Image, Text } from 'react-native';

import { styles } from './styles';
import { Divider } from '../Divider';
import { CARS_ASSETS_BASE_URL } from '../../constants/car';
const logo = require('./../../../assets/logo.png');

export function CardView() {

    const renderCarDetails = ()=>(
        <View>
            <Text style={styles.carBrand}>Lamborghini</Text>
            <Text style={styles.carName}>MODEL</Text>
        </View>
    )
    const renderCarImage = () => (
        <Image 
        source={{uri: `${CARS_ASSETS_BASE_URL}/car.png`}}
        style={styles.carImage}></Image>
    )

  return (
    <View style={styles.imageContainer}>
        <View style={styles.logoContainer}>
        <Image source={logo} style={styles.imageLogo}></Image>
        </View>
        <Divider></Divider>
        {renderCarDetails()}
        {renderCarImage()}
    </View>
  );
}