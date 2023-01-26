import React, { useContext } from 'react';
import { VStack, Text, Image, StatusBar, Button, Flex, Link, HStack } from 'native-base';
import Google from '../../assets/LoginGoogle.svg'
import Face from '../../assets/LoginFaceBook.svg'
import { useNavigation } from '@react-navigation/native'
import { AuthContext } from '../../contexts/auth';

import * as AuthSession from 'expo-auth-session';

type AuthResponse = {
  params: {
    acess_token: string
  },
  type: string
}

function Login() {

  const Navigation = useNavigation()
  const { setItem } = useContext(AuthContext)

  function handleNavigate() {
    Navigation.navigate('OnBoard')
  }

  async function handleLoginFacebook() {
    try {
      const CLIENT_ID = '1627062637706762';
      const REDIRECT_URI = 'https://auth.expo.io/@luishgfarias/smart-food-mobile';
      const SCOPE = encodeURI("public_profile email");
      const RESPONSE_TYPE = 'token';

      const authUrl = `https://www.facebook.com/v15.0/dialog/oauth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}`;

      const { type, params } = await AuthSession.startAsync({ authUrl }) as AuthResponse;

      if (type === 'success') {
        setItem(params)
        Navigation.navigate('OnBoard')
      } 
    } catch (error) {
      console.log(error);
      alert('Algo deu errado, Tente novamente mais tarde')
    }
  }

  async function handleLoginGoogle() {
    try {
      const CLIENT_ID = '368934800026-4bqjs5e3vo910vjg8t6detmi1ru3r5nu.apps.googleusercontent.com';
      const REDIRECT_URI = 'https://auth.expo.io/@luishgfarias/smart-food-mobile';
      const SCOPE = encodeURI("profile email");
      const RESPONSE_TYPE = 'token';

      const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;

      const { type, params } = await AuthSession.startAsync({ authUrl }) as AuthResponse;

      if (type === 'success') {
        setItem(params)
        Navigation.navigate('OnBoard')
      }

    } catch (error) {
      console.log(error);
      alert('Algo deu errado, Tente novamente mais tarde')
    }
  }

  return (
    <VStack flex={1} alignItems='center' bg="gray.100">
      <Image source={require('../../assets/Login.png')} alt='Food Image' width='100%' height='65%' top={0} />
      <VStack bg="primary.700" bottom={0} padding={4} paddingTop={12}
        height="42.5%" width="100%" position="absolute" borderTopRadius="3xl" justifyContent='space-between'
      >
        <VStack>
          <Button w='full' bg="gray.100" padding={4} shadow={5} mb={4} onPress={handleLoginGoogle}>
            <HStack w='90%' justifyContent='center'>
              <Google />
              <Text ml={8} fontSize={20}>Entrar com Google</Text>
            </HStack>
          </Button>
          <Button w='full' bg="gray.100" padding={4} shadow={5} mb={4} onPress={handleLoginFacebook}>
            <HStack w='90%' justifyContent='center'>
              <Face />
              <Text ml={8} fontSize={20}>Entrar com Facebook</Text>
            </HStack>
          </Button>
          <Link justifyContent='center'>
            <Text color='gray.100' fontSize={16}>Entrar com email</Text>
          </Link>
        </VStack>
        <Button justifyContent='center' mb={2} p={0} style={{
                    backgroundColor: '#00000000'
                }}
                    onPress={() => Navigation.navigate('Register')}>
                    <Text fontSize={16} color='gray.100'>
                        Criar conta
                    </Text>
                </Button>
      </VStack>
      <StatusBar
        barStyle='light-content'
        backgroundColor='black'
      />
    </VStack>
  );
}
export default Login