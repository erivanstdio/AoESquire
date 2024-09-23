import React from 'react';
import { Image, Text, View } from 'react-native';

type Props = {
  item: {
    flag: any,
    name: string,
  }
}

export const CivItem: React.FC<Props> = ({ item }) => {
  return (
    <View style={{ justifyContent: 'center',
      alignItems: 'center', margin: 20}}>
      <Image source={item.flag} style={{ width: 120, height: 80 }} />
      <Text style={{color: 'white'}}>{item.name}</Text>
    </View>
  );
}