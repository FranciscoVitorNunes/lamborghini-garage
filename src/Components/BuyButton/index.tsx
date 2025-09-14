import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { AntDesign} from '@expo/vector-icons';
import { styles } from './style';

export function BuyButton() {
  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.button}>
            <AntDesign name="shopping-cart" size={24} color="black" style={styles.icon}/>
            <Text style={styles.ButtonText }>Buy Now</Text>
        </TouchableOpacity>
    </View>
  );
}