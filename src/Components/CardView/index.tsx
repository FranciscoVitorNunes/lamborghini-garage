import React, {useState, useEffect} from 'react';
import { View, Image, Text, Button } from 'react-native';

import { styles } from './styles';
import { Divider } from '../Divider';
import { CARS_ASSETS_BASE_URL } from '../../constants/car';
import { BuyButton } from '../BuyButton';
import { handleNextCar, handlePreviousCar, loadCarData } from './actions';
import { carModel } from './props';
const logo = require('./../../../assets/logo.png');

export function CardView() {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const id = 1;
    const [carData, setCarData] = useState<carModel | null>(null);

    useEffect(() => {
    (async () => {
        try {
        await loadCarData(id, setCarData);
        } catch (err) {
        setError("Erro ao carregar os dados do carro");
        } finally {
        setLoading(false);
        }
    })();
    }, []);

    const renderCarDetails = ()=>(
        <View>
            <Text style={styles.carBrand}>Lamborghini</Text>
            <Text style={styles.carName}>{carData?.carName}</Text>
        </View>
    )
    const renderCarImage = () => (
        <Image 
        source={{uri: `${CARS_ASSETS_BASE_URL}${carData?.id}.png`}}
        style={styles.carImage}></Image>
    )
    const renderPriceControlls = () =>(
        <View style={styles.priceContainer}>
            <Button title='<' color="#8d8d8dff" onPress={()=>handlePreviousCar(carData, setCarData)}/>
            <Button title='>' color="#8d8d8dff" onPress={()=>handleNextCar(carData, setCarData)}/>
        </View>
    )

  return (
    <View style={styles.imageContainer}>
        <View style={styles.container}>
        <Image source={logo} style={styles.imageLogo}></Image>
        </View>
        <Divider></Divider>
        <View style={styles.container}>
            {renderCarImage()}
            {renderCarDetails()}
        </View>
        <Divider></Divider>
        <View style={styles.container}>
            <Text style={styles.price}>{carData?.price}</Text>
            <BuyButton></BuyButton>
            {renderPriceControlls()}
        </View>

    </View>
  );
}