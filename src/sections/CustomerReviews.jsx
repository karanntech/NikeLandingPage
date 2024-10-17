import React from 'react'
import { reviews } from '../constants/constants';
import ReviewCard from '../components/ReviewCard';

const CustomerReviews = () => {
  return (
    <section className='max-container'>
      <h3 className='text-center font-palanquin text-4xl font-bold'>
         What Our 
        <span className='text-coral-red'> Customers </span>
        Says?
      </h3>
      <p className='m-auto mt-4 text-center max-w-lg info-text'>
      Hear genuine stories from our satisfied customers about their
      exceptional experiences with us
      </p>

      <div className='mt-24 flex flex-1 justify-evenly items-center gap-14 max-lg:flex-col'>
        {reviews.map((review, index) => (
          <ReviewCard
          key={index}
          imgURL={review.imgURL}
          CustomerName={review.customerName}
          rating={review.rating}
          feedback={review.feedback}
          />
        ))}
      </div>
    </section>
  )
}

export default CustomerReviews;