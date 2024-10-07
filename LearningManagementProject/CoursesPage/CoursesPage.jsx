import React from 'react'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'

import './CoursesPage.css'
import CoursesFormPage from '../Components/CoursesForm/CoursesFormPage'

export default function CoursesPage() {
  return (
    <div>
        <Header />
        <CoursesFormPage />
        <Footer />
    </div>
  )
}
