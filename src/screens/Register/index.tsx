import React, { useState } from 'react';
import { Input, StatusBar, VStack, Text, Button } from 'native-base';
import City from '../../assets/City.svg'
import { Dimensions } from 'react-native';
import { Api } from '../../services/api';
import { useNavigation } from '@react-navigation/native';

export default function Register() {
  const Navigation = useNavigation()

    const [form, setForm] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    })
    async function handleRegister() {
       Api.post('auth/register/user', form)
       .then( () => Navigation.navigate('Login') )
       .catch(error => console.log(error))
       
    }
    return (
        <VStack h={Dimensions.get('screen').height} w={Dimensions.get('screen').width} justifyContent='center' alignItems='center'>

            <VStack bg='none' w='100%' h='100%' justifyContent='center' alignItems='center'>
                <Text fontFamily='body' fontSize={22} mb={6}>Crie Sua conta...</Text>
                <VStack bg='#fff' w="80%" h='40%' justifyContent='center' alignItems='center' borderRadius={16} shadow={3}>
                    <Input placeholder='Nome' w='75%' type='text' mb={3} borderRadius={16} _focus={{
                        backgroundColor: '#00000015',
                        borderColor: 'gray.400'
                    }}
                    onChangeText={(event) => setForm({
                        ...form,
                        name: event
                    })} />
                    <Input placeholder='Email' w='75%' type='text' mb={3} borderRadius={16} _focus={{
                        backgroundColor: '#00000015',
                        borderColor: 'gray.400'
                    }}
                    onChangeText={(event) => setForm({
                        ...form,
                        email: event
                    })} />
                    <Input placeholder='Senha' w='75%' type='password' mb={3} borderRadius={16} _focus={{
                        backgroundColor: '#00000015',
                        borderColor: 'gray.400'
                    }}
                    onChangeText={(event) => setForm({
                        ...form,
                        password: event
                    })} />
                    <Input placeholder='Confirme sua senha' w='75%' type='password' mb={6} borderRadius={16} _focus={{
                        backgroundColor: '#00000015',
                        borderColor: 'gray.400'
                    }}
                    onChangeText={(event) => setForm({
                        ...form,
                        confirmPassword: event
                    })} />
                    <Button w='50%' bg={'#F88A10'} onPress={handleRegister}>
                        Criar
                    </Button>
                </VStack>
            </VStack>

            <City style={{
                position: 'absolute',
                bottom: 0
            }} width='100%' height='25%' />
            <StatusBar
                barStyle='dark-content'
                backgroundColor='#f1f1f1'
            />
        </VStack>
    );
}