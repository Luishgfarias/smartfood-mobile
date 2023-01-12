import { NavigationContainer } from '@react-navigation/native'
import { StackRoutes } from './app.routes'

export function Routes() {
    return (
        <NavigationContainer>
            <StackRoutes />
        </NavigationContainer>
    )
}