import React from 'react';
import { FlatList, View } from 'react-native';
import { styles } from './styles';
import data from '../../helpers/civs';
import { CivItem } from '../../components/CivItem';

export const Civilizations: React.FC = () => {
  return (
    <View style={styles.container}>
      <FlatList
        style={{ flex: 1, width: '100%', padding: 10}}
        data={data}
        contentContainerStyle={{ alignItems: 'center', justifyContent: 'space-between' }}
        numColumns={2}
        renderItem={({ item }) => (
          <CivItem item={item} />
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
}