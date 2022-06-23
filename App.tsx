
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import BluetoothList from './src/bluetooth/containers/bluetooth-list';

const App = () => {
  return (
    <SafeAreaView>
      <BluetoothList />
    </SafeAreaView>
  )
}
export default App;
