import React from 'react';
import styles from './styles.module.scss';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const data = [
  {
    id: 1,
    img: '/images/magnolia.jpg',
    title: 'Magnolia',
    desc: 'PANEVL',
  },
  {
    id: 2,
    img: '/images/o2.jpg',
    title: 'ATMOSPHERE O2',
    desc: 'GMLR, Mulund West',
  },
  {
    id: 3,
    img: '/images/Haven.jpg',
    title: 'THE HAVEN',
    desc: 'PANEVL',
  },
  {
    id:4,
    img: '/images/venue-52.jpg',
    title: "Vemue 52",
    desc: "KHAR WEST"
  },
  {
    id:5,
    img: "/images/New-Project.jpg",
    title: "THE RESERVE",
    desc: "PANVEL"
  },
  {
    id:6,
    img: "/images/tulip-appartments.jpg",
    title: "TULIP APARTMENTS",
    desc: "PANVEL"
  },
  {
    id:7,
    img: "/images/EVARA.jpg",
    title: "EVARA",
    desc: "PANVEL"
  }
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
    <div className={styles.projectContainer}>
      <h2>Current Projects</h2>
      <Carousel
        responsive={responsive} // Pass the responsive settings
        infinite={true} // Enable infinite loop
        autoPlay={true} // Enable auto-play
        autoPlaySpeed={3000} // Auto-play interval (3 seconds)
        keyBoardControl={true} // Enable keyboard navigation
        customTransition="all 1s" // Smooth transition
        transitionDuration={1000} // Transition duration
        containerClass="carousel-container" // Custom container class
        itemClass="carousel-item" // Custom item class
      >
        {data.map((item) => (
          <div key={item.id} className={styles.card}>
            <img src={item.img} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Index;