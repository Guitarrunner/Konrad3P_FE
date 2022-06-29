import { useRef } from "react";
import HeaderDesktop from "../HeaderDesktop/HeaderDesktop";
import Hero from "../Hero/Hero";
import HomeInfo from "../HomeInfo/HomeInfo";
import HomeServices from "../HomeServices/HomeServices";
function HomeDesktop(){
    const base = "home-desktop";
    const elementRef = useRef();

    window.addEventListener("wheel", (e) => {
        if (elementRef.current){
            if (e.deltaY > 0) elementRef.current.scrollLeft += 200;
            else elementRef.current.scrollLeft -= 200;
        }
        
      });

    return(
        <>
        <HeaderDesktop elementRef={elementRef}/>
            <main ref={elementRef} className={`${base}__root`} >
                <section className={`${base}__section--first`} id="hero"><Hero elementRef={elementRef}/></section>
                <section className={`${base}__section`} id="info"><HomeInfo /></section>
                <section className={`${base}__section`} id="services"><HomeServices/></section>
                <section className={`${base}__section--last`} id="partners">sfdsf</section>
            </main>
        </>
    )
}

export default HomeDesktop;