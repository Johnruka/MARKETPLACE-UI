import React from 'react'
import styles from '../components/styles/Ads.module.css'
import AdCards from './AdCards'
const Ads = () => {
  return (
    <div className={styles.container} >
      <AdCards />
    </div>
  )
}

export default Ads