import React from 'react'
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import ProfileForm from '../Components/ProfileForm/ProfileForm';
import './ProfilePage.css'
const ProfilePage = () => {

  return (
    <div>
        <Header />
        <ProfileForm />
        <Footer />
    </div>
  )
}
export default ProfilePage;