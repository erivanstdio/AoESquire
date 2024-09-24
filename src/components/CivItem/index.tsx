import React from 'react';
import { Image, Text, View } from 'react-native';
import { styles } from './styles';

type Props = {
  item: {
    flag: any,
    name: string,
  }
}

export const CivItem: React.FC<Props> = ({ item }) => {
  return (
    <View style={styles.itemContainer}>
      <Image source={item.flag} style={styles.image} />
      <Text style={styles.itemText}>{item.name}</Text>
    </View>
  );
}