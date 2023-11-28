import React from 'react';
import styles from './NotFound.module.css';
import {Link} from 'react-router-dom';

const NotFound = () => {
  return (
    <div className={styles['NotFound-container']} style={{minHeight:'34vh'}}>
        <h2>Page not Found</h2>
        <Link to='/'>Go Back Home</Link>
    </div>
  )
}

export default NotFound