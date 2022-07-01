import { useState } from "react";

function MoneyTransfer() {
  const base = "money-transfer";
  const [data, setData] = useState({ toDebit: "", toCredit: "", amount: "",typeTransaction:"debit",type:""});
  const [account, setAccount] = useState({})
  const inputHandler = (key, value) => {
    if(key==="toDebit"){
        let temp = currentUser.accounts.filter(account => account.IBAN === parseInt(value))[0];
        setAccount(temp);
    }
    if(key==="typeTransaction"){
        if(value){
            value="same"
        }
        else{
            value="debit"
        }
    }
    let temp = { ...data };
    temp[key] = value;
    setData(temp);
  };
  const currentUser = JSON.parse(window.localStorage.getItem('user'));
  console.log(window.localStorage.getItem('user'))
  console.log(currentUser.accounts)

  const handleblock = (evt) => {
    if (evt.which === 69 || evt.which === 189 || evt.which === 187) {
      evt.preventDefault();
    }
  };

  const transfer = (event) => {
    event.preventDefault();
    console.log(data)
    fetch("http://localhost:3000/transaction/transfer", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.message==="Transaction done!") {
          fetch(`http://localhost:3000/user/${currentUser._id}`)
            .then((res) => res.json())
            .then((res) => {
              window.localStorage.setItem('user', JSON.stringify(res.user));
              window.location.reload(false);
            })
            .catch((res) => {
              console.log(res);
            });
        } else {
          console.log(res);
        }
      })
      .catch((res) => {
        console.log(res.message);
      });
  };

  return (
    <main className={`${base}__root`}>
      <div className={`${base}__wrapper`}>
        <h1 className={`${base}__title`}>transfer Money</h1>
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
              className={`${base}__form__container__account`}
              name="accounts"
              onInput={(event) => inputHandler("toDebit", event.target.value)}
              required
            >
                <option>Accounts</option>
              {currentUser.accounts.map((account, i) => {
                    return <option
                      key={i}
                      name={account.name}
                      value={account.IBAN}
                    >{`${account.name} - ${account.IBAN}`}</option>;
                  })}
            </select>
          </div>
          <div className={`${base}__form__container`}>
            {data.toDebit !== "" ? <p className={`${base}__form__container__amount`}>{`Amount Available: ${account.amount}`}</p>:null}
            <label
              htmlFor="input-amount"
              className={`${base}__form__container__label`}
            >
              Amount
            </label>
            <input
              className={`${base}__form__container__input`}
              type="number"
              id="input-amount"
              maxLength={8}
              text="Amount is required"
              required
              onInput={(event) => inputHandler("amount", event.target.value)}
              onKeyDown={(event) => handleblock(event)}
            />
          </div>
          <div className={`${base}__form__container`}>
            <label
              htmlFor="check-transfer"
              className={`${base}__form__container__label`}
            >
              Same Bank
            </label>
            <input
              className={`${base}__form__container__check`}
              type="checkbox"
              id="check-transfer"
              value="same-bank"
              onInput={(event) => inputHandler("typeTransaction", event.target.value)}
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
              text="Account to credit is required"
              required
              onInput={(event) => inputHandler("toCredit", event.target.value)}
            />
          </div>
          <div className={`${base}__form__btn-container`}>
            <button
              type="submit"
              className={`${base}__form__btn-container-btn`}
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
