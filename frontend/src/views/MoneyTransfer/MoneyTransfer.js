import { useState } from "react";

function MoneyTransfer() {
  const base = "money-transfer";
  const [data, setData] = useState({ toDebit: "", toCredit: "", amount: "",typeTransaction:"debit",type:""});
  const [account, setAccount] = useState({})
  const inputHandler = (key, value) => {
    let temp = { ...data };
    if(key==="toDebit"){
        let acc = currentUser.accounts.filter(account => account.IBAN === parseInt(value))[0];
        setAccount(acc);
    }
    if(key==="typeTransaction"){
        if(value){
            value="same"
        }
        else{
            value="debit"
        }
    }
    if(key==="toCredit" && value.length===22){
      temp["type"] = value.substring(0,2)
      value = value.substring(2)
    }
    
    temp[key] = value;
    setData(temp);
  };
  const currentUser = JSON.parse(window.localStorage.getItem('user'));


  const handleblock = (evt) => {
    if (evt.which === 69 || evt.which === 189 || evt.which === 187 || evt.target.value.length===10) {
      evt.preventDefault();
    }
  };

  const transfer = (event) => {
    event.preventDefault();
    if (data.toDebit==="" || data.toCredit==="Accounts"){
      alert("Escoja una cuenta")
    }
    else{
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
      });}
  };

  return (
    <main className={`${base}__root`}>
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
                    return <option
                      key={i}
                      name={account.name}
                      value={account.IBAN}
                    >{`${account.name} - ${account.IBAN}`}</option>;
                  })}
            </select>
          </div>
          {(data.toDebit !== "" || data.toDebit==="Accounts")? <p className={`${base}__amount`}>{`Amount Available: ${ parseFloat(account.amount).toFixed(2)}`}</p>:null}
          <div className={`${base}__form__container`}>
            
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
              onInput={(event) => inputHandler("typeTransaction", event.target.checked)}
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
