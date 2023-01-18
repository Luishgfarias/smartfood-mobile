import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useEffect, useState} from "react";

export const AuthContext = createContext({
    setItem: (value) => {},
    getItem: (colection) => {},
    section: String
})

function AuthProvider({children}) {
    useEffect(() => {
        getItem('@SmartFood:authentication')
    }, [])
    const [section, setSection] = useState('')
    async function setItem(value){
       await AsyncStorage.setItem('@SmartFood:authentication', JSON.stringify(value))
    }
    async function getItem(colection){
        const res = await AsyncStorage.getItem(colection)
        console.log(res);
        setSection(res)
    }
    return(
        <AuthContext.Provider value={{ setItem, getItem, section }}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthProvider