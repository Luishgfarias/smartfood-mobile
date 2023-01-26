import { createDrawerNavigator } from '@react-navigation/drawer'
import Home from '../screens/Home'
import Menu from '../assets/MenuButton.svg'
import { TouchableOpacity } from 'react-native'
import { DrawerActions, useNavigation } from '@react-navigation/native'
import CustonDrawer from '../components/CustomDrawer'

const { Navigator, Screen } = createDrawerNavigator()
export default function DrawRoutes() {
    const Navigation = useNavigation()

    return (
        <>
            <Navigator
                screenOptions={{
                    drawerPosition: 'right',
                    drawerType: 'front',
                    drawerStyle: {
                        backgroundColor: '#00000000'
                    },
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
                        <TouchableOpacity onPress={() => Navigation.dispatch(DrawerActions.openDrawer())}>
                            <Menu />
                        </TouchableOpacity>
                    ),
                }}
                initialRouteName='Home'
                drawerContent={CustonDrawer}
            >
                <Screen
                    name='Home'
                    component={Home}
                    options={{
                        headerShown: true,
                        title: 'O que você deseja?',
                    }}
                />

            </Navigator>
        </>
    )
}