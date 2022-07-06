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
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAM1BMVEXk5ueutLfn6eqrsbTp6+zg4uOwtrnJzc/j5earsbW0uby4vcDQ09XGyszU19jd3+G/xMamCvwDAAAFLklEQVR4nO2d2bLbIAxAbYE3sDH//7WFbPfexG4MiCAcnWmnrzkjIRaD2jQMwzAMwzAMwzAMwzAMwzAMwzAMwzAMwzAMwzAMw5wQkHJczewxZh2lhNK/CBOQo1n0JIT74/H/qMV0Z7GU3aCcVPuEE1XDCtVLAhgtpme7H0s1N1U7QjO0L8F7llzGeh1hEG/8Lo7TUmmuSrOfns9xnGXpXxsONPpA/B6OqqstjC6Ax/0ujkNdYQQbKNi2k64qiiEZ+ohi35X+2YcZw/WujmslYewiAliVYrxgJYrdwUmwXsU+RdApUi83oNIE27YvrfB/ZPg8+BJETXnqh9CVzBbTQHgojgiCvtqU9thFJg/CKz3VIMKMEkIXxIWqIpIg2SkjYj+xC816mrJae2aiWGykxRNsW0UwiJghJDljYI5CD8GRiCtIsJxizYUPQ2pzItZy5pcisTRdk/a9m4amtNNfBuQkdVhSaYqfpNTSFGfb9GRIakrE2Pm+GFLaCQPqiu0OpWP+HMPQQcgQMiQprWXNmsVwIjQjYi/ZrhAqNTCgr2gu0Jnz85RSSjso0HkMFZ0YZjKkc26a/jlmh9JiDyDxi9oeorTYAzZkwwoMz19pzj9bnH/GP/+qbchjSGflneWYhtTuKdMOmNKZcJ5TjInQKcYXnESd/jQxy0ENpULTNGOGgxpap/oyw9pbUAqhfx2Dbkhovvfgz4iUzoM9+GlK6/Mh4q29hyC1mwro30hpVVLPF9wYQr71RazOeM5/cw81iBRD+A03aM9/C/obbrKjbYSpCmIVG3qT/Q8oeUo3Rz0IL7vI1tEbCB9pSiu8I/aV8x3Kg/BGWrWp4ZVs0nZfmAoEG4h/61yHYIJiFSl6Q0Vk6tTW1N8kYp8hdOkfHYYMXd2Qft+8CYwqYDSKvqIh+MCF8Wgca2u/cwdgeW3TtuVn6+1oBs3yLo5C2JpK6CvQzGpfUkz9UG/87gCsi5o2LIXolxN0FbwAsjOLEr+YJmXn7iR6N0BCt5p5cMxm7eAsfS+/CACQf4CTpKjzgkvr2cVarVTf96372yut7XLJ1sa7lv6VcfgYrWaxqr3Wlo1S6pvStr22sxOtTNPLzdY3nj20bPP+ejFdJYkLsjGLdtPBEbe/mr2bQKiXWJDroA+vtzc0p9aahuwqHMDYrQEXHEw9jwQl3drMpts9JBU1SdktPe5FBRdJQ6bwXBpa57ib2A8kukQDzMjh++Uo7Fo6Wd02Pkf4fknqoo4HtvAIjsqUcjx6DIPgWCaOML9rKI/oqD9/lgNrn+eF+p7j8tnzHBiR7+kdUGw/+V1Kzkc75mMy6U+FMaxjPibiM1U1uGM+puInHpmALZCgP4pt7i840MV8+0R1zPsRB6UTcqpizncYwZ89syDydfyWCwXB1l8/zRNGWbTG/GHKUm9AkxHMc/EGSk3z2+ArEhPEV5TUBLEvUGFcjEUH80J/jveTGOAJEljJbILWGQT3zRYiwuKsUXN1EEJAzBhRJFll7mBUG7KD8EqPkKekBREaL8hMDZLQSG6AQjtHPYmvTQnX0TtpC1SYCe2YdkkyLP3jj5BSbKiuR585eQhTgoje6yIb0Yb0C+mV6EYvebqw5SDy2WmubogZiF2AVxPC2FpDf8H2Q9QWo6IkjUxTWVEI3WY/wrCeSuqJ+eRWzXR/JXwgVjUMozbCOfoEZiSiKVGepqv5CJ8RyR4D7xBeamqa7z3BJ/z17JxuBPdv93d/a2Ki878MMAzDMAzDMAzDMAzDMF/KP09VUmxBAiI3AAAAAElFTkSuQmCC"
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
            <h2 className={`${base}__wrapper__accounts__log__title`}>
              Last Transactions
            </h2>
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
