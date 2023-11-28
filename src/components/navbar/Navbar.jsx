import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { links } from '../../data';
import Logo from '../../images/logo.png';
import { AiOutlineMenu } from 'react-icons/ai';
import { MdOutlineClose } from 'react-icons/md';
import styles from './Navbar.module.css';
const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    return (
        <nav className={styles.nav}>
            <div className={`${styles.container} ${styles.nav__container} `}>
                <Link to='/' className='logo' onClick={() => {setShowMenu(false) }}><img src={Logo} alt="Something" /></Link>
                <ul className={`${styles.nav__links} ${showMenu ? styles.showMenu : styles.hide_menu} `}>
                    {links.map(({ name, path }, index) => {
                        return <li key={index}><NavLink to={path} onClick={()=>{setShowMenu(false)}} className={({ isActive }) => isActive ? styles.active : ''}>{name}</NavLink></li>
                    })
                    }
                </ul>
                <button className={styles['nav__toggle-btn']} onClick={() => { setShowMenu(prev => !prev) }}>
                    {
                        showMenu ? <MdOutlineClose /> : <AiOutlineMenu />
                    }
                </button>
            </div>
        </nav>

    )
}

export default Navbar