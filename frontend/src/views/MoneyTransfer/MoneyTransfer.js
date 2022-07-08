import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import Message from "../../components/Message/Message";

function MoneyTransfer() {
  const base = "money-transfer";
  const [data, setData] = useState({
    toDebit: "",
    toCredit: "",
    amount: "",
    typeTransaction: "debit",
    type: "",
  });
  const [message, setMessage] = useState({ status: false, message: "" });
  const [loader, setLoader] = useState(false);
  const [account, setAccount] = useState({});
  const navigate = useNavigate()
  const inputHandler = (key, value) => {
    let temp = { ...data };
    if (key === "toDebit") {
      let acc = currentUser.accounts.filter(
        (account) => account.IBAN === parseInt(value)
      )[0];
      setAccount(acc);
    }
    if (key === "typeTransaction") {
      if (value) {
        value = "same";
      } else {
        value = "debit";
      }
    }
    if (key === "toCredit" && value.length === 22) {
      temp["type"] = value.substring(0, 2);
      value = value.substring(2);
    }
    if (key === "amount") {
      value = value.replace(",", "");
      value = value.replace("$", "");
      value = value.replace("₡", "");
      value = parseInt(value);
    }
    temp[key] = value;
    setData(temp);
  };
  const currentUser = JSON.parse(window.localStorage.getItem("user"));

  const handleblock = (evt) => {
    if (evt.which !== 8 && evt.target.value.length === 10) {
      evt.preventDefault();
    }
    if (evt.which === 69 || evt.which === 189 || evt.which === 187) {
      evt.preventDefault();
    }
  };

  const transfer = (event) => {
    setLoader(true);
    event.preventDefault();
    if (data.toDebit === "" || data.toCredit === "Accounts") {
      alert("Escoja una cuenta");
    } else {
      fetch("https://bankserverkonrad.herokuapp.com/transaction/transfer", {
        credentials: "include",
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
                  window.localStorage.setItem("user", JSON.stringify(res.user));
                  navigate("/bank/dashboard")
                }, 1500);
              })
              .catch((res) => {
                setMessage({ status: true, message: res.message });
                setTimeout(() => {
                  setMessage({ status: false, message: "" });
                  setLoader(false);
                  navigate("/bank/moneyTransfer")
                }, 1500);
              });
          } else {
            setMessage({ status: true, message: res.message });
            setTimeout(() => {
              setMessage({ status: false, message: "" });
              setLoader(false);
              navigate("/bank/moneyTransfer")
            }, 1500);
          }
        })
        .catch((res) => {
          setMessage({ status: true, message: res.message });
          setTimeout(() => {
            setMessage({ status: false, message: "" });
            setLoader(false);
            navigate("/bank/moneyTransfer")
          }, 1500);
        });
    }
  };

  function formatNumber(n) {
    return n.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  function formatCurrency(input, blur) {
    let input_val = input.value;

    if (input_val === "") {
      return;
    }

    if (input_val.indexOf(".") >= 0) {
      let decimal_pos = input_val.indexOf(".");

      let left_side = input_val.substring(0, decimal_pos);
      let right_side = input_val.substring(decimal_pos);

      left_side = formatNumber(left_side);

      right_side = formatNumber(right_side);

      if (blur === "blur") {
        right_side += "00";
      }

      right_side = right_side.substring(0, 2);
      if (account.type === "US") {
        input_val = "$" + left_side + "." + right_side;
      } else {
        input_val = "₡" + left_side + "." + right_side;
      }
    } else {
      input_val = formatNumber(input_val);
      if (account.type === "US") {
        input_val = "$" + input_val;
      } else {
        input_val = "₡" + input_val;
      }

      if (blur === "blur") {
        input_val += ".00";
      }
    }

    input.value = input_val;
  }

  return (
    <main className={`${base}__root`}>
      {loader ? <Loader /> : null}
      {message.status ? <Message message={message.message} /> : null}
      <div className={`${base}__wrapper`}>
        <h1 className={`${base}__title`}>Transfer Money</h1>
        <form className={`${base}__form`} onSubmit={(event) => transfer(event)}>
          <div className={`${base}__form__container`}>
            <label
              htmlFor="input-debit"
              className={`${base}__form__container__label`}
            >
              Account to Debit
            </label>
            <select
              id="input-debit"
              className={`${base}__form__container__input`}
              name="accounts"
              onInput={(event) => inputHandler("toDebit", event.target.value)}
              required
            >
              <option value={""}>Accounts</option>
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
          {data.toDebit !== "" || data.toDebit === "Accounts" ? (
            <p className={`${base}__amount`}>{`Amount Available: ${parseFloat(
              account.amount
            ).toFixed(2)}`}</p>
          ) : null}
          <div className={`${base}__form__container`}>
            <label
              htmlFor="input-amount"
              className={`${base}__form__container__label`}
            >
              Amount
            </label>
            <input
              className={`${base}__form__container__input`}
              type="text"
              id="input-amount"
              pattern="^\($|₡)\d{1,3}(,\d{3})*(\.\d+)?$"
              text="Amount is required"
              required
              minLength={1}
              onInput={(event) => inputHandler("amount", event.target.value)}
              onKeyDown={(event) => {
                handleblock(event);
              }}
              onKeyUp={(event) => formatCurrency(event.target)}
              onBlur={(event) => {
                formatCurrency(event.target);
              }}
            />
          </div>

          <div className={`${base}__form__container`}>
            <label
              htmlFor="input-credit"
              className={`${base}__form__container__label`}
            >
              Account to Credit
            </label>
            <input
              className={`${base}__form__container__input`}
              type="text"
              id="input-credit"
              pattern="(US|CR)+[0-9]{20}$"
              title="Use US or CR + IBAN number"
              maxLength={22}
              required
              onInput={(event) => inputHandler("toCredit", event.target.value)}
            />
          </div>
          <div className={`${base}__form__container--mark`}>
            <label
              htmlFor="check-transfer"
              className={`${base}__form__container__label--mark`}
            >
              Credit account is from Universal
            </label>
            <input
              className={`${base}__form__container__check`}
              type="checkbox"
              id="check-transfer"
              onInput={(event) =>
                inputHandler("typeTransaction", event.target.checked)
              }
            />
          </div>
          <div className={`${base}__form__btn-container`}>
            <button
              type="submit"
              className={`${base}__form__btn-container__btn`}
            >
              Transfer
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}

export default MoneyTransfer;
