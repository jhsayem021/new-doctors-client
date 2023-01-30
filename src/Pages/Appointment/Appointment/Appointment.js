import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import AvailableAppointments from '../AvailableAppointments/AvailableAppointments';

const Appointment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date);
    const {user} = useContext(AuthContext);
    
    return (
        <div>
            <AppointmentBanner
            selectedDate = {selectedDate}
            setSelectedDate = {setSelectedDate}
            ></AppointmentBanner>
            <AvailableAppointments
            selectedDate = {selectedDate}
            user = {user}
            ></AvailableAppointments>
        </div>
    );
};

export default Appointment;