import React from 'react'
import {faArrowRight} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './SignUpForm.css'
export default function SignUpForm() {
    
  return (
  
        <div className="row no-gutters ">
            <div className="col-12 col-sm-6 col-md-8 d-flex flex-col justify-center items-center">
                <h3 classname="text-4xl font-semibold text-gray-800 mx-10">Create Your Account</h3>
                <form action>
                    <p classname="text-gray-950 font-medium">Full Name</p>
                    <input type="text" placeholder="First Name" classname="border" />
                    <input type="text" placeholder="Last Name" classname="border" />
                </form>
                <form action=''>
                    <p classname="text-gray-950 font-medium">User Name</p>
                <input type="text" placeholder="User Name" classname="border" />
                </form>
                <form action=''>
                <p classname="text-gray-950 font-medium">Email</p>
                <input type="email" placeholder="Email ID" classname="border" />
                </form>
                <form action=''>
                <div><p classname="text-gray-950 font-medium">Passward</p>
                    <input type="email" placeholder="Enter Password" classname="border" /></div>
                <div><p classname="text-gray-950 font-medium">Confirm Password</p>
                    <input type="email" placeholder="Confirm Password" classname="border" /></div>
                </form>
                <button classname="btn btn-dark">Create Account <fontawesomeicon icon="{faArrowRight}" classname="h-8" /></button>
  </div>
  <div className="col-6 col-md-4">
    <img src="./public/signup.png" alt />
  </div>
</div>

    
  )
}
