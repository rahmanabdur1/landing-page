import React from 'react';

const Service = ({ service }) => {
    const { name, img, des } = service;

    return (
        <article 
            className="card bg-base-100 shadow-xl" 
            role="article" 
            aria-labelledby={`service-title-${name}`} 
            aria-describedby={`service-description-${name}`}
        >
            {/* Image Section */}
            <figure className="px-10 pt-10">
                <img 
                    src={img} 
                    alt={`Illustration of ${name}`} 
                    className="rounded-xl" 
                />
            </figure>

            {/* Card Content */}
            <div className="card-body items-center text-center">
                <h2 
                    id={`service-title-${name}`} 
                    className="card-title text-lg md:text-xl lg:text-2xl font-semibold"
                >
                    {name}
                </h2>
                <p 
                    id={`service-description-${name}`} 
                    className="text-sm md:text-base  text-gray-600"
                >
                    {des}
                </p>
            </div>
        </article>
    );
};

export default Service;
