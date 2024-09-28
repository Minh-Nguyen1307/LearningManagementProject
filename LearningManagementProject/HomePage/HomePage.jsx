import React from 'react'
import Header from '../Components/Header/Header'
import './HomePage.css'
import Footer from '../Components/Footer/Footer'
import Carousel from '../Components/HomeSlide/Carousel'

export default function HomePage() {
  return (
    <div>
        <Header />
        <Carousel />
        <Footer />
    </div>
  )
}
