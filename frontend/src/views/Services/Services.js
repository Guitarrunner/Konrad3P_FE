import { useState } from "react";
import prices from "../../assets/prices.json"
function Services(){
    const base = "services";
    const [data, setData] = useState({ account: "", type:""});
    const inputHandler = (key, value) => {
  
      let temp = { ...data };
      temp[key] = value;
      setData(temp);
    };
    const currentUser = JSON.parse(window.localStorage.getItem('user'));
    console.log(window.localStorage.getItem('user'))
    console.log(currentUser.accounts)
  

  
    const transfer = (event) => {
      event.preventDefault();
      console.log(data)
      fetch("http://localhost:3000/transaction/service", {
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
          <h1 className={`${base}__title`}>Services</h1>
          <form className={`${base}__form`} onSubmit={(event) => transfer(event)}>
            {currentUser.services.length===0 
            ? <div>
                <p>You pay all your services</p>
            </div>
            :<div className={`${base}__form__container`}>
            <label
              htmlFor="input-service"
              className={`${base}__form__container__label`}
            >
              Service to pay
            </label>
            <select
              id="input-service"
              className={`${base}__form__container__account`}
              name="service"
              onInput={(event) => inputHandler("type", event.target.value)}
              required
            >
                <option>Services</option>
              {currentUser.services.map((servicex, i) => {
                    return <option
                      key={i}
                      name={servicex}
                      value={servicex}
                    >{`${servicex} - ${prices.filter(service => service.name === servicex)[0].value}`}</option>;
                  })}
            </select>
          </div>}
            
            <div className={`${base}__form__container`}>
              <label
                htmlFor="input-credit"
                className={`${base}__form__container__label`}
              >
                Account to Credit
              </label>
              
              <select
                id="input-credit"
                className={`${base}__form__container__account`}
                name="accounts"
                onInput={(event) => inputHandler("account", event.target.value)}
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
                className={`${base}__form__btn-container-btn`}
              >
                Pay Service
              </button>
            </div>
          </form>
        </div>
      </main>
    );
  }
  

export default Services