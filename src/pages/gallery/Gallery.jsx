import React from 'react';
import PageHeader from '../../components/PageHeader/PageHeader';
import header from './../../images/header_bg_3.jpg';
import styles from './Gallery.module.css';

const Gallery = () => {
  const images = [];
  const quantity = 15;
  for (let i = 1; i < 15; i++) {
    images.push(require(`./../../images/gallery${i}.jpg`));
  }
  return (
    <div className={styles.gallery}>
      <PageHeader title='Our Gallery' image={header} >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse dignissimos non, rem omnis perspiciatis magni eveniet. Nulla minima in necessitatibus ipsam saepe!
      </PageHeader>
      <div className={`container ${styles['gallery-container']}`} style={{ minHeight: '100vh' }}>
        {images.map((image, index) => {
          return <article key={index}>
            <img src={image} alt="Something" />
          </article>
        })}
      </div>
    </div>
  )
}

export default Gallery