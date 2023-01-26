import { useNavigation } from '@react-navigation/native'
import { Button, StatusBar, Text, VStack } from 'native-base';
import React, { useContext, useEffect } from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';
import City from '../../assets/City.svg'
import { AuthContext } from '../../contexts/auth';

function renderItem({ item }){
   
    return (
        <VStack alignItems="center" justifyContent="flex-end" flex={.85}>
            {
                item.done ?
                    <VStack>
                        <Button background={'#00000000'} w="100%" justifyContent='flex-start' onPress={item.done()}>
                            <Text fontSize={20} textAlign='center' >
                                {item.text}
                            </Text>
                        </Button>
                    </VStack>
                    :
                    <Text fontSize={20} textAlign='center' w="90%">
                        {item.text}
                    </Text>
            }
        </VStack>
    );
};

function OnBoard() {
    const Navigation = useNavigation()
    const { setLogged } = useContext(AuthContext)

    function handleNavigate() {
        setLogged()
      }
    const slides = [
        {
            key: '1',
            text: 'Peça suas compras ou comida do conforto da sua casa...',
        },
        {
            key: '2',
            text: 'Com a maior facilidade de pagamento.',
            done: () => handleNavigate
        },
    ];
    return (
        <VStack h='116.5%'>

            <AppIntroSlider
                data={slides}
                renderItem={renderItem}
                showNextButton={false}
                showDoneButton={false}
                activeDotStyle={{
                    backgroundColor: '#F88A10',
                    height: 13,
                    width: 13,
                    borderRadius: 50
                }}
                dotStyle={{
                    backgroundColor: 'rgba(248, 138, 16, 0.25)',
                    height: 13,
                    width: 13,
                    borderRadius: 50
                }} />
            <City width='100%'/>
            <StatusBar
                barStyle='dark-content'
                backgroundColor='transparent'
                translucent
            />
        </VStack>
    );
}

export default OnBoard