import React from 'react';
import quote from '../../assets/icons/quote.svg';
import people1 from '../../assets/images/people1.png';
import people2 from '../../assets/images/people2.png';
import people3 from '../../assets/images/people3.png';
import Reviews from './Reviews';

const Testimonial = () => {
  const reviews = [
    {
      id: 1,
      name: 'Wison Herry',
      img: people1,
      userReview:
        'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
      location: 'California',
    },
    {
      id: 2,
      name: 'Wison Herry',
      img: people2,
      userReview:
        'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
      location: 'California',
    },
    {
      id: 3,
      name: 'Wison Herry',
      img: people3,
      userReview:
        'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
      location: 'California',
    },
  ];

  return (
    <section className="my-16" aria-labelledby="testimonial-heading">
      {/* Section Title */}
      <div className="flex justify-between items-center">
        <div>
          <h4 className="text-xl text-info font-semibold">Testimonial</h4>
          <h2 id="testimonial-heading" className="sm:text-2xl font-bold">
            What Our Patients Say
          </h2>
        </div>
        <figure>
          <img
            className="w-24 lg:w-48"
            src={quote}
            alt="Quotation mark icon"
            role="img"
            aria-label="Quotation mark icon"
          />
        </figure>
      </div>

      {/* Reviews */}
      <div className="grid gap-6 mt-10 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
        {reviews.map((review) => (
          <Reviews key={review.id} review={review} />
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
