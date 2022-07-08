import { useState } from "react";
import servicesList from "../../assets/services.json";

function HomeServices() {
  const base = "home-services";
  const [animate, setAnimate] = useState({ animation: false, services: "" });

  const changeService = (service) => {
    if (animate.animation) {
      setAnimate({ animation: false, services: "" });
    } else {
      let temp = "";
      try {
        temp = servicesList.filter((services) => services.name === service)[0]
          .services;
        setAnimate({ animation: true, services: temp });
      } catch {
        setAnimate({ animation: false, services: "" });
      }
    }
  };
  return (
    <div className={`${base}__root`}>
      <div className={`${base}__services`}>
        <div className={`${base}__services__wrapper`}>
          <h2 tabIndex="0" className={`${base}__services__wrapper__service`}>
            Fees and Credits
          </h2>
        </div>

        <div className={`${base}__services__wrapper`}>
          <h2 tabIndex="0" className={`${base}__services__wrapper__service`}>
            ARESEP
          </h2>
        </div>

        <div className={`${base}__services__wrapper`}>
          <h2 tabIndex="0" className={`${base}__services__wrapper__service`}>
            Security companies
          </h2>
        </div>

        <div className={`${base}__services__wrapper`}>
          <h2 tabIndex="0" className={`${base}__services__wrapper__service`}>
            Billing
          </h2>
        </div>

        <div className={`${base}__services__wrapper`}>
          <h2 tabIndex="0" className={`${base}__services__wrapper__service`}>
            Professional Colleges
          </h2>
        </div>
        <div className={`${base}__services__wrapper`}>
          <h2
            tabIndex="0"
            className={`${base}__services__wrapper__service`}
            onBlur={() => changeService("")}
            onFocus={() => changeService("Public Services")}
            onMouseOver={() => changeService("Public Services")}
            onMouseLeave={() => changeService("")}
          >
            Public Services
          </h2>
          <p className={`${base}__services__wrapper__arrow`}>&#8594;</p>
        </div>
      </div>
      <div className={`${base}__center`}>
        <h1 tabIndex="0" className={`${base}__center__title`}>
          We have +40 services for your convenience
        </h1>
        <div className={`${base}__center__services`}>
          {!animate.animation ? (
            <div className={`${base}__center__services__box`}>
              Here you'll see more services
            </div>
          ) : (
            <div className={`${base}__center__services__box--services`}>
              {animate.services.map((service, i) => {
                return (
                  <p tabIndex="1" key={i} className={`${base}__service`}>
                    {service}
                  </p>
                );
              })}
            </div>
          )}
        </div>
      </div>
      <div className={`${base}__services`}>
        <div className={`${base}__services__wrapper`}>
          <p className={`${base}__services__wrapper__arrow`}>&#8592;</p>
          <h2
            tabIndex="0"
            className={`${base}__services__wrapper__service`}
            onBlur={() => changeService("")}
            onFocus={() => changeService("CSSS")}
            onMouseOver={() => changeService("CSSS")}
            onMouseLeave={() => changeService("")}
          >
            CSSS
          </h2>
        </div>
        <div className={`${base}__services__wrapper`}>
          <p className={`${base}__services__wrapper__arrow`}>&#8592;</p>
          <h2
            tabIndex="0"
            className={`${base}__services__wrapper__service`}
            onBlur={() => changeService("")}
            onFocus={() => changeService("Insurance")}
            onMouseOver={() => changeService("Insurance")}
            onMouseLeave={() => changeService("")}
          >
            Insurance
          </h2>
        </div>
        <div className={`${base}__services__wrapper`}>
          <p className={`${base}__services__wrapper__arrow`}>&#8592;</p>
          <h2
            tabIndex="0"
            className={`${base}__services__wrapper__service`}
            onBlur={() => changeService("")}
            onFocus={() => changeService("Donations")}
            onMouseOver={() => changeService("Donations")}
            onMouseLeave={() => changeService("")}
          >
            Donations
          </h2>
        </div>
        <div className={`${base}__services__wrapper`}>
          <p className={`${base}__services__wrapper__arrow`}>&#8592;</p>
          <h2
            tabIndex="0"
            className={`${base}__services__wrapper__service`}
            onBlur={() => changeService("")}
            onFocus={() => changeService("Ecologic")}
            onMouseOver={() => changeService("Ecologic")}
            onMouseLeave={() => changeService("")}
          >
            {" "}
            Ecologic
          </h2>
        </div>
        <div className={`${base}__services__wrapper`}>
          <p className={`${base}__services__wrapper__arrow`}>&#8592;</p>
          <h2
            tabIndex="0"
            className={`${base}__services__wrapper__service`}
            onBlur={() => changeService("")}
            onFocus={() => changeService("Education")}
            onMouseOver={() => changeService("Education")}
            onMouseLeave={() => changeService("")}
          >
            Education
          </h2>
        </div>
        <div className={`${base}__services__wrapper`}>
          <p className={`${base}__services__wrapper__arrow`}>&#8592;</p>
          <h2
            tabIndex="0"
            className={`${base}__services__wrapper__service`}
            onBlur={() => changeService("")}
            onFocus={() => changeService("Others")}
            onMouseOver={() => changeService("Others")}
            onMouseLeave={() => changeService("")}
          >
            Others
          </h2>
        </div>
      </div>
    </div>
  );
}

export default HomeServices;
