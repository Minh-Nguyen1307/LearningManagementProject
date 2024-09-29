import React from 'react'
import Header from '../Components/Header/Header'
import './HomePage.css'
import Footer from '../Components/Footer/Footer'
import Carousel from '../Components/HomeSlide/Carousel'
import HomeCategories from '../Components/HomeCategories/HomeCategories'

export default function HomePage() {
  return (
    <div className='text-xl'>
        <Header />
        <Carousel />
        <HomeCategories />
        <Footer />
    </div>
  )
}
