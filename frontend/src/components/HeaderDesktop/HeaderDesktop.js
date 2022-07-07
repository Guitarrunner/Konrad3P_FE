import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
function HeaderDesktop(props) {
  const base = "header-desktop";
  const { elementRef, navbarRef, openMenu } = props;

  const scrollWithOffset = (number) => {
    elementRef.current.scroll({
      top: 0,
      left: elementRef.current.offsetWidth * number,
      behavior: "smooth",
    });
  };

  return (
    <header ref={navbarRef} className={`${base}__root`}>
      <div className={`${base}__container`}>
        <h2 className={`${base}__container__title`}>Universal Bank</h2>
        <ol className={`${base}__container__list`}>
          <li className={`${base}__element`}>
            <HashLink
              className={`${base}__element__link`}
              to="#hero"
              smooth
              scroll={() => {
                scrollWithOffset(0);
                openMenu(false);
              }}
            >
              Home
            </HashLink>
          </li>
          <li className={`${base}__element`}>
            <HashLink
              className={`${base}__element__link`}
              to="#info"
              smooth
              scroll={() => {
                scrollWithOffset(1);
                openMenu(false);
              }}
            >
              About us
            </HashLink>
          </li>
          <li className={`${base}__element`}>
            <HashLink
              className={`${base}__element__link`}
              to="#services"
              smooth
              scroll={() => {
                scrollWithOffset(2);
                openMenu(false);
              }}
            >
              Our services
            </HashLink>
          </li>
          <li className={`${base}__element`}>
            <HashLink
              className={`${base}__element__link`}
              to="#partners"
              smooth
              scroll={() => {
                scrollWithOffset(3);
                openMenu(false);
              }}
            >
              Our partners
            </HashLink>
          </li>
          <li className={`${base}__element`}>
            <button
              className={`${base}__element__link--button`}
              onClick={() => openMenu(false)}
            >
              Close Menu
            </button>
          </li>
        </ol>
        <div className={`${base}__container__button`}>
          <Link to="/login" className={`${base}__container__button__log`}>
            Enter bank
          </Link>
        </div>
      </div>
    </header>
  );
}

export default HeaderDesktop;
