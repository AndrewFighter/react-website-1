import React, { useState } from 'react';
import styles from './../pages/home/Home.module.css';
import { ImQuotesLeft } from 'react-icons/im';
import SectionHead from './SectionHead';
import { testimonials } from './../data';
import Card from './Card/Card';
import { IoIosArrowBack } from 'react-icons/io'; 
import { IoIosArrowForward } from 'react-icons/io';
const Testimonials = () => {
    const [index, setIndex] = useState(0);
    const {name, job, quote, avatar } = testimonials[index];
    return (
        <section className={styles.testimonials}>
            <div className={`container ${styles['testimonials-container']}`}>
                <SectionHead icon={<ImQuotesLeft />} title='Testimonials' />
                <Card className={styles.testimonial}>
                    <div className={styles['testimonial-avatar']}><img src={avatar} alt='avatar' /></div>
                    <p className={styles['testimonial-quote']}>{`"${quote}"`}</p>
                    <h5>{name}</h5>
                    <small>{job}</small>
                </Card>
                <div className={styles['testimonials-btn-container']}>
                    <button className={styles['btn-container']} onClick={() => { setIndex(prev => prev <= 0 ? 0 : prev - 1) }}><IoIosArrowBack /></button>
                    <button className={styles['btn-container']} onClick={() => { setIndex(prev => prev >= testimonials.length - 1 ? 0 : prev + 1) }}><IoIosArrowForward /></button>
                </div>
            </div>
        </section >
    )
}

export default Testimonials