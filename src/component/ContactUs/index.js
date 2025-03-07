import React from 'react'
import styles from "./styles.module.scss"
const texture = "/images/cement-texture.jpg"
import { FaUserAlt } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import { FiClock } from "react-icons/fi";
import { AiFillProject } from "react-icons/ai";
import { AiFillMessage } from "react-icons/ai";

const index = () => {
    return (
        <div className={styles.contactContainer}>
            <div className={styles.contactForm}>
                <img src={texture} />
                <div className={styles.formDetails}>
                    <h2>Request Call Back
                    </h2>
                    <p>Please fill your details below
                    </p>
                    <div className={styles.form}>
                        <div className={styles.formGroup}>
                            <div className={styles.inputGroup}>
                                <FaUserAlt />
                                <input type = "text" placeholder='First Name' />
                            </div>
                        </div>
                        <div className={styles.formGroup}>
                            <div className={styles.inputGroup}>
                                <FaUserAlt />
                                <input type = "text" placeholder='Last Name' />
                            </div>
                        </div>
                        <div className={styles.formGroup}>
                            <div className={styles.inputGroup}>
                                <FaMobileAlt />
                                <input type = "number" placeholder='Mobile'  />
                            </div>
                        </div>
                        <div className={styles.formGroup}>
                            <div className={styles.inputGroup}>
                                <MdMail />
                                <input type = "text" placeholder='Email'  />
                            </div>
                        </div>
                        <div className={styles.formGroup}>
                            <div className={styles.inputGroup}>
                                <FiClock />
                                <input type = "date" placeholder='Mobile'  />
                            </div>
                        </div>
                        <div className={styles.formGroup}>
                            <div className={styles.inputGroup}>
                                <AiFillProject />
                                <input type = "text" placeholder='Mobile'  />
                            </div>
                        </div>
                        <div className={styles.formGroup} style={{width:"100%"}}>
                            <div className={styles.inputGroup} style={{alignItems:"flex-start"}}>
                                <AiFillMessage />
                                <textarea placeholder='Message..' ></textarea>
                            </div>
                        </div>
                        <div className={styles.btn}>
                        <button>Contact</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default index