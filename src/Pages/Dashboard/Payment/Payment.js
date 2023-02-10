import React from 'react';
import { useLoaderData } from 'react-router-dom';
import {loadStripe} from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm'
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
console.log(stripePromise)

const Payment = () => {
    const  booking  = useLoaderData();
    const {treatment, price , appointmentDate, slot } = booking;
    console.log(booking)
    
    return (
        <div>
            <h1 className="text-3xl">Payment for {treatment} </h1>
        <p className='my-5'>Please pay <strong>${price}</strong> for your appointment on <strong>{appointmentDate}</strong> at <strong>{slot}</strong>. </p>
        <div className='w-96 my-24 p-5 rounded-lg bg-sky-200'>
        <Elements stripe={stripePromise}>
      <CheckoutForm
      booking = {booking}
      />
    </Elements>
        </div>
        
        </div>
    );
};

export default Payment;