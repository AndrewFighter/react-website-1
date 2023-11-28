import React from 'react';
import Image from './../../images/header_bg_1.jpg';
import PageHeader from '../../components/PageHeader/PageHeader';
import Story from './../../images/about1.jpg';
import Vision from './../../images/about2.jpg';
import Mission from './../../images/about3.jpg';
import styles from './About.module.css';

const About = () => {
  return (
    <div style={{ minHeight: '100vh',marginBottom:'5rem'}}>
      <PageHeader title='About Us' image={Image}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam laborum expedita autem architecto ipsum eligendi, molestias in sapiente sit temporibus.
      </PageHeader>
      <section className={styles['about-story']}>
        <div className={`container ${styles['about-story-container']}`}>
          <div className={styles['about-section-image']}>
            <img src={Story} alt='Something'/>
          </div>
          <div className={styles['about-section-content']}>
            <h3>Our Story</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto commodi quibusdam, delectus assumenda, quis, vitae maiores tenetur debitis quo sint quos fuga voluptatum. Aliquam!</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto commodi quibusdam, delectus assumenda, quis, vitae maiores tenetur debitis quo sint quos fuga voluptatum. Aliquam!</p>
            <p>Lorem, ipsum dolor sit amet Architecto commodi quibusdam, delectus assumenda, quis, vitae maiores!</p>
          </div>
        </div>
      </section>
      <section className={styles['about-vision']}>
        <div className={`container ${styles['about-vision-container-second']}`}>
          <div className={styles['about-section-content']}>
            <h3>Our Vision</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto commodi quibusdam, delectus assumenda, quis, vitae maiores tenetur debitis quo sint quos fuga voluptatum. Aliquam!</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto commodi quibusdam, delectus assumenda, quis, vitae maiores tenetur debitis quo sint quos fuga voluptatum. Aliquam!</p>
            <p>Lorem, ipsum dolor sit amet Architecto commodi quibusdam, delectus assumenda, quis, vitae maiores!</p>
          </div>
          <div className={styles['about-section-image-second']}>
            <img src={Vision} alt='Something'/>
          </div>
        </div>
      </section>
      <section className={styles['about-mission']}>
        <div className={`container ${styles['about-mission-container']}`}>
          <div className={styles['about-section-image']}>
            <img src={Mission} alt='Something'/>
          </div>
          <div className={styles['about-section-content']}>
            <h3>Our Mission</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto commodi quibusdam, delectus assumenda, quis, vitae maiores tenetur debitis quo sint quos fuga voluptatum. Aliquam!</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto commodi quibusdam, delectus assumenda, quis, vitae maiores tenetur debitis quo sint quos fuga voluptatum. Aliquam!</p>
            <p>Lorem, ipsum dolor sit amet Architecto commodi quibusdam, delectus assumenda, quis, vitae maiores!</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About