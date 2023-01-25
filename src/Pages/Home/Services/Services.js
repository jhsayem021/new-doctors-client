import React from 'react';
import fluoride from '../../../assets/images/fluoride.png'
import cavity from '../../../assets/images/cavity.png'
import whitening from '../../../assets/images/whitening.png'
import Service from './Service';
const Services = () => {
    const ServiceData = [
        {
            id: 1,
            name: 'Fluoride Treatment',
            descript: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            icon: fluoride 
            
        },
        {
            id: 2,
            name: 'Cavity Filling',
            descript: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            icon: cavity 
           
        },
        {
            id: 3,
            name: 'Teeth Whitening',
            descript: '+000 123 456789',
            icon: whitening
            
        }
    ]
    return (
        <div>
            <div className=' text-center mt-24 '>
                    <h3 className='text-xl font-bold text-primary uppercase '>Our Services</h3>
                    <h2 className=' text-3xl  my-6 '> Services We Provide</h2>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 mt-18 '>
                {
                    ServiceData.map(service => <Service
                    key={service.id}
                    service ={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;