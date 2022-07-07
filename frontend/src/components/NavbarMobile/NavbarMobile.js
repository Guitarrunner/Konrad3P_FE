import { Link } from "react-router-dom";
import logout from "../../assets/logout.png";
import transaction from "../../assets/transaction.png";
import profile from "../../assets/user.png";
import history from "../../assets/history.png";
import logo from "../../assets/logo.png";
import { useRef, useState } from "react";
function NavbarMobile() {
  const base = "navbar-mobile";
  const menuRef = useRef();
  const [open, setOpen] = useState(false);
  const displayMenu = (state) => {
    if (state) {
      setOpen(true);
      menuRef.current.style.display = "flex";
    } else {
      setOpen(false);
      menuRef.current.style.display = "none";
    }
  };
  return (
    <nav className={`${base}__root`}>
      <div className={`${base}__logo`}>
        <Link to="/bank/dashboard" className={`${base}__logo__container`}>
          <img
            className={`${base}__logo__container__img`}
            src={logo}
            alt="logo"
          />
        </Link>
      </div>
      <div className={`${base}__logo`}>
        <Link to="/bank/profile" className={`${base}__logo__container`}>
          <img
            className={`${base}__logo__container__img`}
            src={profile}
            alt="profile"
          />
        </Link>
      </div>
      <div className={`${base}__logo`}>
        <div
          className={`${base}__logo__container`}
          onClick={() => displayMenu(!open)}
        >
          <img
            className={`${base}__logo__container__img`}
            src={transaction}
            alt="transactions"
          />
          <div ref={menuRef} className={`${base}__menu`}>
            <Link
              className={`${base}__menu__links`}
              to="/bank/addMoney"
              onClick={() => displayMenu(false)}
            >
              Add Money
            </Link>
            <Link
              className={`${base}__menu__links`}
              to="/bank/moneyTransfer"
              onClick={() => displayMenu(false)}
            >
              Money Transfer
            </Link>
            <Link
              className={`${base}__menu__links`}
              to="/bank/services"
              onClick={() => displayMenu(false)}
            >
              Services
            </Link>
          </div>
        </div>
      </div>
      <div className={`${base}__logo`}>
        <Link to="/bank/accountHistory" className={`${base}__logo__container`}>
          <img
            className={`${base}__logo__container__img`}
            src={history}
            alt="history"
          />
        </Link>
      </div>
      <div className={`${base}__logo`}>
        <Link to="/" className={`${base}__logo__container`}>
          <img
            className={`${base}__logo__container__img`}
            src={logout}
            alt="logout"
          />
        </Link>
      </div>
    </nav>
  );
}

export default NavbarMobile;
