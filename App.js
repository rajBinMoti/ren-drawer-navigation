import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MainComponent from './components/MainComponent';

export default function App() {
  return (
    <SafeAreaProvider>
      <MainComponent />
    </SafeAreaProvider>
  );
}

