import { useState } from "react";
import { Link } from "react-router-dom";
import prices from "../../assets/prices.json";
import Loader from "../../components/Loader/Loader";
import Message from "../../components/Message/Message";
function Services() {
  const base = "services";
  const [data, setData] = useState({ account: "", type: "" });
  const [account, setAccount] = useState({});
  const [message, setMessage] = useState({ status: false, message: "" });
  const [loader, setLoader] = useState(false);
  const inputHandler = (key, value) => {
    if (key === "account") {
      let acc = currentUser.accounts.filter(
        (account) => account.IBAN === parseInt(value)
      )[0];
      setAccount(acc);
    }
    let temp = { ...data };
    temp[key] = value;
    setData(temp);
  };
  const currentUser = JSON.parse(window.localStorage.getItem("user"));

  const transfer = (event) => {
    setLoader(true);
    event.preventDefault();
    console.log(data);
    if (data.account === "" || data.account === "Accounts") {
      alert("Escoja una cuenta");
    } else {
      fetch("https://bankserverkonrad.herokuapp.com/transaction/service", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.message === "Transaction done!") {
            fetch(
              `https://bankserverkonrad.herokuapp.com/user/${currentUser._id}`
            )
              .then((res) => res.json())
              .then((res) => {
                setMessage({ status: true, message: "Succesful" });
                setTimeout(() => {
                  window.location.reload(false);
                }, 1500);
              })
              .catch((res) => {
                setMessage({ status: true, message: res.message });
                setTimeout(() => {
                  window.location.reload(false);
                }, 1500);
              });
          } else {
            setMessage({ status: true, message: res.message });
            setTimeout(() => {
              window.location.reload(false);
            }, 1500);
          }
        })
        .catch((res) => {
          setMessage({ status: true, message: res.message });
          setTimeout(() => {
            window.location.reload(false);
          }, 1500);
        });
    }
  };

  return (
    <main className={`${base}__root`}>
      {loader ? <Loader /> : null}
      {message.status ? <Message message={message.message} /> : null}
      <div className={`${base}__wrapper`}>
        <h1 className={`${base}__title`}>Services</h1>
        {currentUser.services.length === 0 ? (
          <div>
            <p>You paid all your services!!</p>
            <div className={`${base}__btn-container`}>
              <Link
                to="/home/dashboard"
                className={`${base}__btn-container__btn`}
              >
                Go to dashboard
              </Link>
            </div>
          </div>
        ) : (
          <form
            className={`${base}__form`}
            onSubmit={(event) => transfer(event)}
          >
            <div className={`${base}__form__container`}>
              <label
                htmlFor="input-service"
                className={`${base}__form__container__label`}
              >
                Service to pay
              </label>
              <select
                id="input-service"
                className={`${base}__form__container__input`}
                name="service"
                onInput={(event) => inputHandler("type", event.target.value)}
                required
              >
                <option value="Services">Services</option>
                {currentUser.services.map((servicex, i) => {
                  return (
                    <option
                      key={i}
                      name={servicex}
                      value={servicex}
                    >{`${servicex} `}</option>
                  );
                })}
              </select>
            </div>
            {data.type !== "" && data.type !== "Services" ? (
              <p className={`${base}__amount`}>{`Total to pay: CRC${
                prices.filter((service) => service.name === data.type)[0].value
              }`}</p>
            ) : null}

            <div className={`${base}__form__container`}>
              <label
                htmlFor="input-credit"
                className={`${base}__form__container__label`}
              >
                Account to Credit
              </label>

              <select
                id="input-credit"
                className={`${base}__form__container__input`}
                name="accounts"
                onInput={(event) => inputHandler("account", event.target.value)}
                required
              >
                <option value="Accounts">Accounts</option>
                {currentUser.accounts.map((account, i) => {
                  return (
                    <option
                      key={i}
                      name={account.name}
                      value={account.IBAN}
                    >{`${account.name} - ${account.IBAN}`}</option>
                  );
                })}
              </select>
            </div>
            {data.account !== "" && data.account !== "Accounts" ? (
              <p className={`${base}__amount`}>{`Amount Available: ${parseFloat(
                account.amount
              ).toFixed(2)}`}</p>
            ) : null}

            <div className={`${base}__form__btn-container`}>
              <button
                type="submit"
                className={`${base}__form__btn-container__btn`}
              >
                Pay Service
              </button>
            </div>
          </form>
        )}
      </div>
    </main>
  );
}

export default Services;
