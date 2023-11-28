import React from 'react';
import Card from './Card/Card';
import styles from './../pages/trainers/Trainers.module.css'

const Trainer = ({ id: index, image, name, job, className, socials }) => {
    return (
        <Card key={index} className={className}>
            <div className={styles['trainer-img']}>
                <img src={image} alt='Something' />
            </div>
            <h3>{name}</h3>
            <p>{job}</p>
            <div className={styles['img-socials']}>
                {socials.map(({ icon, link }, index) => {
                    return <a key={index} href={link} target='_blank' rel='noreferrer noopener'>{icon}</a>
                })}
            </div>
        </Card>
    )
}

export default Trainer