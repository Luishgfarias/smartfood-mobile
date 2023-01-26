import React from 'react';
import { VStack, Text, HStack, Button } from 'native-base';
import { Dimensions } from 'react-native';
import PinMap from '../../assets/PinMap.svg'
import { useNavigation } from '@react-navigation/native';

export default function CustomDrawer() {
    const Navigation = useNavigation()

    return (
        <VStack bg='gray.400' height={Dimensions.get('screen').height * .95} w={Dimensions.get('screen').width * .7}
            borderTopLeftRadius={80} p={6} pt={16} pb={4} fontFamily='josefinRegular' justifyContent='space-between'>
            <VStack>
                <HStack w='100%' justifyContent='space-between' alignItems='center' mb={10}>
                    <VStack>
                        <Text fontSize={16} color='gray.100'>
                            Rua Jardim Paulista - 15
                        </Text>
                        <Text fontSize={12} color='gray.100'>
                            Pacoti - 62770-000
                        </Text>
                    </VStack>
                    <PinMap />
                </HStack>
                <Button justifyContent='flex-start' mb={2} p={0} style={{
                    backgroundColor: '#00000000'
                }}
                    onPress={() => Navigation.navigate('Home')}>
                    <Text fontSize={20} color='gray.100'>
                        Seu historico
                    </Text>
                </Button>
                <Button justifyContent='flex-start' mb={2} p={0} style={{
                    backgroundColor: '#00000000'
                }}
                    onPress={() => Navigation.navigate('Home')}>
                    <Text fontSize={20} color='gray.100'>
                        Estabelecimentos favoritos
                    </Text>
                </Button>
                <Button justifyContent='flex-start' mb={2} p={0} style={{
                    backgroundColor: '#00000000'
                }}
                    onPress={() => Navigation.navigate('Home')}>
                    <Text fontSize={20} color='gray.100'>
                        Status de pedidos
                    </Text>
                </Button>
            </VStack>
            <Button justifyContent='flex-start' mb={2} p={0} style={{
                backgroundColor: '#00000000'
            }}
                onPress={() => Navigation.navigate('Home')}>
                <Text fontSize={20} color='gray.100'>
                    Sair
                </Text>
            </Button>
        </VStack>
    );
}