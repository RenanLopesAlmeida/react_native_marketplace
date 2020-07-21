import 'react-native-gesture-handler';
import React from 'react';
import { View, StatusBar } from 'react-native';

import Routes from './routes';

import AppProvider from './hooks';

const App: React.FC = () => (
  <View style={{ flex: 1, backgroundColor: '#E5E5E5' }}>
    <AppProvider>
      <StatusBar barStyle="dark-content" backgroundColor="#f7f7f7" />
      <Routes />
    </AppProvider>
  </View>
);

export default App;
