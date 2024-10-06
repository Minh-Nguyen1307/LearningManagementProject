import React from 'react'
import LogInForm from '../Components/LogInForm/LogInForm'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import './LogInPage.css'
export default function LoginPage() {
  return (
    <div>
        <Header />
        <LogInForm />
        <Footer />
    </div>
  )
}
