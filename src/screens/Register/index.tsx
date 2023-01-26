import React from 'react';
import { Input, StatusBar, VStack, Text, Button } from 'native-base';
import City from '../../assets/City.svg'
import { Dimensions } from 'react-native';

export default function Register() {
  return (
    <VStack h={Dimensions.get('screen').height} w={Dimensions.get('screen').width} justifyContent='center' alignItems='center'>

        <VStack bg='none' w='100%' h='100%' justifyContent='center' alignItems='center'>
            <Text fontFamily='body' fontSize={22} mb={6}>Crie Sua conta...</Text>
            <VStack bg='#fff' w="80%" h='40%' justifyContent='center' alignItems='center' borderRadius={16} shadow={3}>
                <Input placeholder='Email' w='75%' type='text' mb={3} borderRadius={16} _focus={{
                    backgroundColor: '#00000015',
                    borderColor: 'gray.400'
                }}/>
                <Input placeholder='Senha' w='75%' type='password' mb={3} borderRadius={16} _focus={{
                    backgroundColor: '#00000015',
                    borderColor: 'gray.400'
                }}/>
                <Input placeholder='Confirme sua senha' w='75%' type='password' mb={6} borderRadius={16} _focus={{
                    backgroundColor: '#00000015',
                    borderColor: 'gray.400'
                }}/>
                <Button w='50%' bg={'#F88A10'}>
                    Criar
                </Button>
            </VStack>
        </VStack>
        
        <City style={{
            position:'absolute',
            bottom: 0
        }} width='100%' height='25%'/>
            <StatusBar
                barStyle='dark-content'
                backgroundColor='#f1f1f1'
            />
    </VStack>
  );
}