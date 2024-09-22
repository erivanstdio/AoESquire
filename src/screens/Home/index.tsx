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
      <Image source={require('../../assets/iconSplash.png')} style={styles.image} />
      <View style={styles.bottomBox}>
        <Text style={styles.upperText} >welcome to</Text>
        <Text style={styles.lowerText} >AOE SQUIRE</Text>
        <Button onPress={handleNavigation} />
      </View>
    </View>
  );
}