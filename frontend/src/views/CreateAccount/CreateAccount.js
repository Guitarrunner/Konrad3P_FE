import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import next from "../../assets/next.png";
import Loader from "../../components/Loader/Loader";
import Message from "../../components/Message/Message";
function CreateAccount() {
  const base = "create-account";
  const [selectedFile, setSelectedFile] = useState(null);
  const [srcImg, setSrcImg] = useState("#");
  const [data, setData] = useState({
    fullName: "",
    idPhoto: "as",
    idNum: "",
    sourceIncome: "Employed/Salaried",
    email: "",
    password: "",
  });
  const [message, setMessage] = useState({ status: false, message: "" });
  const [loader, setLoader] = useState(false);
  const refPassword = useRef();
  const navigate = useNavigate();

  const inputHandler = (key, value) => {
    let temp = { ...data };
    temp[key] = value;
    setData(temp);
  };

  const onFileChange = (event) => {
    const fileX = event.target.files[0];
    if (fileX) {
      setSrcImg(window.URL.createObjectURL(fileX));
    }
    setSelectedFile(event.target.files[0]);
    let file = new FormData();
    file.append("file", event.target.files[0]);
    file.append("upload_preset", "zigps2rs");
    fetch("https://api.cloudinary.com/v1_1/daidw64zz/image/upload", {
      method: "POST",
      body: file,
    })
      .then((response) => response.json())
      .then(async (response) => {
        let temp = { ...data };
        temp["idPhoto"] = response.url;
        setData(temp);
      })
      .catch((err) => console.log("Error: ", err));
  };

  const handleblock = (evt) => {
    if (evt.target.value.length === 9 && evt.which !== 8) {
      evt.preventDefault();
    }
    if (evt.which === 69 || evt.which === 189 || evt.which === 187) {
      evt.preventDefault();
    }
  };

  const submitInfo = async (event) => {
    setLoader(true);
    event.preventDefault();
    if (data.password !== refPassword.current.value) {
      alert("Passwords dont match");
    } else {
      let temp = { ...data };
      fetch("https://bankserverkonrad.herokuapp.com/signup", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(temp),
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.message === "Succesful!") {
            setMessage({ status: true, message: "Succesful" });
            setTimeout(() => {
              window.localStorage.setItem("user", JSON.stringify(res.user));
              navigate("/login");
            }, 1500);
          } else {
            setMessage({ status: true, message: res.message });
            setTimeout(() => {
              setMessage({ status: false, message: "" });
              setLoader(false);
              navigate("/create")
            }, 1500);
          }
        })
        .catch((res) => {
          setMessage({ status: true, message: res.message });
          setTimeout(() => {
            setMessage({ status: false, message: "" });
            setLoader(false);
            navigate("/create")
          }, 1500);
        });
    }
  };

  return (
    <main className={`${base}__root`}>
      {loader ? <Loader /> : null}
      {message.status ? <Message message={message.message} /> : null}
      <div className={`${base}__header`}>
        <div className={`${base}__header__container`}>
          <h1 className={`${base}__header__container__title`}>
            Create Account
          </h1>
          <p className={`${base}__header__container__desc`}>
            Create your account to enjoy all the benefits that provides
            Universal Bank
          </p>
        </div>
      </div>
      <div className={`${base}__body`}>
        <div className={`${base}__body__container`}>
          <form
            className={`${base}__body__container__form`}
            onSubmit={(event) => submitInfo(event)}
          >
            <div className={`${base}__body__container__form__wrapper`}>
              <label htmlFor="input-full-name" className={`${base}__label`}>
                Full Name
              </label>
              <input
                className={`${base}__input`}
                type="text"
                id="input-full-name"
                required
                placeholder="John Doe"
                onInput={(event) => {
                  inputHandler("fullName", event.target.value);
                }}
              />
            </div>
            <div className={`${base}__body__container__form__wrapper`}>
              <label htmlFor="input-id" className={`${base}__label`}>
                ID
              </label>
              <input
                className={`${base}__input`}
                type="number"
                id="input-id"
                placeholder="112347890"
                title="IDs have 9 numbers!"
                maxLength={9}
                minLength={9}
                required
                onInput={(event) => {
                  inputHandler("idNum", event.target.value);
                }}
                onKeyDown={(event) => handleblock(event)}
              ></input>
            </div>
            <div className={`${base}__body__container__form__wrapper`}>
              <label htmlFor="input-id-photo" className={`${base}__label`}>
                ID Photo
              </label>
              <input
                className={`${base}__input--file`}
                type="file"
                id="input-id-photo"
                accept="image/*"
                required
                capture
                onChange={(event) => onFileChange(event)}
              />
            </div>
            {selectedFile ? (
              <div className={`${base}__preview`}>
                <img
                  className={`${base}__preview__img`}
                  src={srcImg}
                  alt="Your upload"
                />
              </div>
            ) : null}
            <div className={`${base}__body__container__form__wrapper`}>
              <label htmlFor="input-source-income" className={`${base}__label`}>
                Source of income
              </label>
              <select
                id="input-source-income"
                className={`${base}__input`}
                name="sources"
                onInput={(event) =>
                  inputHandler("sourceIncome", event.target.value)
                }
              >
                <option name="employed-salaried" value="Employed/Salaried">
                  Employed/Salaried
                </option>
                <option name="bussiness-owner" value="Bussiness Owner">
                  Bussiness Owner
                </option>
                <option name="self-employed" value="Self Employed">
                  Self Employed
                </option>
                <option name="retired" value="Retired">
                  Retired
                </option>
                <option name="investor" value="Investor">
                  Investor
                </option>
                <option name="other" value="Other">
                  Other
                </option>
              </select>
            </div>
            <div className={`${base}__body__container__form__wrapper`}>
              <label htmlFor="input-email" className={`${base}__label`}>
                Email
              </label>
              <input
                className={`${base}__input`}
                type="text"
                id="input-email"
                autoComplete="email"
                required
                placeholder="john.doe@gmail.com"
                pattern="[a-z0-9]+@[a-z]+\.[a-z]{2,3}"
                title="Wrong email"
                onInput={(event) => {
                  inputHandler("email", event.target.value);
                }}
              />
            </div>
            <div className={`${base}__body__container__form__wrapper`}>
              <label htmlFor="input-password" className={`${base}__label`}>
                Password
              </label>
              <input
                title="Password must have one upper case letter, one lower case letter, one number and one symbol and at least 8 characters long"
                pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,40}$"
                id="input-password"
                minLength={8}
                maxLength={40}
                className={`${base}__input`}
                type="password"
                autoComplete="new-password"
                required
                onInput={(event) => {
                  inputHandler("password", event.target.value);
                }}
              />
            </div>
            <div className={`${base}__body__container__form__wrapper`}>
              <label
                htmlFor="input-confirm-password"
                className={`${base}__label`}
              >
                Confirm Password
              </label>
              <input
                id="input-confirm-password"
                ref={refPassword}
                className={`${base}__input`}
                type="password"
                required
                autoComplete="off"
              />
            </div>
            <div className={`${base}__btn-container`}>
              <button type="submit" className={`${base}__btn-container__btn`}>
                Submit
                <img
                  className={`${base}__btn-container__img`}
                  src={next}
                  alt="Submit Information"
                />
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className={`${base}__login`}>
        <Link className={`${base}__login__link`} to="/login">
          Already have an account?
        </Link>
      </div>
    </main>
  );
}

export default CreateAccount;
