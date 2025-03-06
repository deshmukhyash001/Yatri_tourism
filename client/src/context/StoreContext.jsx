import axios from "axios";
import { createContext, useEffect, useMemo, useState } from "react";
export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    const url = "http://localhost:4000";
    const [token, setToken] = useState(() => localStorage.getItem("token") || "");

    useEffect(() => {
        localStorage.setItem("token", token);
    }, [token]);


    useEffect(() => {
        const loadData = async () => {
            
        };
    }, [token]);

    const contextValue = {
        url,
        token,
        setToken,
    };

    return <StoreContext.Provider value={contextValue}>{props.children}</StoreContext.Provider>;
};

export default StoreContextProvider;
