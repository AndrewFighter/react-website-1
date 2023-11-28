import React from 'react';
import Header from '../../components/Header';
import Programs from '../../components/Programs';
import Values from '../../components/Values';
import FAQs from '../../components/FAQs';
import Testimonials from '../../components/Testimonials';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.total}>
      <Header />
      <Programs />
      <Values />
      <FAQs/>
      <Testimonials/>
    </div>


  )
}

export default Home