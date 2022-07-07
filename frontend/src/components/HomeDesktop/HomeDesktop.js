import { useRef } from "react";
import HeaderDesktop from "../HeaderDesktop/HeaderDesktop";
import Hero from "../Hero/Hero";
import HomeFooter from "../HomeFooter/HomeFooter";
import HomeInfo from "../HomeInfo/HomeInfo";
import HomePartners from "../HomePartners/HomePartners";
import HomeServices from "../HomeServices/HomeServices";
function HomeDesktop() {
  const base = "home-desktop";
  const elementRef = useRef();
  const navbarRef = useRef();
  const menuRef = useRef();
  window.addEventListener("wheel", (e) => {
    if (elementRef.current) {
      if (e.deltaY > 0) {
        elementRef.current.scrollLeft += 200;
        navbarRef.current.style.left = "-15rem";
        menuRef.current.style.display = "block";
      } else {
        elementRef.current.scrollLeft -= 200;
        navbarRef.current.style.left = "0rem";
        menuRef.current.style.display = "none";
      }
    }
  });

  const openMenu = (status) => {
    console.log("afadf");
    if (status) {
      navbarRef.current.style.left = "0rem";
      menuRef.current.style.display = "none";
    } else {
      navbarRef.current.style.left = "-15rem";
      menuRef.current.style.display = "block";
    }
  };
  return (
    <>
      <HeaderDesktop
        openMenu={openMenu}
        navbarRef={navbarRef}
        elementRef={elementRef}
      />
      <main ref={elementRef} className={`${base}__root`}>
        <button
          aria-label="Menu"
          className={`${base}__menu`}
          ref={menuRef}
          onClick={() => openMenu(true)}
        ></button>
        <section className={`${base}__section--first`} id="hero">
          <Hero elementRef={elementRef} />
        </section>
        <section className={`${base}__section`} id="info">
          <HomeInfo />
        </section>
        <section className={`${base}__section`} id="services">
          <HomeServices />
        </section>
        <section className={`${base}__section`} id="partners">
          <HomePartners />
        </section>
        <HomeFooter />
      </main>
    </>
  );
}

export default HomeDesktop;
