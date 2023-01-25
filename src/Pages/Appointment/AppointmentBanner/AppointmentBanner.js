import React, { useState } from 'react';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import chair from '../../../assets/images/chair.png'
import bgAppoint from '../../../assets/images/bg.png'


const AppointmentBanner = ({selectedDate,setSelectedDate}) => {
    
    return (
        <div
        style={{
            backgroundImage: `url(${bgAppoint})` ,
            backgroundSize: 'cover',
        }}
        className="hero  bg-base-100 py-12">
            <div className="hero-content flex-col lg:flex-row-reverse justify-evenly">
                <img src={chair} className="sm:w-1/3 w-full rounded-lg shadow-2xl" />
                <div>
                <DayPicker
      mode="single"
      selected ={selectedDate}
      onSelect ={setSelectedDate}
      
    />
    <p>You picked {format(selectedDate, 'PP')}.</p>
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;