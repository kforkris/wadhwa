import React from 'react';
import styles from './styles.module.scss';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const data = [
  {
    id: 1,
    images: '/images/aw-1.png',
    title: '13 REALTY+ CONCLAVE & EXCELLENCE AWARDS, 2021',
    desc: 'DEVELOPER OF THE YEAR RESIDENTIAL',
  },
  {
    id: 2,
    images: '/images/aw-2.png',
    title: 'TIMES REALTY ICONS 2020',
    desc: 'Outstanding Sales & Marketing',
  },
  {
    id: 3,
    images: '/images/aw-3.png',
    title: 'TIMES REAL ESTATE CONCLAVE & AWARDS  2021',
    desc: 'ICONIC TOWNSHIP PROJECT - THE WADHWA WISE CITY',
  },
  {
    id:4,
    images:'/images/aw-1.png',
    title: "ASIAN REAL ESTATE LEARDERSHIP AWARD",
    desc: "INNOVATIVE PROJECT OF THE YEAR 2021 - WADHWA PRISTINE"
  },
  {
    id:4,
    images:'/images/aw-2.png',
    title: "THE BEST OF BHARAT AWARDS 2022",
    desc: "PRIDE OF INDIA BRANDS"
  },
];

// Carousel responsive settings
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Index = () => {
  return (
    <div className={styles.awardsContainer}>
      <h2>AWARDS</h2>
      <p>Our Accolades over the Years</p>
      <Carousel
        responsive={responsive} // Pass the responsive settings
        infinite={true} // Enable infinite loop
        autoPlay={true} // Enable auto-play
        autoPlaySpeed={3000} // Auto-play interval (3 seconds)
        keyBoardControl={true} // Enable keyboard navigation
        customTransition="all 1s" // Smooth transition
        transitionDuration={1000} // Transition duration
        containerClass={styles.carouselContainer} // Custom container class
        itemClass={styles.carouselItem} // Custom item class
        removeArrowOnDeviceType={["mobile","desktop","tablet"]}
      >
        {data.map((item) => (
          <div key={item.id} className={styles.awardCard}>
            <img
              src={item.images}
              alt={item.title}
              style={item?.id === 2 ? { marginTop: '-180px' } : {}}
            />
            <h3>{item.title}</h3>
            <h5>{item.desc}</h5>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Index;