import React from 'react'
import styles from "./styles.module.scss"
const banner = "/images/index-image.jpg"
const VENTILIT = "/images/VENTILIT.jpg"
const index = () => {
  return (
    <div className={styles.designContainer}>
        <div className={styles.leftWrapper}>
            <img src = {banner} />
        </div>
        <div className={styles.rightWrapper}>
            <h3>
            We Design Your World With Our Hearts			</h3>
            <p >Setting a strong foundation for you</p>
            <ul > 
        <li> Impeccable project execution
        </li> 
        <li> Strong brand presence & delivery excellence
        </li> 
        <li> Transparency in dealings
        </li> 
        <li>In-depth due diligence to ensure clear land titles
        </li>
        <li>Litigation-free projects
        </li>
        <li>Positive exit covenants (Institutions, Investors, Customers)
        </li>
        <li>Design innovation with emphasis on practicality
        </li>
    </ul> 
    <div className={styles.VENTILIT}>
        <img src = {VENTILIT} />
    </div>
        </div>
    </div>
  )
}

export default index