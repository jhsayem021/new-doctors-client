import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import Loading from '../../Shared/Loading/Loading';

const MyAppointment = () => {

    const {user} = useContext(AuthContext);

    const url = `https://new-doctors-server-jhsayem021.vercel.app/userbookings?email=${user.email}`;

    const {data: bookings = [] , isLoading} = useQuery({
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
    if(isLoading){
      return <Loading></Loading>;
    }
    return (
        <div>
            <h1 className="text-3xl">My Appointment</h1>

            <div className="overflow-x-auto my-6">
  <table className="table w-full">
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Treatment</th>
        <th>Schedule time</th>
        <th>Date</th>
        <th>Payment</th>
      </tr>
    </thead>
    <tbody>
   
      { bookings &&
        bookings.map((booking,i)=><tr
        key={booking._id}
        >
        <th>{i+1}</th>
        <td>{booking.patient}</td>
        <td>{booking.treatment}</td>
        <td>{booking.slot}</td>
        <td>{booking.appointmentDate}</td>
        <td>
          {
            booking.price && !booking.paid && <Link 
            to = {`/dashboard/payment/${booking._id}`}
            >
              <button className='btn btn-xs btn-primary px-4 '> pay</button>
            </Link>
          }
          {
            booking.price && booking.paid && <span className=' text-cyan-400 '> Paid</span>
              
          }
        </td>
      </tr>)
      }
   
      
    </tbody>
  </table>
</div>
            
        </div>
    );
};

export default MyAppointment;