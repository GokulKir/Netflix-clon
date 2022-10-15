import React  from 'react';
import { NavigationContainer } from '@react-navigation/native';
import App from './App';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as StoreProvider } from 'react-redux';

import store from './Redux/Store/store';


const Stack = createStackNavigator();

export default function Main() {
  return (
    <StoreProvider store={store}>
      <App />
    </StoreProvider>
  )
}