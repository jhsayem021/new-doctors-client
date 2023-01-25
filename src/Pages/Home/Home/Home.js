import React from 'react';
import InfoCards from '../InfoCards/InfoCards';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import CareInfo from '../CareInfo/CareInfo';
import Reviews from '../Tesimonial/Reviews';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <Services></Services>
            <CareInfo></CareInfo>
            <MakeAppointment></MakeAppointment>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;