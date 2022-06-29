function HomeServices() {
  const base = "home-services";

  return (
    <div className={`${base}__root`}>
      <div className={`${base}__services`}>
        <div className={`${base}__services__wrapper`}>
          <h3 className={`${base}__services__wrapper__service`}>
            Public Services
          </h3>
          <p className={`${base}__services__wrapper__arrow`}>&#8594;</p>
        </div>

        <div className={`${base}__services__wrapper`}>
          <h3 className={`${base}__services__wrapper__service`}>ARESEP</h3>
        </div>

        <div className={`${base}__services__wrapper`}>
          <h3 className={`${base}__services__wrapper__service`}>CSSS</h3>
          <p className={`${base}__services__wrapper__arrow`}>&#8594;</p>
        </div>

        <div className={`${base}__services__wrapper`}>
          <h3 className={`${base}__services__wrapper__service`}>
            Security companies
          </h3>
        </div>

        <div className={`${base}__services__wrapper`}>
          <h3 className={`${base}__services__wrapper__service`}>Billing</h3>
        </div>

        <div className={`${base}__services__wrapper`}>
          <h3 className={`${base}__services__wrapper__service`}>
            Professional Colleges
          </h3>
        </div>
      </div>
      <div className={`${base}__center`}>
        <h2 className={`${base}__center__title`}>
          We have +40 services for your convenience
        </h2>
        <div className={`${base}__center__services`}>
            <div className={`${base}__center__services__box`}>Here you'll see more services</div>
        </div>
      </div>
      <div className={`${base}__services`}>
        <div className={`${base}__services__wrapper`}>
          <h3 className={`${base}__services__wrapper__service`}>
            Fees and Credits
          </h3>
        </div>
        <div className={`${base}__services__wrapper`}>
          <p className={`${base}__services__wrapper__arrow`}>&#8592;</p>
          <h3 className={`${base}__services__wrapper__service`}>Insurance</h3>
        </div>
        <div className={`${base}__services__wrapper`}>
          <p className={`${base}__services__wrapper__arrow`}>&#8592;</p>
          <h3 className={`${base}__services__wrapper__service`}>Donations</h3>
        </div>
        <div className={`${base}__services__wrapper`}>
          <p className={`${base}__services__wrapper__arrow`}>&#8592;</p>
          <h3 className={`${base}__services__wrapper__service`}>Ecologic</h3>
        </div>
        <div className={`${base}__services__wrapper`}>
          <p className={`${base}__services__wrapper__arrow`}>&#8592;</p>
          <h3 className={`${base}__services__wrapper__service`}>Education</h3>
        </div>
        <div className={`${base}__services__wrapper`}>
          <p className={`${base}__services__wrapper__arrow`}>&#8592;</p>
          <h3 className={`${base}__services__wrapper__service`}>Others</h3>
        </div>
      </div>
    </div>
  );
}

export default HomeServices;
