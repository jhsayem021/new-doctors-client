import React, { useContext, useEffect, useState } from 'react';
import { format } from 'date-fns';
import AppointmentOption from './AppointmentOption';
import BookingModal from '../BookingModal/BookingModal';

const AvailableAppointments = ({selectedDate , user}) => {
    const [appointmentOptions, setAppointmentOptions] = useState([])
    const [treatment, setTreatment] = useState(null);
   
    useEffect( ()=>{
        fetch('http://localhost:5000/appointmentoptions')
        .then(res => res.json())
        .then(data => setAppointmentOptions(data))
    },[])

    return (
        <div className='mt-16  mb-10'>
            <p className='text-primary text-center font-bold' >Available Services on  {format(selectedDate, 'PP')}.</p>
            <div className='grid gap-6  grid-cols-1 lg:grid-cols-3  mt-10'>
                {
                    appointmentOptions.map(option =><AppointmentOption
                    key={option._id}
                    appointmentOption = {option}
                    setTreatment = {setTreatment}
                    ></AppointmentOption>)
                }
            </div>
            {
                treatment && <BookingModal
                treatment = {treatment}
                setTreatment = {setTreatment}
                selectedDate = {selectedDate}
                user = {user}
                ></BookingModal>
            }
        </div>
    );
};

export default AvailableAppointments;