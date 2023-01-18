import React from 'react';
import { VStack, Text, FlatList, Image, HStack } from 'native-base';
import { Dimensions } from 'react-native';
type ItemProps = {
    item: {
        img: JSX.Element
        text: string,
    },
    index: number
}

const SLIDER_WIDTH = Dimensions.get('screen').width
const SLIDER_HEIGHT = Dimensions.get('screen').height * 0.55

const ITEM_HEIGHT = SLIDER_HEIGHT * 0.25
const ITEM_WIDTH = SLIDER_WIDTH * 0.9

const slides = [
    {
        text: 'Restaurante',
        img: <Image source={require('../../assets/Restaurante1.png')} alt='estabelecimento' />
    },
    {
        text: 'Mercado',
        img: <Image source={require('../../assets/Restaurante2.png')} alt='estabelecimento' />

    },
    {
        text: 'Restaurante',
        img: <Image source={require('../../assets/Restaurante1.png')} alt='estabelecimento' />
    },
    {
        text: 'Mercado',
        img: <Image source={require('../../assets/Restaurante2.png')} alt='estabelecimento' />

    },
    {
        text: 'Restaurante',
        img: <Image source={require('../../assets/Restaurante1.png')} alt='estabelecimento' />
    },
    {
        text: 'Mercado',
        img: <Image source={require('../../assets/Restaurante2.png')} alt='estabelecimento' />

    },
    {
        text: 'Restaurante',
        img: <Image source={require('../../assets/Restaurante1.png')} alt='estabelecimento' />
    },
    {
        text: 'Mercado',
        img: <Image source={require('../../assets/Restaurante2.png')} alt='estabelecimento' />

    },
    {
        text: 'Restaurante',
        img: <Image source={require('../../assets/Restaurante1.png')} alt='estabelecimento' />
    },
    {
        text: 'Mercado',
        img: <Image source={require('../../assets/Restaurante2.png')} alt='estabelecimento' />

    },
];

function carouselItens({ item, index }: ItemProps) {
    return (
        <HStack key={index} w={ITEM_WIDTH} h={ITEM_HEIGHT}
            padding={4} borderBottomStyle={'solid'} borderBottomColor='black'
            borderBottomWidth={1} alignItems='center'>

            {item.img}

            <VStack justifyContent='space-between'>
                <Text textAlign='center'>
                    {item.text}
                </Text>
                <Text textAlign='center'>
                    {item.text}
                </Text>
            </VStack>
        </HStack>
    )
}

function ListLocations() {
    return (
        <VStack justifyContent={'center'} alignItems='center'>
            <FlatList
                data={slides}
                renderItem={carouselItens}
                showsVerticalScrollIndicator={false}
                width={ITEM_WIDTH}
                h={SLIDER_HEIGHT}
                borderTopStyle={'solid'} borderTopColor='black'
                borderTopWidth={1}
            />
        </VStack>
    );
}
export default ListLocations