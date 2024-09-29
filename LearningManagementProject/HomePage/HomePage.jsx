import React from 'react'
import Header from '../Components/Header/Header'
import './HomePage.css'
import Footer from '../Components/Footer/Footer'
import Carousel from '../Components/HomeSlide/Carousel'
import HomeCategories from '../Components/HomeCategories/HomeCategories'
import HomeStatus from '../Components/HomeStatus/HomeStatus'
import HomeCourses from '../Components/HomeCourses/HomeCourses'


export default function HomePage() {
  return (
    <div className='text-xl'>
        <Header />
        
        <Carousel />
        <HomeStatus />
        <HomeCategories />
        <HomeCourses />
        <Footer />
    </div>
  )
}
