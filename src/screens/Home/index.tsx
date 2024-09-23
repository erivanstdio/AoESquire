import React from 'react';
import { Image, Text, View } from 'react-native';
import { styles } from './styles';
import { Button } from '../../components/Button';
import { useNavigation } from '@react-navigation/native';

export const Home: React.FC = () => {

  const { navigate } = useNavigation()

  const handleNavigation = () => {
    //@ts-ignore
    navigate('Civilizations')
  }

  return (
    <View style={styles.container} >
      <Image source={require('../../assets/iconAoE4.webp')} style={styles.image} />
      <View style={styles.bottomBox}>
        <Text style={styles.upperText} >welcome to</Text>
        <Text style={styles.lowerText} >AoE SQUIRE</Text>
        <Button title="CONTINUE" onPress={handleNavigation} />
      </View>
    </View>
  );
}