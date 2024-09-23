import React from 'react';
import { FlatList, Text, TextInput, View } from 'react-native';
import { styles } from './styles';
import data from '../../helpers/civs';
import { CivItem } from '../../components/CivItem';

export const Civilizations: React.FC = () => {
  return (
    <View style={styles.container}>
      <TextInput  placeholder='Search for a player...' placeholderTextColor={'white'} style={{borderWidth: .3, borderColor: 'white', borderRadius: 10, paddingHorizontal: 20, width: '80%', marginTop: 20}}></TextInput>
      <View style={styles.titleBox}>
        <Text style={styles.title}>Civilizations:</Text>
      </View>
      <FlatList
        style={{ flex: 1, width: '100%', padding: 10 }}
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