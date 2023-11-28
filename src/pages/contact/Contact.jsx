import React from 'react';
import styles from './Contact.module.css';
import Image from './../../images/header_bg_2.jpg';
import { MdEmail } from 'react-icons/md';
import { BsMessenger } from 'react-icons/bs';
import { IoLogoWhatsapp } from 'react-icons/io';
import PageHeader from '../../components/PageHeader/PageHeader';


const Contact = () => {
  return (
    <div className={styles.contacts}>
      <PageHeader title='Get In Touch' image={Image}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex quis consequuntur earum animi natus aspernatur debitis cupiditate odio, quidem, accusamus veritatis consequatur iusto, a voluptate.</PageHeader>
      <div className={`container ${styles['contact-container']}`} style={{minHeight:'30vh'}}>
        <div className={styles['contact-wrapper']}>
          <a href='mailto:support@gmail.com' target='_blank' rel='noreferrer noopener'><MdEmail/></a>
          <a href='http://m.me/ernst_gorst' target='_blank' rel='noreferrer noopener'><BsMessenger/></a>
          <a href='https://m.me/+2328894560' target='_blank' rel='noreferrer noopener'>< IoLogoWhatsapp/></a>
        </div>
      </div>
    </div>
  )
}

export default Contact