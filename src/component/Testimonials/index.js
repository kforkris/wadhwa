


import React from 'react';
import styles from './styles.module.scss';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const testimonialsData = [
  {
    id: 1,
    quote:
      '"I am really thankful to Wadhwa Group and its team for giving me an opportunity to invest in such a beautiful location. A beautiful mountain with such a greenery around the project provides a feel of a vacation home within the City. We always had a dream to have one house near nature\'s beauty which came true after taking flat at Wadhwa WiseCity."',
    image:  "/images/Jayesh-Babla.png",
    name: 'Jayesh Babla',
  },
  {
    id: 2,
    quote:
      '“Our family has lived in Ghatkopar for over 3 generations. As the family grew, we needed a bigger home. When we heard about The Address, we realized it was just perfect for our requirement. It is an integrated township where being home itself feels like being on a holiday.”	',
      image:  "/images/testimonial4.png",
      name: 'Ramesh Morabia',
    designation: 'Wadhwa Group Customer	',
  },
  {
    id: 3,
    quote:
      '“Passion, dedication, devotion yet different - all are synonyms to The Wadhwa Group.”',
      image:  "/images/testimonial2.png",
      name: 'Anuj Puri',
    designation: 'Former Chairman & Country Head, Jones Lang LaSalle, India	',
  },
  {
    id: 4,
    quote:
      '“Since most of their developments meet the global technology standards, our experience is that most of the clients do not mind paying a premium, and that sets the Wadhwas apart”	',
      image:  "/images/testimonial6.png",
      name: 'Uma Shankar Mehta',
    designation: 'Associate Director, DTZ India',
  },
  {
    id: 5,
    quote:
    '"The Wadhwa efforts for the  project location and availability of the property at affordable is highly appreciable. Wadhwa has kept all the transparency of the deal in terms of payment terms, amount transaction"	',
      image:  "/images/testimonial7.png",
      name: 'Jagdish Arekar',
  },
];

// Carousel responsive settings
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Index = () => {
  return (
    <div className={styles.testimonialContainer}>
      <h2>TESTIMONIALS</h2>
      <Carousel
        responsive={responsive} // Pass the responsive settings
        infinite={true} // Enable infinite loop
        autoPlay={true} // Enable auto-play
        autoPlaySpeed={5000} // Auto-play interval (5 seconds)
        keyBoardControl={true} // Enable keyboard navigation
        customTransition="all 1s" // Smooth transition
        transitionDuration={1000} // Transition duration
        containerClass={styles.carouselContainer} // Custom container class
        itemClass={styles.carouselItem} // Custom item class
      >
        {testimonialsData.map((testimonial) => (
            <>
              <p>{testimonial.quote}</p>
              <div className={styles.testimonialImg}>
            <img src={testimonial.image} alt={testimonial.name} />
              </div>
            <h5>{testimonial.name}</h5>
            <h6>{testimonial.designation}</h6>
            </>
        ))}
      </Carousel>
    </div>
  );
};

export default Index;