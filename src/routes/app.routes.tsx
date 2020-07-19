import React from 'react';
import {
  createStackNavigator,
  HeaderBackground,
} from '@react-navigation/stack';

import { Image } from 'react-native';
import styled from 'styled-components/native';

import FeatherIcon from 'react-native-vector-icons/Feather';
import Dashboard from '../pages/Dashboard';
import Cart from '../pages/Cart';

import Logo from '../assets/images/logo.png';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <App.Navigator
    screenOptions={{
      headerShown: true,
      cardStyle: { backgroundColor: '#EBEEF8' },
      headerTitleAlign: 'center',
    }}
    initialRouteName="Dashboard"
  >
    <App.Screen
      name="Dashboard"
      component={Dashboard}
      options={{
        headerTitle: () => <Image source={Logo} />,
        headerStyle: {
          backgroundColor: '#FFF',
          borderBottomLeftRadius: 15,
          borderBottomRightRadius: 15,
        },
      }}
    />

    <App.Screen
      name="Cart"
      component={Cart}
      options={{
        headerShown: true,
        headerTitle: () => <Image source={Logo} />,

        headerBackTitleVisible: false,
        headerBackImage: () => <FeatherIcon name="chevron-left" size={30} />,

        headerStyle: {
          backgroundColor: '#FFF',
          borderBottomLeftRadius: 15,
          borderBottomRightRadius: 15,
        },
      }}
    />
  </App.Navigator>
);

export default AppRoutes;
