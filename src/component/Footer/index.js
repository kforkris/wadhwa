import styles from './styles.module.scss';
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <div className={styles.footer}>
            <footer className={styles.footerContainer}>
                <div className={styles.footerSection}>
                    <h3>CONTACT</h3>
                    <p>The Wadhwa Group</p>
                    <p><span>Email:</span> <a href="mailto:enquiry@thewadhwagroup.com">enquiry@thewadhwagroup.com</a></p>
                    <p><span>Toll Free:</span> <a href="tel:18002096669">1800 209 6669</a></p>
                </div>

                <div className={styles.footerSection}>
                    <h3>Our Projects</h3>
                    <h4><strong style={{ color: "#FFF" }}>Residential</strong></h4>
                    <ul>
                    <li><a href="/projects/tw-gardens">TW Gardens</a></li>
          <li><a href="/projects/atmosphere-o2">Atmosphere O2</a></li>
          <li><a href="/projects/wadhwa-wise-city">Wadhwa Wise City</a></li>
          <li><a href="/projects/magnolia">Magnolia</a></li>
          <li><a href="/projects/the-haven">The Haven</a></li>
                    </ul>
                    <h4><strong style={{ color: "#FFF", }}>Commercial</strong></h4>
                    <ul>
                        <li><a href="#">Venue 52 </a></li>
                    </ul>
                </div>

                <div className={styles.footerSection}>
                    <h3>Useful Links</h3>
                    <ul>
                        <li><a href="#">Flats for sale in panvel</a></li>
                        <li><a href="#">New projects in panvel</a></li>
                        <li><a href="#">1 and 2 bhk in panvel</a></li>
                        <li><a href="#">2 and 3 bhk in mulund</a></li>
                        <li><a href="#">New projects in mulund</a></li>
                        <li><a href="#">2 and 3 bhk flat in kandivali east</a></li>
                    </ul>
                </div>

                <div className={styles.footerSection}>
                    <h3>Enquire</h3>
                    <form>
                        <input type="text" placeholder="Name" className={styles.inputField} />
                        <input type="text" placeholder="Mobile" className={styles.inputField} />
                    </form>
                </div>
            </footer>
            <div className={styles.socialsLink}>
                <div>
                    <FaFacebook />
                </div>
                <div>
                    <FaInstagram />
                </div>
                <div>
                    <FaYoutube />
                </div>
                <div>
                    <FaLinkedin />
                </div>
                <div>
                    <FaTwitter />
                </div>
            </div>
            <div className={styles.copyright}>
            <h6>
            COPYRIGHT © 2024. The WADHWA GROUP. ALL RIGHTS RESERVED</h6>
            <h6>Disclaimer | Privacy Policy

</h6>
            </div>
        </div>
    );
};

export default Footer;