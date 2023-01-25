import React from 'react';

const InfoCard = (props) => {
    const {name , descript , bgtheme,icon} = props.card;
    return (
        
            <div  className= {`card card-side text-white   p-6 bg-base-100 shadow-xl ${bgtheme}`} >
  <figure><img className=' ' src={icon} alt=""/></figure>
  <div className="card-body  ">
    <h2 className="card-title ">{name}</h2>
    <p>{descript}</p>
    
  </div>
</div>
        
    );
};

export default InfoCard;