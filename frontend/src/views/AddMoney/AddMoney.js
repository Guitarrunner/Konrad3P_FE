import { useState } from "react";

function AddMoney(){
    const base = "add-money";
    const [data, setData] = useState({ toDebit: "", toCredit: "", amount: "",typeTransaction:"credit",type:"US"});
    const inputHandler = (key, value) => {
      let temp = { ...data };
      if(key==="toDebit" && value.length===22){
        temp["type"] = value.substring(0,2)
        value = value.substring(2)
      }
      if(key==="typeTransaction"){
          if(value){
              value="same"
          }
          else{
              value="credit"
          }
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
      if (data.toCredit==="" || data.toCredit==="Accounts"){
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
        });
      }
      
    };
  
    return (
      <main className={`${base}__root`}>
        <div className={`${base}__wrapper`}>
          <h1 className={`${base}__title`}>Add Money</h1>
          <form className={`${base}__form`} onSubmit={(event) => transfer(event)}>
            <div className={`${base}__form__container`}>
              <label
                htmlFor="input-debit"
                className={`${base}__form__container__label`}
              >
                Account to Debit
              </label>
              <input
                className={`${base}__form__container__input`}
                type="text"
                id="input-debit"
                pattern="(US|CR)+[0-9]{20}$"
                title="Use US or CR + IBAN number"
                maxLength={22}
                required
                onInput={(event) => inputHandler("toDebit", event.target.value)}
              />
            </div>
            
            <div className={`${base}__form__container--mark`}>
              <label
                htmlFor="check-transfer"
                className={`${base}__form__container__label--mark`}
              >
                Debit account is from Universal
              </label>
              <input
                className={`${base}__form__container__check`}
                type="checkbox"
                id="check-transfer"
                value="same-bank"
                onInput={(event) => inputHandler("typeTransaction", event.target.checked)}
              />
            </div>
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
              
              <select
                id="input-credit"
                className={`${base}__form__container__input`}
                name="accounts"
                onInput={(event) => inputHandler("toCredit", event.target.value)}
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
  

export default AddMoney