import React from 'react'
import styles from './Header.module.css'

const Header = () => {
  return (
    <div className='header'>
        <h1 className={styles.header}>This Is Header</h1>
        <button className={styles.btn}>Header Button</button>
    </div>
  )
}

export default Header
