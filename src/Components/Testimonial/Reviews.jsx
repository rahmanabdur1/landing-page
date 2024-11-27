import React from 'react';

const Reviews = ({ review }) => {
    const { name, img, userReview, location } = review;

    return (
        <article className="card shadow-xl bg-white rounded-lg" role="article">
            <section className="card-body p-6">
                {/* Review Text */}
                <blockquote className="font-sans text-base text-gray-700 font-normal" role="contentinfo">
                    {userReview}
                </blockquote>

                {/* Reviewer Details */}
                <div className="card-actions items-center mt-6 flex flex-col md:flex-row md:items-center">
                    <figure className="avatar mr-6">
                        <div className="w-16 h-16  rounded-full bg-info border-2 border-info">
                            <img 
                                src={img} 
                                alt={`${name}'s photo`} 
                                className="object-cover w-full h-full rounded-full"
                                role="img" 
                            />
                        </div>
                    </figure>
                    <div>
                        <h5 className="text-lg font-semibold text-gray-900">{name}</h5>
                        <p className="text-sm text-gray-500">{location}</p>
                    </div>
                </div>
            </section>
        </article>
    );
};

export default Reviews;
