import {useState} from "react";
import servicesList from "../../assets/services.json";

function HomeServices() {
  const base = "home-services";
  const [animate, setAnimate] = useState({animation:false,services:""});

  const changeService = (service) =>{
    if(animate.animation){
      setAnimate({animation:false,services:""})
    }
    else{
      let temp="";
      try{
        temp = servicesList.filter(services => services.name===service)[0].services;
        setAnimate({animation:true,services:temp})
      }
      catch{
        setAnimate({animation:false,services:""})
      }
      
    }
    
  }
  return (
    <div className={`${base}__root`}>
      <div className={`${base}__services`}>
      <div className={`${base}__services__wrapper`}>
          <h3 className={`${base}__services__wrapper__service`} onMouseOver={()=>changeService("Public Services")} onMouseLeave={()=>changeService("")}>
            Public Services
          </h3>
          <p className={`${base}__services__wrapper__arrow`}>&#8594;</p>
        </div>

        <div className={`${base}__services__wrapper`}>
          <h3 className={`${base}__services__wrapper__service`}>ARESEP</h3>
        </div>

        <div className={`${base}__services__wrapper`}>
          <h3 className={`${base}__services__wrapper__service`} onMouseOver={()=>changeService("CSSS")} onMouseLeave={()=>changeService("")}>CSSS</h3>
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
          {!animate.animation 
          ? <div className={`${base}__center__services__box`}>Here you'll see more services</div>
          :<div className={`${base}__center__services__box--services`}>
            {animate.services.map((service,i)=>{
              return <p key={i} className={`${base}__service`}>{service}</p>
            })}  
          </div>}
            
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
          <h3 className={`${base}__services__wrapper__service`} onMouseOver={()=>changeService("Insurance")} onMouseLeave={()=>changeService("")}>Insurance</h3>
        </div>
        <div className={`${base}__services__wrapper`}>
          <p className={`${base}__services__wrapper__arrow`}>&#8592;</p>
          <h3 className={`${base}__services__wrapper__service`} onMouseOver={()=>changeService("Donations")} onMouseLeave={()=>changeService("")}>Donations</h3>
        </div>
        <div className={`${base}__services__wrapper`}>
          <p className={`${base}__services__wrapper__arrow`}>&#8592;</p>
          <h3 className={`${base}__services__wrapper__service`} onMouseOver={()=>changeService("Ecologic")} onMouseLeave={()=>changeService("")}> Ecologic</h3>
        </div>
        <div className={`${base}__services__wrapper`}>
          <p className={`${base}__services__wrapper__arrow`}>&#8592;</p>
          <h3 className={`${base}__services__wrapper__service`} onMouseOver={()=>changeService("Education")} onMouseLeave={()=>changeService("")}>Education</h3>
        </div>
        <div className={`${base}__services__wrapper`}>
          <p className={`${base}__services__wrapper__arrow`}>&#8592;</p>
          <h3 className={`${base}__services__wrapper__service`} onMouseOver={()=>changeService("Others")} onMouseLeave={()=>changeService("")}>Others</h3>
        </div>
      </div>
    </div>
  );
}

export default HomeServices;
