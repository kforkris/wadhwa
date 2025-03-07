import React from "react";
import styles from "./styles.module.scss";
const iconImg = "/images/icon-img.png";
const iconImg2 = "/images/icon-img-2.png";
const iconImg3 = "/images/icon-img-3.png";
const iconImg4 = "/images/icon-img-4.png";
const iconImg5 = "/images/icon-img-5.png";
const iconImg6 = "/images/icon-img-6.png";

const index = () => (
  <div className={styles.innovativeContainer}>
    <div className={styles.innovativeItems}>
      <div className={styles.itemContainer}>
        <div className={styles.item}>
          <div className={styles.icon}>
            <img src={iconImg} alt="iconImg" />
          </div>
        </div>
        <h5>Innovative Construction</h5>
        <p>
          Use of latest & innovative construction <br /> technology
        </p>
      </div>
      <div className={styles.itemContainer}>
        <div className={styles.item}>
          <div className={styles.icon}>
            <img src={iconImg2} alt="iconImg" />
          </div>
        </div>
        <h5>Meticulous Planning</h5>
        <p>
          Well planned homes keeping the smallest details <br /> in mind
        </p>
      </div>
      <div className={styles.itemContainer}>
        <div className={styles.item}>
          <div className={styles.icon}>
            <img src={iconImg3} alt="iconImg" />
          </div>
        </div>
        <h5>Customer First</h5>
        <p>
          Adopting a customer first Approach in <br /> everything we do
        </p>
      </div>
      <div className={styles.itemContainer}>
        <div className={styles.item}>
          <div className={styles.icon}>
            <img src={iconImg4} alt="iconImg" />
          </div>
        </div>
        <h5>Convenient Locations</h5>
        <p>
          Thoughtfully selected project locations for <br /> utmost convenience
        </p>
      </div>
      <div className={styles.itemContainer}>
        <div className={styles.item}>
          <div className={styles.icon}>
            <img src={iconImg5} alt="iconImg" />
          </div>
        </div>
        <h5>Modern Technology
        </h5>
        <p>
        Adapting latest technology in our projects


        </p>
      </div>
      <div className={styles.itemContainer}>
        <div className={styles.item}>
          <div className={styles.icon}>
            <img src={iconImg6} alt="iconImg" />
          </div>
        </div>
        <h5>Awarded Designs

        </h5>
        <p>
        Best designs which are recognized across the industry



        </p>
      </div>
    </div>
  </div>
);

export default index;
