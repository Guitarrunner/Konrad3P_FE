import { useEffect, useState } from "react";
import useBreakPoint from "../../hooks/useBreakPoint";

function AccountHistory() {
  const base = "account-history";
  const currentUser = JSON.parse(window.localStorage.getItem("user"));
  const [size, setSize] = useState(0);

  let device = useBreakPoint(size);

  window.onresize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    setSize(window.innerWidth);
  }, []);

  return (
    <main className={`${base}__root`}>
      <div className={`${base}__wrapper`}>
        <h1 className={`${base}__title`}>Log</h1>

        {currentUser.log.length === 0 ? (
          <div>
            <p>You have no movements</p>
          </div>
        ) : (
          <ul className={`${base}__log-list`}>
            {device ==="mobile"
            ? null
            : <li className={`${base}__log-list__row`}>
            <p className={`${base}__log-list__row__item--index`}>
              
            </p>
            <p className={`${base}__log-list__row__item--type`}>
              Type
            </p>
            <p className={`${base}__log-list__row__item--amount`}>
              Amount
            </p>
            <p className={`${base}__log-list__row__item--date`}>
              Date
            </p>
          </li>
            }
            {currentUser.log.map((message, i) => {
              if (device === "mobile") {
                return (
                  <li key={i} className={`${base}__log-list__box`}>
                    <p className={`${base}__log-list__box__item`}>
                      Type: {message.type}
                    </p>
                    <p className={`${base}__log-list__box__item`}>
                      Amount of transfer: {parseFloat(message.amount).toFixed(2)}
                    </p>
                    <p className={`${base}__log-list__box__item`}>
                      Date: {message.date}
                    </p>
                  </li>
                );
              } else {
                if (i === 0) {
                  return(
                  
                    <li key={i} tabIndex={0} className={`${base}__log-list__row`}>
                    <p className={`${base}__log-list__row__item--index`}>
                        {i+1}
                      </p>
                      <p className={`${base}__log-list__row__item--type`}>
                        {message.type}
                      </p>
                      <p className={`${base}__log-list__row__item--amount`}>
                        {parseFloat(message.amount).toFixed(2)}
                      </p>
                      <p className={`${base}__log-list__row__item--date`}>
                        {message.date}
                      </p>
                    </li>
                  );
                } else {
                  return (
                    <li tabIndex={0} key={i} className={`${base}__log-list__row`}>
                      <p className={`${base}__log-list__row__item--index`}>
                        {i+1}
                      </p>
                      <p className={`${base}__log-list__row__item--type`}>
                        {message.type}
                      </p>
                      <p className={`${base}__log-list__row__item--amount`}>
                        {parseFloat(message.amount).toFixed(2)}
                      </p>
                      <p className={`${base}__log-list__row__item--date`}>
                        {message.date}
                      </p>
                    </li>
                  );
                }
              }
            })}
          </ul>
        )}
      </div>
    </main>
  );
}

export default AccountHistory;
