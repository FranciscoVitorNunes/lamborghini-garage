import React, {useState, useEffect} from 'react';
import { View, Image, Text, Button } from 'react-native';

import { styles } from './styles';
import { Divider } from '../Divider';
import { CARS_ASSETS_BASE_URL } from '../../constants/car';
import { BuyButton } from '../BuyButton';
import { loadCarData } from './actions';
import { carModel } from './props';
const logo = require('./../../../assets/logo.png');

export function CardView() {

    const id = 1;
    const [carData, setCarData] = useState<carModel | null>(null);

    useEffect(()=>{(async()=>{
        await loadCarData(id , setCarData);}
    )();
    },[])

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
    const renderPriceControlls = () =>(
        <View style={styles.priceContainer}>
            <Button title='<' color="#01A6B3" onPress={()=>{}}/>
            <Text style={styles.price}>$ 500,000</Text>
            <Button title='>'/>
        </View>
    )

  return (
    <View style={styles.imageContainer}>
        <View style={styles.logoContainer}>
        <Image source={logo} style={styles.imageLogo}></Image>
        </View>
        <Divider></Divider>
        {renderCarDetails()}
        {renderCarImage()}
        <Divider></Divider>
        <BuyButton></BuyButton>
        {renderPriceControlls()}

    </View>
  );
}