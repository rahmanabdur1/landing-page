import React from 'react';
import chair from '../../src/assets/images/chair.png';
import bg from '../../src/assets/images/bg.png';

const Banner = () => {
    return (
        <header
            className="hero"
            style={{ backgroundImage: `url(${bg})` }}
            role="banner" 
        >
            <div className="hero-content flex-col lg:flex-row-reverse">
                {/* Image Section */}
                <img
                    src={chair}
                    className="rounded-lg lg:w-1/2 shadow-2xl"
                    alt="A modern and comfortable chair in a well-lit room"
                />

                {/* Text Content Section */}
                <section>
                    <h1 className="text-3xl md:text-5xl font-bold">
                        Your New Smile Starts <br /> Here
                    </h1>
                    <p className="py-6">
                        Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard dummy text
                        ever since the
                    </p>

                    <button className="btn btn-outline btn-info">Get Started</button>
                </section>
            </div>
        </header>
    );
};

export default Banner;
