import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { GarageScreen } from './src/Screens/GarageScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <GarageScreen></GarageScreen>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
