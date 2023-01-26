import React, { useEffect, useState } from 'react';
import { VStack, Text, FlatList, Image, HStack } from 'native-base';
import { Dimensions } from 'react-native';
import { Api } from '../../services/api';
type ItemProps = {
    item: {
        img: JSX.Element
        name: string,
        type: string,
        open: string,
        timeDelivery: string,
        assessment: number,
        image: string
    },
    index: number
}

const SLIDER_WIDTH = Dimensions.get('screen').width
const SLIDER_HEIGHT = Dimensions.get('screen').height * 0.55

const ITEM_HEIGHT = SLIDER_HEIGHT * 0.25
const ITEM_WIDTH = SLIDER_WIDTH * 0.9


function carouselItens({ item, index }: ItemProps) {
    const image = item.image
    return (
        <HStack key={index} w={ITEM_WIDTH} h={ITEM_HEIGHT}
            padding={2} borderBottomStyle={'solid'} borderBottomColor='black'
            borderBottomWidth={1}>
            <HStack alignItems='center'>
                <Image source={{
                    uri: image
                }} w={ITEM_WIDTH * 0.25} h={ITEM_WIDTH * 0.25} alt='Image'/>
                <HStack justifyContent='space-around' ml='5%' h='80%' w='70%'>
                    <VStack justifyContent='space-between'>
                        <VStack>
                            <Text fontSize={18}>
                                {item.name}
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

    const [slides, setSlides] = useState([])
    useEffect(() => {
        async function getLocations() {
            const data = await Api('location/list')
            setSlides(data.data.list)
        }
        getLocations()
    }, [])
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