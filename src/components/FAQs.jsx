import React from 'react'
import styles from './../pages/home/Home.module.css';
import SectionHead from './SectionHead';
import { FaQuestion } from 'react-icons/fa';
import { faqs } from './../data';
import FAQ from './FAQ';
const FAQs = () => {
    return (
        <section className={styles.faqs}>
            <div className={`container ${styles['faqs-container']}`}>
                <SectionHead icon={<FaQuestion />} title='FAQs' />
                <div className={styles['faqs-wrapper']}>
                    {faqs.map(({ id: index, question, answer }) => {
                        return <FAQ key={index} question={question} answer={answer} />
                    })}

                </div>
            </div>
        </section>
    )
}

export default FAQs