import React from 'react';
import { VStack, Text, Image, StatusBar, Button, Flex, Link, HStack } from 'native-base';
import Google from '../../assets/LoginGoogle.svg'
import Face from '../../assets/LoginFaceBook.svg'
import { useNavigation } from '@react-navigation/native'

function Login() {
  const Navigation = useNavigation()
  function handleNavigate() {
    Navigation.navigate('OnBoard')
  }
  return (
    <VStack flex={1} alignItems='center' bg="gray.100">
      <Image source={require('../../assets/Login.png')} alt='Food Image' width='100%' height='65%' top={0} />
      <VStack bg="primary.700" bottom={0} padding={4} paddingTop={12}
        height="42.5%" width="100%" position="absolute" borderTopRadius="3xl" justifyContent='space-between'
      >
        <VStack>
          <Button w='full'  bg="gray.100" padding={4} shadow={5} mb={4} onPress={() => { handleNavigate() }}>
            <HStack w='90%' justifyContent='center'>
              <Google />
              <Text ml={8} fontSize={20}>Entrar com Google</Text>
            </HStack>
          </Button>
          <Button w='full'  bg="gray.100" padding={4} shadow={5} mb={4} onPress={() => { alert() }}>
            <HStack w='90%' justifyContent='center'>
              <Face />
              <Text ml={8} fontSize={20}>Entrar com Facebook</Text>
            </HStack>
          </Button>
          <Link justifyContent='center'>
            <Text color='gray.100' fontSize={16}>Entrar com email</Text>
          </Link>
        </VStack>
        <Link justifyContent='center'>
          <Text color='gray.100' fontSize={16}>Criar conta</Text>
        </Link>
      </VStack>
      <StatusBar
        barStyle='light-content'
        backgroundColor='black'
      />
    </VStack>
  );
}
export default Login