import React from 'react';
import fluoride from '../../assets/images/fluoride.png';
import cavity from '../../assets/images/cavity.png';
import whitening from '../../assets/images/whitening.png';
import Service from './Service';

const Services = () => {
    const services = [
        {
            id: 1,
            name: 'Fluoride Treatment',
            des: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s.',
            img: fluoride,
        },
        {
            id: 2,
            name: 'Cavity Treatment',
            des: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s.',
            img: cavity,
        },
        {
            id: 3,
            name: 'Whitening Treatment',
            des: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s.',
            img: whitening,
        },
    ];

    return (
        <section
            className=""
            role="region"
            aria-labelledby="services-title"
        >
            {/* Header Section */}
            <div className="text-center pt-16">
                <h2
                    id="services-title"
                    className="text-xl  font-bold text-info uppercase"
                >
                    Our Services
                </h2>
                <p className="text-lg md:text-2xl lg:text-3xl mt-2">
                    Services We Provide
                </p>
            </div>

            {/* Services Grid */}
            <div className="grid gap-6 mt-10 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
                {services.map((service) => (
                    <Service
                        key={service.id}
                        service={service}
                    />
                ))}
            </div>
        </section>
    );
};

export default Services;
