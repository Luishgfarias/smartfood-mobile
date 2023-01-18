import React from 'react';
import { VStack, Text, FlatList } from 'native-base';
import { Dimensions } from 'react-native';
import Restaurante from '../../assets/Restaurante.svg'
import Mercado from '../../assets/Mercado.svg'
import AguaEGas from '../../assets/AguaEGas.svg'
import Farmacia from '../../assets/Farmacia.svg'
import Bebidas from '../../assets/Bebidas.svg'
import Açougue from '../../assets/Açougue.svg'
import Confeitarias from '../../assets/Confeitarias.svg'
type ItemProps = {
    item: {
        img: JSX.Element
        text: string,
    },
    index: number
}

const SLIDER_WIDTH = Dimensions.get('screen').width

const ITEM_WIDTH = SLIDER_WIDTH * 0.22

const slides = [
    {
        text: 'Restaurante',
        img: <Restaurante />
    },
    {
        text: 'Super Mercado',
        img: <Mercado />

    },
    {
        text: 'Água',
        img: <AguaEGas />

    },
    {
        text: 'Farmácia',
        img: <Farmacia />

    },
    {
        text: 'Bebidas',
        img: <Bebidas />

    },
    {
        text: 'Açougue',
        img: <Açougue />

    },
    {
        text: 'Padarias e Confeitarias',
        img: <Confeitarias />

    },
];

function carouselItens({ item, index }: ItemProps) {
    return (
        <VStack key={index} w={ITEM_WIDTH} ml={4}>
            <VStack bg={'gray.500'} h={ITEM_WIDTH} borderRadius={12} alignItems='center' justifyContent='center'>
                {item.img}
            </VStack>
            <Text textAlign='center'>
                {item.text}
            </Text>
        </VStack>
    )
}

function Filters() {
    return (
        <VStack>
            <FlatList
                mt={4}
                h='20%'
                data={slides}
                renderItem={carouselItens}
                showsHorizontalScrollIndicator={false}
                horizontal
                width={SLIDER_WIDTH}
            />
        </VStack>
    );
}
export default Filters