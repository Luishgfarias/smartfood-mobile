import React, { useEffect } from 'react';
import { NativeBaseProvider } from "native-base";
import SplashPage from './src/screens/Splash';
import Login from './src/screens/Login';
import OnBoard from './src/screens/OnBoard';
import { useFonts, Ubuntu_400Regular, JosefinSans_400Regular, Ubuntu_700Bold, JosefinSans_700Bold } from '@expo-google-fonts/dev';
import { THEME } from './src/styles/theme';
import { Routes } from './src/routes';

export default function App() {

  const [fontsLoaded] = useFonts({ Ubuntu_400Regular, JosefinSans_400Regular, Ubuntu_700Bold, JosefinSans_700Bold })


  return (
    <NativeBaseProvider theme={THEME}>
      {fontsLoaded ? <Routes /> : <SplashPage />}
    </NativeBaseProvider>
  );
}
