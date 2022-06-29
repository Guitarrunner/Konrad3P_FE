function HomeFooter(){
    const base = "home-footer";

    return(
        <div className={`${base}__root`}>
            <div className={`${base}__wrapper`}>
                <div className={`${base}__wrapper__container`}>
                    <h2 className={`${base}__wrapper__container__title`}>Universal Bank</h2>
                </div>
                <div className={`${base}__wrapper__container`}></div>
                <div className={`${base}__wrapper__container`}>
                    <small>Call center: 2212-2000, SWIFT: BNCRCRSJ</small>
                    <small>Location: Av. 1 y 3, Street 4 San José Costa Rica</small>
                    <small>© 2020 Banco Nacional de Costa Rica. All rights reserved</small>
                </div>
            </div>
        </div>
    )
}

export default HomeFooter;