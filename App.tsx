import React from 'react';
import { StatusBar } from 'react-native';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import { ThemeProvider } from 'styled-components';
import theme from './src/global/styles/theme';
import AppLoading from 'expo-app-loading'
import { useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_700Bold } from '@expo-google-fonts/poppins';
import { Routes } from './src/routes/index';
import { AuthProvider, useAuth } from './src/hooks/auth';

import { SignIn } from './src/screens/SignIn';

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular, 
    Poppins_500Medium, 
    Poppins_700Bold
  });

  const { userStoragedLoading } = useAuth();

  if(!fontsLoaded || userStoragedLoading){
    return <AppLoading />
  }

  return (
    <ThemeProvider theme={theme}>
        <StatusBar barStyle='light-content'/>
          <AuthProvider>
            <Routes />
          </AuthProvider>
    </ThemeProvider>
  )
}

