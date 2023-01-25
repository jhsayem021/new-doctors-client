import React from 'react';
import treatment from '../../../assets/images/treatment.png'
const CareInfo = () => {
    return (
        <div className="hero  mt-32">
  <div className="hero-content flex-col lg:flex-row justify-evenly ">
    <img src={treatment} className=" lg:w-1/3 sm:w-full rounded-lg " />
    <div className='text-black lg:w-1/3'>
    
      <h1 className="text-4xl font-bold my-6">Exceptional Dental Care, on Your Terms</h1>
      <p className="py-4">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
      <button className="btn btn-primary  bg-gradient-to-r from-primary to-secondary">Get Started</button>
    </div>
  </div>
</div>
    );
};

export default CareInfo;