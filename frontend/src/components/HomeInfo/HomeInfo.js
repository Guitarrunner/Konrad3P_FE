function HomeInfo (){
    const base = "home-info";
    return(
    <div className={`${base}__root`}>
        <div className={`${base}__wrapper`}>
            <div className={`${base}__wrapper__header`}>
                <h2 tabIndex="2" className={`${base}__wrapper__header__title`}>Your money is safe</h2>
                <p className={`${base}__wrapper__header__description`}>By driving responsible growth, we deliver returns to our clients and shareholders and help address society’s biggest challenges</p>
            </div>
            <div className={`${base}__wrapper__content`}>
                <div className={`${base}__wrapper__content__container--left`}>
                    <div className={`${base}__info-container`}>
                        <div className={`${base}__info-container__wrapper`}>
                            <p tabIndex="2" className={`${base}__info-container__wrapper__tag`}>1</p>
                            <h3 className={`${base}__info-container__wrapper__title`}>We have solutions for every need!</h3>
                        </div>
                        <p tabIndex="2" className={`${base}__info-container__description`}>We manage to have all your services in one place, pass money easily form one account to another in our easy to understand page</p>
                    </div>
                    <div className={`${base}__info-container`}>
                        <div className={`${base}__info-container__wrapper`}>
                            <p tabIndex="2" className={`${base}__info-container__wrapper__tag`}>2</p>
                            <h3 className={`${base}__info-container__wrapper__title`}>Fueling economic growth through jobs and skills development</h3>
                        </div>
                        <p tabIndex="2" className={`${base}__info-container__description`}>As a family, we foucs on deliver new oppportunies for your personal growth, be part of the family by joining</p>
                    </div>
                </div>
                <div className={`${base}__wrapper__content__container`}>
                <div className={`${base}__info-container`}>
                        <div className={`${base}__info-container__wrapper`}>
                            <p tabIndex="2" className={`${base}__info-container__wrapper__tag`}>3</p>
                            <h3 className={`${base}__info-container__wrapper__title`}>Make your dream house</h3>
                        </div>
                        <p tabIndex="2" className={`${base}__info-container__description`}>We are delivering on our purpose to help make financial lives better through our focus on responsible growth</p>
                    </div>
                    <div className={`${base}__info-container`}>
                        <div className={`${base}__info-container__wrapper`}>
                            <p tabIndex="2" className={`${base}__info-container__wrapper__tag`}>4</p>
                            <h3 className={`${base}__info-container__wrapper__title`}>Is time to step up and learn about finance</h3>
                        </div>
                        <p tabIndex="2" className={`${base}__info-container__description`}>We are delivering on our purpose to help make financial lives better through our focus on responsible growth</p>
                    </div>
                </div>
            </div>
        </div>

    </div>)
}

export default HomeInfo;