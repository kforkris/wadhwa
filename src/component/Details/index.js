import React from 'react'
import styles from "./styles.module.scss"
const one = "/images/1.png"
const two = "/images/2.png"
const three = "/images/3.png"
const four = "/images/4.png"
const five = "/images/5.png"
const six = "/images/6.png"
const seven = "/images/7.png"

const index = () => {
  return (
    <>
    <div className={styles.detailsContainer}>
        <div className={styles.elementor}>
        <div className={styles.container}>
            <div>
            <img src = {one} />
            </div>
            <h3>5+</h3>
            <h5>
            DECADES OF EXPERIENCE IN ICONIC DEVELOPMENTS</h5>
        </div>
        <div className={styles.container}>
            <div>
            <img src = {two} />
            </div>
            <h3>4.1</h3>
            <h5>
            MILLION SQ. M. OF RESIDENTIAL &amp; COMMERCIAL SPACES</h5>
        </div>

        </div>
    </div>
    <div className={styles.detailsContainer}>
        <div className={styles.elementor}>
        <div className={styles.container}>
            <div>
            <img src = {three} />
            </div>
            <h3>CONSISTENT</h3>
            <h5>
        
					ACCOLADES FOR LIFE ENHANCEMENT			</h5>
        </div>
        <div className={styles.container}>
            <div>
            <img src = {four} />
            </div>
            <h3>4.1</h3>
            <h5>
            
					FOCUS ON PLANNING, DESIGNS & EXECUTION.			</h5>
        </div>

        </div>
    </div>
    <div className={styles.detailsContainer}>
        <div className={`${styles.elementor} ${styles.lastElementor}`}>
        <div className={styles.container}>
            <div>
            <img src = {five} />
            </div>
            <h3>35000+</h3>
            <h5>
            
					DELIGHTED CUSTOMERS			</h5>
        </div>
        <div className={styles.container}>
            <div>
            <img src = {six} />
            </div>
            <h3>150+</h3>
            <h5>
            MNC CLIENTS</h5>
        </div>
        <div className={styles.container}>
            <div>
            <img src = {six} />
            </div>
            <h3>250+</h3>
            <h5>
            MNC CLIENTS</h5>
        </div>
        </div>
    </div>
    </>
  )
}

export default index