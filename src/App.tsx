import 'react-native-gesture-handler';
import React from 'react';
import { View, StatusBar } from 'react-native';

import Routes from './routes';

import AppProvider from './hooks';

const App: React.FC = () => (
  <View style={{ flex: 1, backgroundColor: '#312e38' }}>
    <AppProvider>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <Routes />
    </AppProvider>
  </View>
);

export default App;
