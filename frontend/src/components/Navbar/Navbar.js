import { Link } from "react-router-dom";
import logout from "../../assets/logout.png";
import logo from "../../assets/logo.png";
import down from "../../assets/down.png";
import { useRef } from "react";
function Navbar() {
  const base = "navbar";
  const currentUser = JSON.parse(window.localStorage.getItem("user"));
  const menuRef = useRef();
  const arrowRef = useRef();

  const displayMenu = (state) =>{
    if(state){
        menuRef.current.style.display = "flex"
        arrowRef.current.style.webkitTransform = 'rotate(' + 180 + 'deg)';
    }
    else{
        menuRef.current.style.display = "none"
        arrowRef.current.style.webkitTransform = 'rotate(' + 0 + 'deg)';
    }
  }
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
      <div className={`${base}__user`}>
        <Link to="/bank/profile" className={`${base}__user__img-container`}>
          <img
            className={`${base}__user__img-container__img`}
            src={currentUser.idPhoto}
            alt="profile"
          />
        </Link>
        <Link to="/bank/profile" className={`${base}__user__name`}>{currentUser.fullName}</Link>
      </div>
      <div className={`${base}__navigation`}>
        <ul className={`${base}__navigation__list`}>
          <li className={`${base}__navigation__list__element`}>
            <div className={`${base}__navigation__list__element__drop`} onMouseOver={() => displayMenu(true)}
            onMouseLeave={() => displayMenu(false)}>
              Transactions <img ref={arrowRef} src={down} alt="dropdown menu"/>
              <div ref={menuRef} className={`${base}__navigation__list__element__menu`}>
                <Link className={`${base}__navigation__list__element__menu__links`} to="/bank/addMoney" onClick={()=> displayMenu(false)}>Add Money</Link>
                <Link className={`${base}__navigation__list__element__menu__links`} to="/bank/moneyTransfer" onClick={()=> displayMenu(false)}>Money Transfer</Link>
                <Link className={`${base}__navigation__list__element__menu__links`} to="/bank/services" onClick={()=> displayMenu(false)}>Services</Link>
              </div>
            </div>
          </li>
          <li className={`${base}__navigation__list__element`}>
            <Link
              to="/bank/accountHistory"
              className={`${base}__navigation__list__element__link`}
            >
              History
            </Link>
          </li>
        </ul>
      </div>
      <div className={`${base}__logo`}>
        <Link to="/" className={`${base}__logo__container`}>
          <img
            className={`${base}__logo__container__img--small`}
            src={logout}
            alt="logo"
          />
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
