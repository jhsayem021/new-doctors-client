import React from 'react';
import  quote from '../../../assets/icons/quote.svg';
import people1 from '../../../assets/images/people1.png';
import people2 from '../../../assets/images/people2.png';
import people3 from '../../../assets/images/people3.png';
import Review from './Review';

const Reviews = () => {
    const reviewData = [
        {
            _id : 1,
            name: 'Winson Herry',
            img: people1,
            location: 'California',
            comment: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content'
        },
        {
            _id : 2,
            name: 'Winson Herry',
            img: people2,
            location: 'California',
            comment: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content'
        },
        {
            _id : 3,
            name: 'Winson Herry',
            img: people3,
            location: 'California',
            comment: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content'
        }
    ]
    return (

        <div className='mt-32'>
            <div className='flex items-center justify-between'>
            <div>
            <h3 className='text-xl font-bold text-secondary '>Testimonial</h3>
            <h2 className=' text-3xl  my-4 '> What Our Patients Says</h2>
            </div>
            <img className='w-32' src={quote} alt="" />
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-16'>
                {
                    reviewData.map(review => <Review
                    key={review._id}
                    review ={review}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;