import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';

const MyAppointment = () => {

    const {user} = useContext(AuthContext);

    const url = `https://new-doctors-server-jhsayem021.vercel.app/userbookings?email=${user.email}`;

    const {data: bookings = [] } = useQuery({
        queryKey:['bookings', user?.email],
        queryFn: async ()=>{
          const res = await fetch(url , {
            headers:{
              authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
          })
          const data = await res.json()
          return data;
        
        }
    })
    console.log(bookings);

    return (
        <div>
            <h1 className="text-3xl">My Appointment</h1>

            <div className="overflow-x-auto my-6">
  <table className="table w-full">
    <thead>
      <tr>
        <th>SL</th>
        <th>Name</th>
        <th>Treatment</th>
        <th>Schedule time</th>
        <th>Date</th>
      </tr>
    </thead>
    <tbody>
   
      {
        bookings.map((booking,i)=><tr>
        <th>{i+1}</th>
        <td>{booking.patient}</td>
        <td>{booking.treatment}</td>
        <td>{booking.slot}</td>
        <td>{booking.appointmentDate}</td>
      </tr>)
      }
   
      
    </tbody>
  </table>
</div>
            
        </div>
    );
};

export default MyAppointment;