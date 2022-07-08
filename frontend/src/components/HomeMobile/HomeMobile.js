import { Link } from "react-router-dom";
import services from "../../assets/fullServices.json";
import mastercard from "../../assets/mastercard.png";
import sinpe from "../../assets/sinpe.png";
import konrad from "../../assets/konrad.jpeg";
import bac from "../../assets/bac.png";
import amex from "../../assets/amex.png";
import visa from "../../assets/visa.png";
import home from "../../assets/home.jpg";
import login from "../../assets/login.png";
function HomeMobile() {
  const base = "home-mobile";
  return (
    <main className={`${base}__root`}>
      <div className={`${base}__wrapper`}>
        <Link to="/login" className={`${base}__login`}><img src={login} alt="login" aria-label="login" className={`${base}__login__img`}/></Link>
        <div className={`${base}__section`}>
          <img className={`${base}__section__img`} src={home} alt="bank" />
          <h1 className={`${base}__section__title`}>Universal bank</h1>
          <p className={`${base}__section__desc`}>The new bank experience</p>
          <p className={`${base}__section__scroll`}>
            Scroll left to view more
            <span className={`${base}__section__arrow`}>&#8594;</span>
          </p>
        </div>
        <div className={`${base}__section`}>
          <h2 className={`${base}__section__subtitle`}>Your money is safe</h2>
          <div className={`${base}__section__box`}>
            <div className={`${base}__section__box__paragraph`}>
                <h3>Grow with us</h3>
              <p className={`${base}__section__box__paragraph__text`}>
                By driving responsible growth, we deliver returns to our clients
                and shareholders and help address society’s biggest challenges
              </p>
            </div>
            <div className={`${base}__section__box__paragraph`}>
            <h3>All services here</h3>
              <p className={`${base}__section__box__paragraph__text`}>
                {" "}
                We manage to have all your services in one place, pass money
                easily form one account to another in our easy to understand
                page
              </p>
            </div>
            <div className={`${base}__section__box__paragraph`}>
            <h3>Financial advice</h3>
              <p className={`${base}__section__box__paragraph__text`}>
                We are delivering on our purpose to help make financial lives
                better through our focus on responsible growth
              </p>
            </div>
            <div className={`${base}__section__box__paragraph`}>
            <h3>Time to build your house</h3>
              <p className={`${base}__section__box__paragraph__text`}>
                This is your opportunity to keep growing and make your dreams
                come true by owning your house in our easy steps.
              </p>
            </div>
          </div>
        </div>
        <div className={`${base}__section`}>
          <h2 className={`${base}__section__subtitle`}>Services</h2>
          <div className={`${base}__section__box`}>
            {services.map((service, i) => {
              return (
                <div
                  tabIndex={0}
                  key={i}
                  className={`${base}__section__box__item`}
                >
                  {service.name}
                </div>
              );
            })}
          </div>
        </div>
        <div className={`${base}__section`}>
          <h2 className={`${base}__section__subtitle`}>Our trusted partners</h2>
          <div className={`${base}__section__box`}>
            <div className={`${base}__section__box__img-container`}>
              <img
                tabIndex="0"
                alt="Partner Mastercard"
                src={mastercard}
                className={`${base}__section__box__img-container__img`}
              />
            </div>
            <div className={`${base}__section__box__img-container`}>
              <img
                tabIndex="0"
                alt="Partner Visa"
                src={visa}
                className={`${base}__section__box__img-container__img`}
              />
            </div>
            <div className={`${base}__section__box__img-container`}>
              <img
                tabIndex="0"
                alt="Partner Amex"
                src={amex}
                className={`${base}__section__box__img-container__img`}
              />
            </div>
            <div className={`${base}__section__box__img-container`}>
              <img
                tabIndex="0"
                alt="Partner Sinpe"
                src={sinpe}
                className={`${base}__section__box__img-container__img`}
              />
            </div>
            <div className={`${base}__section__box__img-container`}>
              <img
                tabIndex="0"
                alt="Partner Bac"
                src={bac}
                className={`${base}__section__box__img-container__img`}
              />
            </div>
            <div className={`${base}__section__box__img-container`}>
              <img
                tabIndex="0"
                alt="Partner Konrad"
                src={konrad}
                className={`${base}__section__box__img-container__img`}
              />
            </div>
          </div>
        </div>

        <div className={`${base}__section--last`}>
          <div className={`${base}__section__footer`}>
            <h2 className={`${base}__section__footer__title`}>
              Universal Bank
            </h2>
          </div>
          <div className={`${base}__section__footer`}></div>
          <div className={`${base}__section__footer`}>
            <small>Call center: 2212-2000, SWIFT: BNCRCRSJ</small>
            <small>Location: Av. 1 y 3, Street 4 San José Costa Rica</small>
            <small>
              © 2020 Banco Nacional de Costa Rica. All rights reserved
            </small>
          </div>
        </div>
      </div>
    </main>
  );
}

export default HomeMobile;
