import { NavigationContainer } from '@react-navigation/native'
import { useContext } from 'react'
import { AuthContext } from '../contexts/auth'
import DrawRoutes from './app.routes'
import StackRoutes from './auth.routes'
import SplashPage from '../screens/Splash'

export function Routes() {
    const { section, loading } = useContext(AuthContext)

    if(loading){
        return(
            <SplashPage />
        )
    }

    return (
        <NavigationContainer>
            {
                section ? 
                <DrawRoutes />
                :
                <StackRoutes />
            }
        </NavigationContainer>
    )
}