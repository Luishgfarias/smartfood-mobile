import React from 'react';
import { StatusBar, VStack } from 'native-base';
import Logo from '../../assets/LogoSplash.svg'

function Home() {
    return (
        <VStack flex={1} alignItems='center' bg="gray.100" justifyContent="center">
          <Logo />
          <StatusBar
          barStyle='dark-content'
          backgroundColor='transparent'
          translucent
          />
        </VStack>
      );
    }
    export default Home