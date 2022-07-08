import React, {useState} from "react";
import getCookie from "../utils/getCookieName";

export const MainContext = React.createContext();

export const MainProvider = (props) => {
    let temp = getCookie("token");
    const [token, setToken] = useState(temp);
    const [device, setDevice] = useState(0);

    return(
        <MainContext.Provider value={[token,setToken,device,setDevice]}>
            {props.children}
        </MainContext.Provider>
    )
}