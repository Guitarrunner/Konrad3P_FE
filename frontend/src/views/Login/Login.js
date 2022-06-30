import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import eye from "../../assets/view.png";
import closeEye from "../../assets/private.png";
function Login() {
  const base = "login";
  const passwordRef = useRef();
  const eyeRef = useRef()
  const [logInput, setLogInput] = useState({ email: "", password: "" });
  const navigate = useNavigate()

  const inputHandler = (key, value) => {
    let temp = { ...logInput };
    temp[key] = value;
    setLogInput(temp);
  };

  const showPassword = (event) => {
    event.preventDefault();
    if (passwordRef.current.type === "password") {
      eyeRef.current.src = closeEye; 
      passwordRef.current.type = "text";
    } else {
      eyeRef.current.src = eye; 
      passwordRef.current.type = "password";
    }
  };

  const verifyUser = (event) => {
    event.preventDefault();
    fetch("http://localhost:3000/login", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(logInput),
    })
      .then((res) => res.json())
      .then((res) => {
        if(res.token){
          var now = new Date();
        var time = now.getTime();
        var expireTime = time + 1000*36000;
        now.setTime(expireTime);
        document.cookie = `token=${res.token};expires=${now.toUTCString()};path=/`;
        navigate("/dashboard")
        
        }else{
          console.log(res);
        }
        
      })
      .catch((res) => {
        console.log(res);
      });
  };
  return (
    <div className={`${base}__root`}>
      <div className={`${base}__wrapper`}>
        <div className={`${base}__section`}>
          <form
            className={`${base}__wrapper__form`}
            onSubmit={(event) => verifyUser(event)}
          >
            <h1 className={`${base}__wrapper__title`}>Login</h1>
            <div className={`${base}__wrapper__form__container`}>
              <label className={`${base}__wrapper__form__container__label`}>
                Email
              </label>
              <input
                className={`${base}__wrapper__form__container__input`}
                type="text"
                onInput={(event) => inputHandler("email", event.target.value)}
                pattern="[a-z0-9]+@[a-z]+\.[a-z]{2,3}"
                title="Wrong email"
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
                  ref={passwordRef}
                  onInput={(event) =>
                    inputHandler("password", event.target.value)
                  }
                  type="password"
                  title="Password must have one upper case letter, one lower case letter, one number and one symbol and at least 8 characters long"
                  pattern ="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,40}$"
                  minLength={8}
                  maxLength={40}
                  required
                ></input>
                <button
                  className={`${base}__wrapper__form__container__password__view`}
                  onClick={(event) => showPassword(event)}
                >
                  <img ref={eyeRef} src={eye} alt="Toggle password visibility" />
                </button>
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
            <p className={`${base}__create-container__desc`}>
              You can easily create an account and be part of the Universal
              family
            </p>
            <Link className={`${base}__create-container__create`} to="/create">
              Create Account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
