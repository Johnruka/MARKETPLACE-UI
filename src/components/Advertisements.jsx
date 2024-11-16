import React from 'react'
import styles from '../components/styles/Ads.module.css'
import adCards from './adCards'
const Ads = () => {
  return (
    <div className={styles.container} >
      <adCards />
    </div>
  )
}

export default Ads