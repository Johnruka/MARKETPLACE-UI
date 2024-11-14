import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar'
import Header from './components/Header'
import Ads from './components/Advertisements'

function App() {

  return (
    <>
      <Navbar />
      <Header />
      <Ads />
    </>
  )
}

export default App