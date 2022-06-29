import mastercard from "../../assets/mastercard.png"
import sinpe from "../../assets/sinpe.png"
import konrad from "../../assets/konrad.jpeg"
function HomePartners(){
    const base = "home-partners";

    return(
        <div className={`${base}__root`}>
            <div className={`${base}__wrapper`}>
                <h2 className={`${base}__wrapper__title`}>Our trusted partners</h2>
                <div className={`${base}__wrapper__img-container`}>
                    <img alt="Partner 1" src={mastercard} className={`${base}__wrapper__img-container__img`}/>
                </div>
                <div className={`${base}__wrapper__img-container`}>
                    <img alt="Partner 1" src={sinpe} className={`${base}__wrapper__img-container__img`}/>
                </div>
                <div className={`${base}__wrapper__img-container`}>
                    <img alt="Partner 1" src={konrad} className={`${base}__wrapper__img-container__img`}/>
                </div>
            </div>
        </div>
    )
}

export default HomePartners;