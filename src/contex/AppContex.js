import { createContext, useContext, useState } from "react";

export const AppContex = createContext();

export const AppProvider = ({ children }) => {

    const [nickName, setnickName] = useState("");
    const [isLoading, setisLoading] = useState(false);    
    const [status, setstatus] = useState(false);    
    const values = {
        nickName,
        setnickName,
        isLoading,
        setisLoading,
        status,
        setstatus
    }

    
    return (
        <AppContex.Provider value={values}>{children}</AppContex.Provider>
    )
    
}

export const useAppContex = () => useContext(AppContex);
