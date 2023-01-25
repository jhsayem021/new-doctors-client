import React from 'react';

const AppointmentOption = ({appointmentOption, setTreatment}) => {
    const {name,slots} = appointmentOption;
    return (
        <div className="card  bg-base-100 shadow-xl">
  <div className="card-body items-center">
    <h2 className="card-title text-primary text-center">{name}</h2>
     {(slots.length > 0) ? slots[0] : 'Try another day'} 
    <p> {slots.length } {slots.length>1 ? 'spaces' : 'space'} available</p>
    <div className="card-actions ">
      
      <label 
        onClick={()=> setTreatment(appointmentOption)}
      htmlFor="Booking-Modal"
       className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white ">Book Appointment</label>
    </div>
  </div>
</div>
    );
};

export default AppointmentOption;