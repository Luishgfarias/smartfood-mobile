import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useEffect, useState} from "react";

export const AuthContext = createContext({
    setItem: (value) => {},
    section: Boolean,
    loading: Boolean,
    userProps: {},
    setLogged: () => {}
})

function AuthProvider({children}) {
    const [section, setSection] = useState(false)
    const [loading, setLoading] = useState(true)
    const [userProps, setUserProps] = useState(false)

    async function setItem(value){
        await AsyncStorage.setItem('@SmartFood:authentication', JSON.stringify(value))
    }
    function setLogged() {
        setSection(true)
    }

    useEffect(() => {
        async function getItem() {
            const data = await AsyncStorage.getItem('@SmartFood:authentication')
             
            if(data !== null) {
                setUserProps(data)
                //setLogged()
            }
            setLoading(false)
        }
        getItem()
    }, [])

    return(
        <AuthContext.Provider value={{ setItem, section, userProps, setLogged, loading }}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthProvider