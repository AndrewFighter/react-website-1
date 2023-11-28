import React from 'react';
import styles from './Trainers.module.css';
import PageHeader from '../../components/PageHeader/PageHeader';
import image from './../../images/header_bg_5.jpg';
import { BsInstagram } from 'react-icons/bs';
import { AiOutlineTwitter } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { trainers } from '../../data';
import Trainer from '../../components/Trainer';

const Trainers = () => {
  return (
    <div>
      <PageHeader title="Our Trainers" image={image}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. In, numquam omnis commodi sint ipsum modi aspernatur delectus laborum, quam voluptas ea dolorum?</PageHeader>
      <section className={`container ${styles['trainers-container']}`} >
        {trainers.map(({ id: index, image, name, job, socials }) => {
          return <Trainer key={index} image={image} name={name} job={job} className={styles.trainer} socials={[
            {
              icon: <BsInstagram />,
              link: socials[0]
            },
            {
              icon: <AiOutlineTwitter />,
              link: socials[1]
            },
            {
              icon: <FaFacebookF />,
              link: socials[2]
            },
            {
              icon: <FaLinkedinIn />,
              link: socials[3]
            }
          ]} />
        })}
      </section>
    </div>
  )
}

export default Trainers