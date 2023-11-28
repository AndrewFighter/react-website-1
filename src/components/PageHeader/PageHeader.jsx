import React from 'react';

import styles from './PageHeader.module.css';

const PageHeader = ({ title, image, children }) => {
    return (
        <div className={styles.header}>
            <div className={styles['header-container']}>
                <div className={styles['header-container-img']}>
                    <img src={image} alt='Something'/>
                </div>
                <div className={styles['header-content']}>
                    <h2>{title}</h2>
                    <p>{children}</p>
                </div>
            </div>
        </div>
    )
}

export default PageHeader