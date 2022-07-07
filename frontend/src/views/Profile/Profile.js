import edit from "../../assets/pencil.png";

function Profile() {
  const base = "profile";
  const currentUser = JSON.parse(window.localStorage.getItem("user"));
  return (
    <main className={`${base}__root`}>
      <div className={`${base}__wrapper`}>
        <div className={`${base}__info`}>
          <div className={`${base}__image`}>
            <div className={`${base}__image__container`}>
              <img
                alt="profile"
                src={currentUser.idPhoto}
                className={`${base}__image__container__img`}
              />
            </div>
          </div>
          <div className={`${base}__info__wrapper`}>
            <div className={`${base}__info__name`}>
              <h1 className={`${base}__info__name__fullName`}>
                {currentUser.fullName}
              </h1>
              <p className={`${base}__info__name__id`}>{currentUser.idNum}</p>
              <p className={`${base}__info__name__id`}>
                Photo ID: {currentUser.idPhoto.substring(61)}
              </p>
            </div>
            <div className={`${base}__info__other`}>
              <h2 className={`${base}__info__other__title`}>
                Your information
                <img
                  src={edit}
                  className={`${base}__info__other__container__edit`}
                  alt="edit"
                />
              </h2>
              <div className={`${base}__info__other__container`}>
                <p className={`${base}__info__other__container__email`}>
                  Email: {currentUser.email}
                </p>
              </div>
              <div className={`${base}__info__other__container`}>
                <p className={`${base}__info__other__container__email`}>
                  Source of Income: {currentUser.sourceIncome}
                </p>
              </div>
              <div className={`${base}__info__other__container`}>
                <p className={`${base}__info__other__container__email`}>
                  Num. of Accounts: {currentUser.accounts.length}
                </p>
              </div>
              <div className={`${base}__info__other__container`}>
                <p className={`${base}__info__other__container__email`}>
                  Last Transaction:{" "}
                  {currentUser.log.length === 0
                    ? null
                    : currentUser.log.slice(-1)[0].date.substring(0, 16)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Profile;
