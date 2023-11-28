import React from 'react';
import styles from './../pages/home/Home.module.css';
const SectionHead = ({ title, icon}) => {
    return (
        <div className={`${styles['section-head']}`}>
            <span>{icon}</span>
            <h2>{title}</h2>
        </div>
    )
}

export default SectionHead