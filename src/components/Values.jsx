import React from 'react'
import styles from './../pages/home/Home.module.css';
import Image from './../images/values.jpg'
import { GiCutDiamond } from 'react-icons/gi';
import { values } from './../data';
import Card from './Card/Card';
import SectionHead from './SectionHead';
const Values = () => {
    return (
        <section className={styles.values}>
            <div className={`container ${styles['values-container']}`}>
                <div className={styles['values-left']}>
                    <div className={styles['values-left-image']}>
                        <img src={Image} alt="Values" />
                    </div>
                </div>
                <div className={styles['values-right']}>
                    {/* <div className={styles['section-head']}>
                        <span><GiCutDiamond/></span>
                        <h2>values</h2>
                    </div> */}
                    <SectionHead icon={<GiCutDiamond/>} title='values' />
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam nihil, doloremque facilis dolor ducimus.</p>
                    <div className={styles['values-wrapper']}>
                        {values.map(({ id: index, icon, title, desc }) => {
                            return <Card key={index} className={styles['values-value']}>
                                <span>{icon}</span>
                                <h4>{title}</h4>
                                <small>{desc}</small>
                            </Card>
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Values