import React from 'react'
import styles from "./styles.module.scss"
const homeAbout = "/images/home-about.jpg"
const platina = "/images/platina.jpg"
const index = () => {
  return (
    <div className={styles.aboutContainer}>
        <div className={styles.leftContainer}>
            <h2>A brief About us
            </h2>
            <p>
                <strong>The Wadhwa Group </strong>
                carries a rich legacy of 5+ Decades built on the trust and belief of our customers and stakeholders. The group is one of Mumbai’s leading real estate companies with 250+ Landmarks and is currently developing residential, commercial and township projects spread across approximately 4.1 Million Sq.M.
            </p>
            <p>Timely completion of projects coupled with strong planning and design innovation gives the group an edge over its competitors. As an organization, the group is also known for its employee-friendly and professional working environment. Today, the group’s clientele comprises of over 35,000+ satisfied customers and over 150 + MNCs.</p>
        </div>
        <div className={styles.rightContainer}>
            <img src ={homeAbout} />
            <div className={styles.rightFrame}>
                <img src = {platina} />
            </div>
        </div>
    </div>
  )
}

export default index