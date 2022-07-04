import React, {useState} from "react";
import getCookie from "../utils/getCookieName";

export const MainContext = React.createContext();

export const MainProvider = (props) => {
    let temp = getCookie("token");
    const [token, setToken] = useState(temp);

    return(
        <MainContext.Provider value={[token,setToken]}>
            {props.children}
        </MainContext.Provider>
    )
}