import React from "react";
import MyReviews from "./MyReviews";





const reviewData = [
  {
    name: "Khadeeja Khan",
    image: require('../../assests/img/testimonial-1.jpg'),
    review: "Absolutely loved the food and the ambiance. The service was top-notch and everything was well organized. Highly recommend!"
  },
  {
    name: "Abdul Rahman",
    image: require('../../assests/img/testimonial-2.jpg'),
    review: "One of the best dining experiences I've had in a while. The flavors were rich, and the staff was incredibly friendly."
  },
  {
    name: "Shahzaib",
    image: require('../../assests/img/testimonial-3.jpg'),
    review: "One of the best dining experiences I've had in a while. The flavors were rich, and the staff was incredibly friendly."
  }
];

const Reviews = () => {
  return (
    <section className='text-gray-600 body-font overflow-hidden'>
      <div className='container lg:max-w-[1324px] flex-nowrap px-5 lg:py-6 mx-auto'>
        <div className='flex flex-col text-center w-full mb-20'>
          <p className='title-font text-orange-400 sec-heading font-medium text-3xl mb-2'>
            Testimonials
          </p>
          <h1 className='font-nunito hero-text font-black text-black text-3xl lg:text-5xl'>
            What Our Clients Say!
          </h1>
        </div>

        <div className="flex flex-wrap">
          {reviewData.map((review, index) => (
            <MyReviews
              key={index}
              img={review.image}
              name={review.name}
              role={review.role}
              review={review.review}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
