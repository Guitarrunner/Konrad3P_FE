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
import AddMoney from "./views/AddMoney/AddMoney";
import Services from "./views/Services/Services";
import MoneyTransfer from "./views/MoneyTransfer/MoneyTransfer";
import AccountHistory from "./views/AccountHistory/AccountHistory";
import Profile from "./views/Profile/Profile";
import Dashboard from "./views/Dashboard/Dasboard";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MainProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<App />}>
             <Route path="dashboard" element={<Dashboard />} />
            <Route path="addMoney" element={<AddMoney />} />
            <Route path="moneyTransfer" element={<MoneyTransfer />} />
            <Route path="services" element={<Services />} />
            <Route path="accountHistory" element={<AccountHistory />} />
            <Route path="profile" element={<Profile />} />
          </Route>
          <Route path="/login" element={<Login />} />
         
          <Route path="/create" element={<CreateAccount/>} />
        </Routes>
      </BrowserRouter>
    </MainProvider>
  </React.StrictMode>
);
