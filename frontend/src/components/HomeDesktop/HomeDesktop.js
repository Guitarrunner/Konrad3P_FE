
import HeaderDesktop from "../HeaderDesktop/HeaderDesktop";
function HomeDesktop(){
    const base = "home-desktop";
    return(

       
        <main className={`${base}__root`}>
             <HeaderDesktop/>
            <section className={`${base}__section`} id="hero">Hero</section>
            <section className={`${base}__section`} id="info">Info</section>
            <section className={`${base}__section`} id="services">serv</section>
            <section className={`${base}__section`} id="partners">sfdsf</section>
        </main>
    )
}

export default HomeDesktop;