import { createDrawerNavigator} from '@react-navigation/drawer'
import OnBoard from '../screens/OnBoard'
import Home from '../screens/Home'
import Login from '../screens/Login'
import Menu from '../assets/MenuButton.svg'
import { useContext, useEffect, useState } from 'react'
import { Text } from 'native-base';
import { AuthContext } from '../contexts/auth'
import { TouchableOpacity } from 'react-native'
import { DrawerActions, useNavigation } from '@react-navigation/native'
import { background } from 'native-base/lib/typescript/theme/styled-system'

const { Navigator, Screen } = createDrawerNavigator()

export function StackRoutes() {
    const Navigation = useNavigation()

    const { section } = useContext(AuthContext)
    useEffect(() => {
        console.log(section);
    }, [section])


    return (
        <>
            <Navigator
            screenOptions={{
                drawerPosition: 'right',
                headerStyle: {
                    backgroundColor: '#F6F6FA',
                },
                headerTitleStyle: {
                    fontFamily: 'Ubuntu_400Regular'
                },
                headerLeftContainerStyle: {
                    display: 'none'
                },
                headerRightContainerStyle: {
                    right: 10
                },
                headerShadowVisible: false, 
                headerRight: () => (
                    <TouchableOpacity  onPress={() => Navigation.dispatch(DrawerActions.openDrawer())}>
                      <Menu />
                    </TouchableOpacity>
                  ),             
            }} initialRouteName ={'home' || 'login'}
            >
                {
                    section ?
                        <Screen
                            name='Home'
                            component={Home}
                            options={{
                                headerShown: true,
                                title: 'O que você deseja?',
                            }}
                        />
                        :
                        <>
                            <Screen
                                name='Login'
                                component={Login}
                                options={{
                                    headerShown: false
                                }}
                            />
                            <Screen
                                name='OnBoard'
                                component={OnBoard}
                                options={{
                                    headerShown: false
                                }}
                            />
                        </>
                }
            </Navigator>
        </>
    )
}