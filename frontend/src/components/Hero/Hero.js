import { HashLink } from "react-router-hash-link";
import heroImage from "../../assets/bank.jpg"
import bankLogo from "../../assets/bankLogo.png"
import cardLogo from "../../assets/debit-card.png"
function Hero(props){
    const base = "hero";

    return(
    <div className={`${base}__root`}>
        <div className={`${base}__img-container`}>
            <h1 className={`${base}__img-container__title`}>This is the new bank experience</h1>
            <img className={`${base}__img-container__img`} alt="Bank Logo" src={heroImage}/>
        </div>
        <div className={`${base}__container`}>
            <div className={`${base}__container__data`}>
               
                <img className={`${base}__container__data__img`} alt="Associates" src={bankLogo} />
                <h2 className={`${base}__container__data__info`}>+450k</h2>
                <p className={`${base}__container__data__desc`}>Associates</p>
            </div>
            <div className={`${base}__container__data`}>
            <img className={`${base}__container__data__img`} alt="Accounts" src={cardLogo} />
                <h2 className={`${base}__container__data__info`}>+40</h2>
                <p className={`${base}__container__data__desc`}>Services</p>
            </div>
            <div className={`${base}__container__next`}>
                <HashLink to="#info" smooth className={`${base}__container__next__btn`}>&#8594;</HashLink>
            </div>
        </div>
    </div>)
}

export default Hero