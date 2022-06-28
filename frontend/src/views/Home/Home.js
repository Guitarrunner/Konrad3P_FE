import {useEffect, useState} from "react";
import HomeDesktop from "../../components/HomeDesktop/HomeDesktop";
import HomeMobile from "../../components/HomeMobile/HomeMobile";
import useBreakPoint from "../../hooks/useBreakPoint";
function Home(){
    const base = "home";

    const [animation, setAnimation]= useState(true);
    const [size, setSize] = useState(0);

    let device = useBreakPoint(size);
    let homeDisplay;

    window.onresize = () => { setSize(window.innerWidth) };

    useEffect(() => {
        setSize(window.innerWidth)
    }, [])

    const changeView = (evt) =>{
        setAnimation(false);
    }

    if(animation){
        return(
            <main className={`${base}__root`}>
                <div className={`${base}__welcome`} onAnimationEnd={(event)=>changeView(event)}>
                    Welcome
                </div> 
            </main> 
        )
    }
    else{
        device === "mobile"
        ?
        homeDisplay = <main className={`${base}__root`}> <HomeMobile/></main>
        :
        homeDisplay = <main className={`${base}__root`}> <HomeDesktop/></main>
    }

    return homeDisplay;
    
}

export default Home;