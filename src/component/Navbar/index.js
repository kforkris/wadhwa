
import { useState } from 'react';
import { FiSearch, FiMenu } from 'react-icons/fi';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import styles from './styles.module.scss';
import { AiOutlineClose } from "react-icons/ai";
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin, FaTwitter } from "react-icons/fa";
const menuCta = '/images/menu-cta.png';
const logo = "/images/logo.png"
export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    
    const toggleDrawer = () => {
        setIsOpen(!isOpen);
    };
    
    return (
        <header className={styles.header}>
            <nav className={styles.navbar}>
                {/* Left Section */}
                <div className={styles.leftSection}>
                    <FiSearch className={styles.icon} />
                    <ul className={styles.navLinks}>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Design Section</li>
                    </ul>
                </div>
                
                {/* Center Logo */}
                <div className={styles.logo}>
                    <img src = {logo} />
                </div> 
                
                {/* Right Section */}
                <div className={styles.rightSection}>
                    <ul className={styles.navLinks}>
                        <li>Residential</li>
                        <li>Commercial</li>
                        <li>Township & Redevelopment</li>
                    </ul>
                    <img src = {menuCta} className={styles.menuCta}/>
                    <FiMenu className={styles.menuBar} onClick={toggleDrawer} />
                </div>
            </nav>
            
            {/* Drawer */}
            <Drawer open={isOpen} onClose={toggleDrawer} className={styles.drawer} direction='right'>
                <div className={styles.drawerContent}>
                    <div className={styles.closeIcon}>
                        <AiOutlineClose className={styles.close} onClick={() => setIsOpen(false)} />
                    </div>
                    <div className={styles.logo}>
                        <img src = {logo} />
                    </div>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Design</li>
                        <li>Residential</li>
                        <li>Commercial</li>
                        <li>Township</li>
                        <li>NRI Corner</li>
                        <li>HR Corner</li>
                        <li>Blog</li>
                        <li>Contact Us</li>
                        <li>FOLLOW US ON</li>
                    </ul>
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
                </div>
            </Drawer>
        </header>
    );
}
