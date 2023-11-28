import React from 'react';
import Image from '../images/main_header.png';
import { Link } from 'react-router-dom';
import styles from './../pages/home/Home.module.css';
const Header = () => {
    return (
        <div className={styles['main-header']}>
            <div className={`${styles['main-header-container']} ${styles['container']}`}>
                <div className={styles['main-header-left']}>
                    <h4>#100DaysOfWorkOut</h4>
                    <h1>Join the legends of the Fitness World</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima consectetur voluptatum dolorem aspernatur ad. Aspernatur.</p>
                    <Link to='/' className='btn'>get started</Link>
                </div>
                <div className={styles['main-header-right']}>
                    <div className={styles['main-header-circle']}></div>
                    <div className={styles['main-header-image']}>
                        <img src={Image} alt='AVAATAR' />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Header;