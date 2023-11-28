import React, { useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { AiOutlineMinus } from 'react-icons/ai';
import styles from './../pages/home/Home.module.css';

const FAQ = ({ question, answer }) => {
    const [openAnswer, setOpenAnswer] = useState(false);
    return (
        <article className={styles.faq}>
            <div>
                <h4>{question}</h4>
                <button onClick={() => { setOpenAnswer(prev => !prev) }}>{openAnswer ? <AiOutlineMinus /> : <AiOutlinePlus /> }</button>
            </div>
            <p className={openAnswer ? '' : 'none'}>{answer}</p>
        </article>
    )
}

export default FAQ