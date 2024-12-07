import { createContext } from "react";

export const AppContext = createContext({
    setIsLoading: (_isLoading: boolean) => {}
})