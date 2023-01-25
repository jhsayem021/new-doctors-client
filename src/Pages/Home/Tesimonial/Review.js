import React from 'react';

const Review = ({ review }) => {
    const { name, location, img, comment } = review;
    return (
        <div className="card  shadow-xl">
            <div className="card-body">

                <p>{comment}</p>
                <div className="card-actions items-center my-4">
                    <div className="avatar mr-5">
                        <div className=" rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 w-12">
                            <img src={img} />
                        </div>
                    </div>
                    <div>
                        <h4 className="text-xl">{name}</h4>
                        <p>{location}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;