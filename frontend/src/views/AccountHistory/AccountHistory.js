import { useContext, useRef, useState } from "react";
import { MainContext } from "../../context/mainContext";

function AccountHistory() {
  const base = "account-history";
  const currentUser = JSON.parse(window.localStorage.getItem("user"));
  const pageElements = 5;
  const [currentPag, setCurrentPag] = useState(1);
  const [lastButton, setLastButton] = useState(null);
  const pages = Math.ceil(currentUser.log.length / pageElements);
  const [device,setDevice] = useContext(MainContext)
  const firstRef = useRef();
  const rootRef = useRef();
  let pagesList = [];
  for (let index = 0; index < pages; index++) {
    pagesList.push(index);
  }

  const changePage = (event, pageNumber) => {
    if (lastButton === null && event.target === firstRef.current) {
      return;
    }
    if (lastButton != null) {
      event.target.classList.toggle("on");
      lastButton.classList.toggle("on");
      setCurrentPag(pageNumber);
      setLastButton(event.target);
      rootRef.current.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      firstRef.current.classList.toggle("on");
      event.target.classList.toggle("on");
      setCurrentPag(pageNumber);
      setLastButton(event.target);
      rootRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  };
  return (
    <main className={`${base}__root`}>
      <div ref={rootRef} className={`${base}__wrapper`}>
        <h1 className={`${base}__title`}>Log</h1>

        {currentUser.log.length === 0 ? (
          <div>
            <p>You have no movements</p>
          </div>
        ) : (
          <ul className={`${base}__log-list`}>
            {device === "mobile" ? null : (
              <li className={`${base}__log-list__row`}>
                <p className={`${base}__log-list__row__item--index`}></p>
                <p className={`${base}__log-list__row__item--type`}>Type</p>
                <p className={`${base}__log-list__row__item--amount`}>Amount</p>
                <p className={`${base}__log-list__row__item--date`}>Date</p>
              </li>
            )}
            {currentUser.log.map((message, i) => {
              if (device === "mobile") {
                if (
                  pageElements * (currentPag - 1) <= i &&
                  i < pageElements * currentPag
                ) {
                  return (
                    <li tabIndex={0} key={i} className={`${base}__log-list__box`}>
                      <p className={`${base}__log-list__box__item`}>Type:</p>
                      <p className={`${base}__log-list__box__item`}>
                        {message.type}
                      </p>
                      <p className={`${base}__log-list__box__item`}>
                        Amount of transfer:{" "}
                        {parseFloat(message.amount).toFixed(2)}
                      </p>
                      <p className={`${base}__log-list__box__item`}>
                        Date: {message.date.substring(0, 16)}
                      </p>
                    </li>
                  );
                }
              } else {
                if (
                  pageElements * (currentPag - 1) <= i &&
                  i < pageElements * currentPag
                ) {
                  return (
                    <li
                      tabIndex={0}
                      key={i}
                      className={`${base}__log-list__row`}
                    >
                      <p className={`${base}__log-list__row__item--index`}>
                        {i + 1}
                      </p>
                      <p className={`${base}__log-list__row__item--type`}>
                        {message.type}
                      </p>
                      <p className={`${base}__log-list__row__item--amount`}>
                        {parseFloat(message.amount).toFixed(2)}
                      </p>
                      <p className={`${base}__log-list__row__item--date`}>
                        {message.date.substring(0, 16)}
                      </p>
                    </li>
                  );
                } else {
                  return null;
                }
              }
              return null;
            })}
          </ul>
        )}
      </div>
      <div className={`${base}__btn-container`}>
        {pagesList.map((number, i) => {
          if (number === 0) {
            return (
              <button
              tabIndex={0}
                key={i}
                aria-label={`You are in the first page`}
                ref={firstRef}
                className={`${base}__btn-container__btn on`}
                onClick={(event) => changePage(event, 1)}
              >
                1
              </button>
            );
          } else {
            return (
              <button
              tabIndex={0}
                key={i}
                aria-label={`You are in the page number ${
                  number + 1
                } of ${pages}`}
                className={`${base}__btn-container__btn`}
                onClick={(event) => changePage(event, number + 1)}
              >
                {number + 1}
              </button>
            );
          }
        })}
      </div>
    </main>
  );
}

export default AccountHistory;
