import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { Fragment } from 'react';
import { StatusBar, View } from 'react-native';
import { light } from '../themes/colors';
import { Home } from '../screens/Home';
import Civilizations from '../screens/Civilizations';

const { background } = light

const Stack = createNativeStackNavigator()

export const StackRoutes: React.FC = () => {
    return <>
        <StatusBar backgroundColor={background} />
        <Stack.Navigator screenOptions={{headerShown: false, navigationBarColor: background}}>
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="Civilizations" component={Civilizations}/>
        </Stack.Navigator>
    </>;
}
