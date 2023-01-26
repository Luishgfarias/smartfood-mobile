import React from 'react';
import { VStack, Text, FlatList, Image, HStack } from 'native-base';
import { Dimensions } from 'react-native';
type ItemProps = {
    item: {
        img: JSX.Element
        title: string,
        type: string,
        open: string,
        timeDelivery: string,
        assessment: number
    },
    index: number
}

const SLIDER_WIDTH = Dimensions.get('screen').width
const SLIDER_HEIGHT = Dimensions.get('screen').height * 0.55

const ITEM_HEIGHT = SLIDER_HEIGHT * 0.25
const ITEM_WIDTH = SLIDER_WIDTH * 0.9

const slides = [
    {
        title: 'Restaurante',
        type: 'Lanchonete',
        open: '17:00',
        timeDelivery: '30 - 45 min',
        assessment: 87,
        img: <Image src={'https://source.unsplash.com/random/200x200/?store&front&5'} alt='estabelecimento' w={ITEM_WIDTH * 0.25} h={ITEM_WIDTH * 0.25} />
    },
    {
        title: 'Mercado',
        type: 'Lanchonete',
        open: '17:00',
        timeDelivery: '30 - 45 min',
        assessment: 53,
        img: <Image src={'https://source.unsplash.com/random/200x200?store$front'} alt='estabelecimento' w={ITEM_WIDTH * 0.25} h={ITEM_WIDTH * 0.25} />

    },
    {
        title: 'Restaurante',
        type: 'Lanchonete',
        open: '17:00',
        timeDelivery: '30 - 45 min',
        assessment: 80,
        img: <Image src={'https://source.unsplash.com/random/200x200/?store&front&'} alt='estabelecimento' w={ITEM_WIDTH * 0.25} h={ITEM_WIDTH * 0.25} />
    },
    {
        title: 'Mercado',
        type: 'Lanchonete',
        open: '17:00',
        timeDelivery: '30 - 45 min',
        assessment: 93,
        img: <Image src={'https://source.unsplash.com/random/200x200/?store&front'} alt='estabelecimento' w={ITEM_WIDTH * 0.25} h={ITEM_WIDTH * 0.25} />

    },
    {
        title: 'Restaurante',
        type: 'Lanchonete',
        open: '17:00',
        timeDelivery: '30 - 45 min',
        assessment: 83,
        img: <Image src={'https://source.unsplash.com/random/200x200/?store&front&1'} alt='estabelecimento' w={ITEM_WIDTH * 0.25} h={ITEM_WIDTH * 0.25} />
    },
    {
        title: 'Mercado',
        type: 'Lanchonete',
        open: '17:00',
        timeDelivery: '30 - 45 min',
        assessment: 83,
        img: <Image src={'https://source.unsplash.com/random/200x200/?store&front'} alt='estabelecimento' w={ITEM_WIDTH * 0.25} h={ITEM_WIDTH * 0.25} />

    },
    {
        title: 'Restaurante',
        type: 'Lanchonete',
        open: '17:00',
        timeDelivery: '30 - 45 min',
        assessment: 83,
        img: <Image src={'https://source.unsplash.com/random/200x200/?store&front&1'} alt='estabelecimento' w={ITEM_WIDTH * 0.25} h={ITEM_WIDTH * 0.25} />
    },
    {
        title: 'Mercado',
        type: 'Lanchonete',
        open: '17:00',
        timeDelivery: '30 - 45 min',
        assessment: 83,
        img: <Image src={'https://source.unsplash.com/random/200x200/?store&front'} alt='estabelecimento' w={ITEM_WIDTH * 0.25} h={ITEM_WIDTH * 0.25} />

    },
    {
        title: 'Restaurante',
        type: 'Lanchonete',
        open: '17:00',
        timeDelivery: '30 - 45 min',
        assessment: 83,
        img: <Image src={'https://source.unsplash.com/random/200x200/?store&front&1'} alt='estabelecimento' w={ITEM_WIDTH * 0.25} h={ITEM_WIDTH * 0.25} />
    },
    {
        title: 'Mercado',
        type: 'Lanchonete',
        open: '17:00',
        timeDelivery: '30 - 45 min',
        assessment: 83,
        img: <Image src={'https://source.unsplash.com/random/200x200/?store&front'} alt='estabelecimento' w={ITEM_WIDTH * 0.25} h={ITEM_WIDTH * 0.25} />

    },
];

function carouselItens({ item, index }: ItemProps) {
    return (
        <HStack key={index} w={ITEM_WIDTH} h={ITEM_HEIGHT}
            padding={2} borderBottomStyle={'solid'} borderBottomColor='black'
            borderBottomWidth={1}>
            <HStack alignItems='center'>

                {item.img}

                <HStack justifyContent='space-around' ml='5%' h='80%' w='70%'>
                    <VStack justifyContent='space-between'>
                        <VStack>
                            <Text fontSize={18}>
                                {item.title}
                            </Text>
                            <Text fontSize={12}>
                                {item.type}
                            </Text>
                        </VStack>
                        <HStack w='35%'>
                            <Text fontSize={12}>
                                Abre as {item.open}
                            </Text>
                            <Text fontSize={12} w='150%'>
                                Tempo estimado {item.timeDelivery}
                            </Text>
                        </HStack>
                    </VStack>
                    <HStack>
                        <Text fontSize={18}>{item.assessment}%</Text>
                        <Text fontSize={18}>:)</Text>
                    </HStack>
                </HStack>
            </HStack>

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