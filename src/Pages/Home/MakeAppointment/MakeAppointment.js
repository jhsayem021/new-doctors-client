import React from 'react';
import { Link } from 'react-router-dom';
import doctor from '../../../assets/images/doctor.png'

const MakeAppointment = () => {
    return (
        <div className="hero bg-accent mt-40">
  <div className="hero-content flex-col lg:flex-row mb-6 sm:-mb-4">
    <img src={doctor} className="-mt-48 lg:w-1/2 sm:w-full rounded-lg " />
    <div className='text-white '>
      <h1 className='text-xl font-bold text-secondary  '>Appointment</h1>
      <h1 className="text-3xl font-bold my-6">Make an appointment Today</h1>
      <p className="py-4">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
      <Link to="/appointment" className="btn btn-primary  bg-gradient-to-r from-primary to-secondary">Get Started</Link>
    </div>
  </div>
</div>
    );
};

export default MakeAppointment;