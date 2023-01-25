import React from 'react';

const Service = ({service}) => {
    const {name, descript, icon} = service;

    return (
        <div className="card px-5 lg:flex sm:block bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={icon} alt="" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{name}</h2>
    <p>{descript}</p>

  </div>
</div>
    );
};

export default Service;