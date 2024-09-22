import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StackRoutes } from './stack.routes';

export const Routes: React.FC = () => {
  return <NavigationContainer children={<StackRoutes/>} />;
}
