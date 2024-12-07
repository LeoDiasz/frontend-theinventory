import { useState } from "react";
import { AppContext } from "../context/AppContext"
import { Toaster } from "react-hot-toast"
import React from "react";

interface IAppContainerProps {
    children: React.ReactElement
}

export const AppContainer = ({children}: IAppContainerProps) => {
    const [isLoading, setIsLoading] = useState<boolean>();


    return (
        <AppContext.Provider value={{setIsLoading}}>
            <>
                <Toaster />
                {children}
            </>
        </AppContext.Provider>
    )
}