function AccountHistory() {
  const base = "account-history";
  const currentUser = JSON.parse(window.localStorage.getItem("user"));
  console.log(window.localStorage.getItem("user"));
  console.log(currentUser.accounts);

  return (
    <main className={`${base}__root`}>
      <div className={`${base}__wrapper`}>
        <h1 className={`${base}__title`}>Log</h1>

        {currentUser.log.length === 0 ? (
          <div>
            <p>You have no movements</p>
          </div>
        ) : (
          currentUser.log.map((message, i) => {
            return (
              <div key={i}>
                <p>{message.type}</p>
                <p>{message.amount}</p>
                <p>{message.date}</p>
              </div>
            );
          })
        )}
      </div>
    </main>
  );
}

export default AccountHistory;
