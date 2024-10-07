import React from 'react'
import Header from '../Components/Header/Header'
import './HomePage.css'
import Footer from '../Components/Footer/Footer'
import Carousel from '../Components/HomeSlide/Carousel'
import HomeCategories from '../Components/HomeCategories/HomeCategories'
import HomeStatus from '../Components/HomeStatus/HomeStatus'
import HomeCourses from '../Components/HomeCourses/HomeCourses'
import HomeInstructor from '../Components/HomeInstructors/HomeInstructor'
import HomeBanner from '../Components/HomeBanner/HomeBanner'
import HomeComments from '../Components/HomeComments/HomeComments'


export default function HomePage() {
  return (
    <div className='text-xl'>
        <Header />
        <Carousel />
        <HomeStatus />
        <HomeCategories />
        <HomeCourses />
        <HomeInstructor />
        <HomeComments />
        <HomeBanner />
        <Footer />
        

    </div>
  )
}
