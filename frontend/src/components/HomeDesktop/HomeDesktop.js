import { useRef } from "react";
import HeaderDesktop from "../HeaderDesktop/HeaderDesktop";
import Hero from "../Hero/Hero";
function HomeDesktop(){
    const base = "home-desktop";

  const elementRef = useRef()
    return(
        <>
        <HeaderDesktop elementRef={elementRef}/>
            <main ref={elementRef} className={`${base}__root`}>
                <section className={`${base}__section--first`} id="hero"><Hero elementRef={elementRef}/></section>
                <section className={`${base}__section`} id="info">Info</section>
                <section className={`${base}__section`} id="services">serv</section>
                <section className={`${base}__section`} id="partners">sfdsf</section>
            </main>
        </>
    )
}

export default HomeDesktop;