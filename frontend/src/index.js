import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.scss";
import App from "./App";
import ScrollToTop from "./utils/ScrollToTop";
import Home from "./views/Home/Home";
import { MainProvider } from "./context/mainContext";
import Login from "./views/Login/Login";
import CreateAccount from "./views/CreateAccount/CreateAccount";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MainProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<App />} />
          <Route path="/login" element={<Login />} />
          <Route path="/create" element={<CreateAccount/>} />
        </Routes>
      </BrowserRouter>
    </MainProvider>
  </React.StrictMode>
);
