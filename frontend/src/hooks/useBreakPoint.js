import { useEffect, useState } from "react"
const useBreakPoint = (size) => {
    const [breakPoint, setBreakPoint] = useState("");
    useEffect(() => {
        if(size<647){
            setBreakPoint("mobile");
        }
        else{
            if(size>900){
                setBreakPoint("desktop");
            }
            else{
                setBreakPoint("tablet");
            }
        }
    },[size]);
    return breakPoint;
}
export default useBreakPoint;