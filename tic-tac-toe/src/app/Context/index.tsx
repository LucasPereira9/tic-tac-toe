'use client';
import { createContext, useContext, Dispatch, SetStateAction, useState } from "react";
import { iTest } from "./context.structure";


const GlobalContext = createContext<iTest>({
    userName: 'lucas',
    userAge: 22,
    setUserName: (): string => '',
    setUserAge: (): number => 0,
})

export const GlobalContextProvider = ({ children }: {children: React.ReactNode}) => {
    const [userName, setUserName] = useState('' as string)
    const [userAge, setUserAge] = useState(0 as number)
    return (

        <GlobalContext.Provider value={{userName, setUserName, userAge, setUserAge}}>
            {children}
        </GlobalContext.Provider>
    )
}
export const useGlobalContext = () => useContext(GlobalContext)