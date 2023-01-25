import React from 'react';
import clock from '../../../assets/icons/clock.svg'
import marker from '../../../assets/icons/marker.svg'
import phone from '../../../assets/icons/phone.svg'
import InfoCard from './InfoCard';

const InfoCards = () => {
    const cards = [
        {
            id: 1,
            name: 'Opening Hours',
            descript: 'Lorem Ipsum is simply dummy text',
            icon: clock ,
            bgtheme: 'bg-gradient-to-r from-primary to-secondary'
        },
        {
            id: 2,
            name: 'Visit our location',
            descript: 'Brooklyn, NY 10036, United States',
            icon: marker ,
            bgtheme: 'bg-accent'
        },
        {
            id: 3,
            name: 'Contact us now',
            descript: '+000 123 456789',
            icon: phone ,
            bgtheme: 'bg-gradient-to-r from-primary to-secondary'
        },
    ]
    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 mt-24 '>
            {
                cards.map(card=><InfoCard
                key={card.id}
                card={card}
                ></InfoCard>)
            }
        </div>
    );
};

export default InfoCards;