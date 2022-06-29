import { useRef, useState } from "react";
import {Link} from "react-router-dom"
import eye from "../../assets/view.png";
function Login() {
  const base = "login";
  const passwordRef = useRef();
  const [logInput, setLogInput] = useState({email:"",password:""});

  const inputHandler = (key,value) =>{
    let temp = {...logInput};
    temp[key]= value;
    setLogInput(temp);
  }

  const showPassword = (event) => {
    event.preventDefault()
    if (passwordRef.current.type === "password") {
        passwordRef.current.type = "text";
    } else {
        passwordRef.current.type = "password";
    }
  };

  const verifyUser = (event) => {
    event.preventDefault()
    fetch("http://localhost:3000",
{
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify(logInput)
})
.then((res)=>{ console.log(res) })
.catch((res)=>{ console.log(res) })
  }
  return (
    <div className={`${base}__root`}>
      <div className={`${base}__wrapper`}>
        <div className={`${base}__section`}>
          <form className={`${base}__wrapper__form`} onSubmit={(event)=>verifyUser(event)}>
            <h1 className={`${base}__wrapper__title`}>Login</h1>
            <div className={`${base}__wrapper__form__container`}>
              <label className={`${base}__wrapper__form__container__label`}>
                Email
              </label>
              <input
                className={`${base}__wrapper__form__container__input`}
                type="text"
                onInput={(event)=>inputHandler("email",event.target.value)}
                pattern="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$"
                required
              ></input>
            </div>
            <div className={`${base}__wrapper__form__container`}>
              <label className={`${base}__wrapper__form__container__label`}>
                Password
              </label>
              <div className={`${base}__wrapper__form__container__password`}>
                <input
                  className={`${base}__wrapper__form__container__password__input`}
                  ref = {passwordRef}
                  onInput={(event)=>inputHandler("password",event.target.value)}
                  type="password"
                  required
                ></input>
                <a href="" className={`${base}__wrapper__form__container__password__view`} onClick={(event)=>showPassword(event)}>
                  <img src={eye} alt="Toggle password visibility"/>
                </a>
              </div>
            </div>
            <div className={`${base}__wrapper__form__submit-container`}>
              <button
                type="submit"
                className={`${base}__wrapper__form__submit-container__submit`}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className={`${base}__section--white`}>
            <div className={`${base}__create-container`}>
                <h2 className={`${base}__create-container__title`}>New Here</h2>
                <p className={`${base}__create-container__desc`}>You can easily create an account and be part of the Universal family</p>
                <Link className={`${base}__create-container__create`} to="/create">Create Account</Link>
            </div>
            
        </div>
      </div>
    </div>
  );
}

export default Login;
