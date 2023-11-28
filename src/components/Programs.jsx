import React from 'react';
import styles from './../pages/home/Home.module.css';
import { Link } from 'react-router-dom';
import { FaCrown } from 'react-icons/fa';
import { programs } from './../data';
import Card from './Card/Card';
import { AiFillCaretRight } from 'react-icons/ai';
import SectionHead from './SectionHead';
const Programs = () => {
    return (
        <section className={styles.programs}>

            <div className={`container ${styles['programs-container']}`}>
                {/* <div className={styles['section-head']}>
                    <span><FaCrown /></span>
                    <h2>programs</h2>
                </div> */}
                <SectionHead icon={<FaCrown/>} title='programs' />
                <div className={styles['programs-wrapper']}>
                    {programs.map(({ id: index, icon, title, info, path }) => {
                        return <Card key={index} className={styles['programs_program']}>
                            <span>{icon}</span>
                            <h4>{title}</h4>
                            <small>{info}</small>
                            <Link to={path} className='btn sm'>learn more...<AiFillCaretRight /></Link>
                        </Card>
                    })}
                </div>
            </div>
        </section>
    )
}

export default Programs