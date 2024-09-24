import React from 'react';
import { FlatList, Text, TextInput, View } from 'react-native';
import { styles } from './styles';
import data from '../../helpers/civs';
import { CivItem } from '../../components/CivItem';

export const Civilizations: React.FC = () => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder='Search for a player...'
        placeholderTextColor={'white'}
        style={styles.textInput} />
      <View style={styles.titleBox}>
        <Text style={styles.title}>Civilizations:</Text>
      </View>
      <FlatList
        style={styles.flatList}
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