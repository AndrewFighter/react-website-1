import React from 'react'
import PageHeader from '../../components/PageHeader/PageHeader';
import Image from './../../images/header_bg_4.jpg';
import styles from './Plans.module.css'
import { plans } from './../../data';
import Card from '../../components/Card/Card';

const Plans = () => {
  return (
    <div className={styles.plans}>
      <PageHeader title='Plans' image={Image}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore corrupti magni reiciendis cupiditate adipisci culpa sequi iste, soluta atque placeat harum numquam.
      </PageHeader>
      <div className={`container ${styles['plans-container']}`} style={{ minHeight: '85vh' }}>
        {plans.map(({ id: index, name, desc, price, features }) => {
          return <Card key={index} className={styles.plan}>
            <h3 style={{color:'var(--color-gray-100)'}}>{name}</h3>
            <small>{desc}</small>
            <h1>{price} / <span>Mon</span></h1>
            {features.map(({ feature, available }, index) => {
              return <p key={index} className={`${!available ? styles.disabled : ''}`}>
                {feature}
              </p>
            })}
            <button className='btn' >Choose Plan</button>
          </Card>
        })}
      </div>
    </div>
  )
}

export default Plans