import React from 'react';
import doctor from '../assets/images/doctor.png';
import appointment from '../assets/images/appointment.png';

const MakeAppointment = () => {
  return (
    <section className="mt-32">
      <div
        className="hero bg-cover bg-center" 
        style={{ backgroundImage: `url(${appointment})` }}
        role="banner"  // Using ARIA role for better accessibility
        aria-label="Appointment background"
      >
        <div className="hero-content flex-col lg:flex-row gap-10">
          {/* Image Section */}
          <figure className="lg:w-1/2 -mt-32 hidden md:block lg:block">
            <img 
              src={doctor} 
              alt="Doctor consultation for appointment"  // Descriptive alt text
              className="rounded-lg shadow-lg w-full h-full object-cover" 
              loading="lazy"  // Optimizes image loading
            />
          </figure>

          {/* Text Section */}
          <div className="lg:w-1/3 text-center lg:text-left">
            <h4 
              className="text-3xl sm:text-4xl lg:text-4xl text-info font-semibold"
              id="appointment-heading"  // Better for screen readers
            >
              Appointment
            </h4>
            <h1 
              className="text-4xl sm:text-5xl mt-5 lg:text-4xl text-white font-bold"
              id="make-appointment-heading"
              role="heading"  // Ensures this is recognized as a heading by screen readers
            >
              Make an Appointment Today
            </h1>
            <p 
              className="py-6 text-white text-sm sm:text-base  font-medium"
              id="appointment-description"
              role="contentinfo"  // Adding a role for better understanding
            >
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web pages use it.
            </p>
            
            <button className="btn btn-outline  btn-info">Get Started</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakeAppointment;
