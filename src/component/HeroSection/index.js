import React from 'react';
import styles from './styles.module.scss';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


// Array of objects for carousel items
const carouselData = [
  {
    image: '/images/home-banner1.jpg', // Background image for the first slide
    title: 'LANDMARKS PLANNED WITH PASSION',
    description: 'Transforming Mumbai’s Skyline Since 1969 ',
    location: 'PRISTINE, MATUNGA WEST',
    rightBanner: "/images/home-right-banner.png"
  },
  {
    image: '/images/home-banner2.jpg', // Background image for the second slide
    title: 'LANDMARKS PLANNED WITH PASSION',
    description: 'Transforming Mumbai’s Skyline Since 1969 ',
    location: 'DUKES HORIZON, CHEMBUR EAST',
    rightBanner: "/images/home-right-banner2.png"

  },
  {
    image: '/images/home-banner3.jpg', // Background image for the third slide
    title: 'LANDMARKS PLANNED WITH PASSION',
    description: 'Transforming Mumbai’s Skyline Since 1969 ',
    location: 'TW GARDENS, KANDIVALI EAST',
    rightBanner: "/images/home-right-banner3.png"

  },
  {
    image: '/images/home-banner4.jpg', // Background image for the fourth slide
    title: 'LANDMARKS PLANNED WITH PASSION',
    description: 'Transforming Mumbai’s Skyline Since 1969 ',
    location: 'ATMOSPHERE, MULUND WEST',
    rightBanner: "/images/home-right-banner5.png"

  },
  {
    image: '/images/home-banner5.jpg', // Background image for the fourth slide
    title: 'LANDMARKS PLANNED WITH PASSION',
    description: 'Transforming Mumbai’s Skyline Since 1969 ',
    location: 'MAGNOLIA, PANVEL',
    rightBanner: "/images/home-right-banner4.png"

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
    <Carousel
      responsive={responsive}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={5000}
      keyBoardControl={true}
      customTransition="all 1s"
      transitionDuration={1000}
      containerClass="carousel-container"
      itemClass="carousel-item"
      showDots = {true}
      removeArrowOnDeviceType={["tablet", "mobile","desktop"]}
    
    >
      {carouselData.map((item, index) => (
        <div key={index} className={styles.heroSection} style={{ backgroundImage: `url(${item.image})` }}>
          <div className={styles.rightBanner}>
            <img src={item.rightBanner} className={styles.homeRightBanner} alt="Right Banner" />
          </div>
          <div className={styles.heroDetails}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <h4 className={styles.loc}>{item.location}</h4>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default Index;