import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import "./App.scss";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import NavbarMobile from "./components/NavbarMobile/NavbarMobile";
import useBreakPoint from "./hooks/useBreakPoint";

function App() {
  const [size, setSize] = useState(0);

  let device = useBreakPoint(size);

  window.onresize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    setSize(window.innerWidth);
  }, []);
  if (device === "mobile") {
    return (
      <>
        <NavbarMobile />
        <Outlet />
        <Footer />
      </>
    );
  } else {
    return (
      <>
        <Navbar />
        <Outlet />
        <Footer />
      </>
    );
  }
}

export default App;
