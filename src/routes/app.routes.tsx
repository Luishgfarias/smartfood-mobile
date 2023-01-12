import { createNativeStackNavigator } from '@react-navigation/native-stack'
import OnBoard from '../screens/OnBoard'
import Home from '../screens/Home'
import Login from '../screens/Login'

const { Navigator, Screen } = createNativeStackNavigator()

export function StackRoutes() {
    return (
        <Navigator screenOptions={{
            headerShown: false
        }}>
            <Screen
                name='Login'
                component={Login}
            />
            <Screen
                name='OnBoard'
                component={OnBoard}
            />
            <Screen
                name='Home'
                component={Home}
            />
        </Navigator>
    )
}