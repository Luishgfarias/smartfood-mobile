import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from '../screens/Login'
import Register from '../screens/Register'
import OnBoard from '../screens/OnBoard'

const { Navigator, Screen } = createNativeStackNavigator()
export default function StackRoutes() {

    return (
        <>
            <Navigator screenOptions={{
                headerShown: false
            }}
            >
                <Screen
                    name='Login'
                    component={Login}
                    options={{
                        headerShown: false
                    }}
                />
                <Screen
                    name='Register'
                    component={Register}
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
            </Navigator>
        </>
    )
}