import React from 'react';
import { FaFacebookF } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Logo from './../../images/logo.png';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer>
            <div className={`container ${styles['footer-container']}`}>
                <article>
                    <Link to='/'><img src={Logo} alt="Footer" className='logo' /></Link>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed quibusdam explicabo vitae nam praesentium itaque cum incidunt repudiandae facere aliquam!</p>
                    <div className={styles['footer-socials']}>
                        <a href='https://facebook.com/' target='_blank' rel='noreferrer noopener'><FaFacebookF /></a>
                        <a href='https://instagram.com/' target='_blank' rel='noreferrer noopener'><AiFillInstagram /></a>
                        <a href='https://twitter.com/' target='_blank' rel='noreferrer noopener'><FaTwitter /></a>
                        <a href='https://linkedin.com/' target='_blank' rel='noreferrer noopener'><FaLinkedin /></a>
                    </div>
                </article>
                <article>
                    <h4>Permalinks</h4>
                    <Link to='/about'>About</Link>
                    <Link to='/plans'>plans</Link>
                    <Link to='/trainers'>Trainers</Link>
                    <Link to='/gallery'>Gallery</Link>
                    <Link to='/contact'>Contact Us</Link>
                </article>

                <article>
                    <h4>Insights</h4>
                    <Link to='/s'>Blog</Link>
                    <Link to='/s'>Case Studies</Link>
                    <Link to='/s'>Events</Link>
                    <Link to='/s'>Comunication</Link>
                    <Link to='/s'>FAQs</Link>
                </article>
                <article>
                    <h4>Get In Touch</h4>
                    <Link to='/contact'>Contact Us</Link>
                    <Link to='/s'>Support</Link>
                </article>
            </div>
            <div className={styles['footer-copyright']}><small>2022 SPORT FITNESS &copy; All Rights are Reserved</small></div>
        </footer>
    )
}

export default Footer