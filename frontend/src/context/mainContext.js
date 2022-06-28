import React, {useState} from "react";

export const MainContext = React.createContext();

export const MainProvider = (props) => {
    const [token, setToken] = useState("a")
    return(
        <MainContext.Provider value={[token,setToken]}>
            {props.children}
        </MainContext.Provider>
    )
}