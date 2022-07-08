import { Link } from "react-router-dom";
import logout from "../../assets/logout.png";
import logo from "../../assets/logo.png";
function Dashboard() {
  const base = "dashboard";
  const currentUser = JSON.parse(window.localStorage.getItem("user"));
  const last2 = currentUser.log.slice(-2);
  return (
    <main className={`${base}__root`}>
      <div className={`${base}__wrapper`}>
        <div className={`${base}__wrapper__header`}>
          <div className={`${base}__wrapper__header__logo-container`}>
            <img className={`${base}__wrapper__header__logo-container__logo`} src={logo} alt="logo"/>
          </div>
          <div className={`${base}__wrapper__header__container`}>
            <Link
              to="/bank/profile"
              className={`${base}__wrapper__header__container__img-container`}
            >
              <img
                className={`${base}__wrapper__header__container__img-container__img`}
                src={currentUser.idPhoto}
                alt="profile"
              />
            </Link>
            <div className={`${base}__wrapper__header__container__info`}>
              <Link
                to="/bank/profile"
                className={`${base}__wrapper__header__container__info__name`}
              >
                {currentUser.fullName}
              </Link>
              <small
                className={`${base}__wrapper__header__container__info__id`}
              >
                ID: {currentUser.idNum}
              </small>
            </div>
            <div className={`${base}__wrapper__header__container__logout`}>
              <Link
                className={`${base}__wrapper__header__container__logout__btn`}
                to="/"
              >
                <img src={logout} alt="Log out" />
              </Link>
            </div>
          </div>
        </div>
        <div className={`${base}__wrapper__accounts`}>
          <div className={`${base}__wrapper__accounts__account`}>
            {currentUser.accounts.map((account, i) => {
              return (
                <div key={i} className={`${base}__container`}>
                  <div className={`${base}__container__name`}>
                    <p className={`${base}__container__text`}>{account.name}</p>
                  </div>
                  <div className={`${base}__container__iban`}>
                    <p className={`${base}__container__text`}>IBAN</p>
                    <p className={`${base}__container__text--small`}>
                      {account.type}
                      {account.IBAN}
                    </p>
                  </div>
                  <div className={`${base}__container__balance`}>
                    <p className={`${base}__container__text`}>Balance</p>
                    <p className={`${base}__container__text--small`}>
                      {account.type === "US"
                        ? `$${parseFloat(account.amount).toFixed(2)}`
                        : `₡${parseFloat(account.amount).toFixed(2)}`}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className={`${base}__wrapper__accounts__log`}>
            <Link to="/bank/accountHistory" className={`${base}__wrapper__accounts__log__title`}>
              Last Transactions
            </Link>
            <ul className={`${base}__wrapper__accounts__log__list`}>
              {last2.map((message, i) => {
                return (
                  <li key={i} className={`${base}__wrapper__element`}>
                    <p className={`${base}__wrapper__element__item`}>
                      Type: {message.type}{" "}
                    </p>
                    <p className={`${base}__wrapper__element__item`}>
                      Amount of transfer:{" "}
                      {parseFloat(message.amount).toFixed(2)}
                    </p>
                    <p className={`${base}__wrapper__element__item`}>
                      Date: {message.date.substring(0, 16)}
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className={`${base}__wrapper__transaction`}>
          <Link
            to="/bank/addMoney"
            className={`${base}__wrapper__transaction__cart`}
          >
            <h2 className={`${base}__wrapper__transaction__cart__title`}>
              Add Money
            </h2>
            <small className={`${base}__wrapper__transaction__cart__desc`}>
              Transfer money to your account easily!
            </small>
          </Link>
          <Link
            to="/bank/moneyTransfer"
            className={`${base}__wrapper__transaction__cart`}
          >
            <h2 className={`${base}__wrapper__transaction__cart__title`}>
              Transfer Money
            </h2>
            <small className={`${base}__wrapper__transaction__cart__desc`}>
              Send money to different accounts!
            </small>
          </Link>
          <Link
            to="/bank/services"
            className={`${base}__wrapper__transaction__cart`}
          >
            <h2 className={`${base}__wrapper__transaction__cart__title`}>
              Services
            </h2>
            <small className={`${base}__wrapper__transaction__cart__desc`}>
              Pay more than 40 services here!
            </small>
          </Link>
        </div>
      </div>
    </main>
  );
}

export default Dashboard;
