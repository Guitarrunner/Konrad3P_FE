import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
function HeaderDesktop() {
  const base = "header-desktop";
  return (
    <header className={`${base}__root`}>
      <div className={`${base}__container`}>
        <h2 className={`${base}__container__title`}>Le Bank</h2>
        <ol className={`${base}__container__list`}>
          <li className={`${base}__element`}>
            <HashLink className={`${base}__element__link`} to="#hero">
              Home
            </HashLink>
          </li>
          <li className={`${base}__element`}>
            <HashLink className={`${base}__element__link`} to="#info">
              About us
            </HashLink>
          </li>
          <li className={`${base}__element`}>
            <HashLink className={`${base}__element__link`} to="#services">
              Our services
            </HashLink>
          </li>
          <li className={`${base}__element`}>
            <HashLink className={`${base}__element__link`} to="#partners">
              Our partners
            </HashLink>
          </li>
        </ol>
        <div className={`${base}__container__button`}>
          <Link to="/log" className={`${base}__container__button__log`}>Enter bank</Link>
        </div>
      </div>
    </header>
  );
}

export default HeaderDesktop;
