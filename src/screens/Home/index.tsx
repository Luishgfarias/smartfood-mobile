import React from 'react';
import { StatusBar, VStack, Text, FlatList, Input, HStack } from 'native-base';
import Search from '../../assets/Search.svg'
import Filters from '../../components/Filters';
import { Dimensions } from 'react-native';
import ListLocations from '../../components/ListLocations';

function Home() {
  return (
    <VStack h={Dimensions.get('screen').height} bg="gray.100">
      <HStack justifyContent={'center'} alignItems='center'>
        <Input type='text'
          w={'90%'}
          m={4}
          style={{
            backgroundColor: '#00000010',
          }}
          _focus={{
            backgroundColor: '#00000015',
            borderColor: '#00000055'
          }}
          fontSize={16}
          placeholder={`Estabelecimento, item, prato...`}
          borderRadius={16}
        />
        <Search style={{
          position: 'absolute',
          right: 32
        }} />
      </HStack>
        <Filters />
        <ListLocations />
      <StatusBar
        barStyle='dark-content'
        backgroundColor='#f6f6fa'
      />
    </VStack>
  );
}
export default Home