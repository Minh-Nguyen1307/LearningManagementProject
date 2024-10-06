import React, { useState, useEffect } from 'react';
import ProfileInformation from './ProfileInformation/ProfileInformation';
import CourseInformation from './CourseInformation/CourseInformation';
import TeacherInformation from './TeacherInformation/TeacherInformation';
import MessageInformation from './MessageInformation/MessageInformation';
import ReviewsInformation from './ReviewsInformation/ReviewsInformation';
import { faShareNodes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Profile.css';

const Profile = () => {
    const copyToClipboard = () => {
        const linkToCopy = 'http://localhost:5174/Profile';
        navigator.clipboard.writeText(linkToCopy)
            .then(() => {
                alert('Link copied to clipboard!');
            })
            .catch(err => {
                console.error('Failed to copy: ', err);
            });
    };

    const [useName, setUseName] = useState('');
    const [avatar, setAvatar] = useState(''); // State for avatar

    useEffect(() => {
        const storedUserData = localStorage.getItem('loggedInUser');
        const storedUserDataAll = localStorage.getItem('userData');
        
        if (storedUserData) {
            const parsedUserData = JSON.parse(storedUserData);
            setAvatar(parsedUserData.avatar || ''); // Get avatar from localStorage
        }

        if (storedUserDataAll && storedUserData) {
            const allUsers = JSON.parse(storedUserDataAll);
            const loggedInUser = JSON.parse(storedUserData); // Fetch the current logged-in user
            const user = allUsers.find(user => user.email === loggedInUser.email); // Find user by matching email
            if (user) {
                setUseName(user.useName || ''); // Set useName from matched user data
            }
        }
    }, []);

    return (
        <div className='d-flex w-full my-20 h-[1000px]'>
            <div className='w-1/3 d-flex justify-center h-[500px]'>
                <div className='bg-slate-200 d-flex justify-between flex-col w-72 items-center h-[500px]'>
                    <div className='d-flex flex-col items-center justify-around h-[250px]'>
                        <div className='user-avatar bg-slate-300 text-black w-28 h-28 flex items-center justify-center rounded-full'>
                            {avatar ? (
                                <img src={avatar} alt="User Avatar" className='w-full h-full rounded-full object-cover' />
                            ) : (
                                <img src="./public/ad.png" alt="Default Avatar" />
                            )}
                        </div>
                        <div>
                            {useName || "Name"}
                        </div>
                        <div>
                            <button className='btn btn-dark' onClick={copyToClipboard}>
                                Share Profile <span><FontAwesomeIcon icon={faShareNodes} /></span>
                            </button>
                        </div>
                    </div>
                    <hr className="w-3/4 border-2 border-l-slate-900"></hr>
                    <div className="d-flex items-center w-full m-0">
                        <div className="nav flex-column nav-pills me-3 justify-center w-full" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                            <button className="nav-link active w-72 btn btn-dark" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">Profile</button>
                            <button className="nav-link w-full btn btn-dark" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">My Courses</button>
                            <button className="nav-link w-full btn btn-dark" id="v-pills-disabled-tab" data-bs-toggle="pill" data-bs-target="#v-pills-disabled" type="button" role="tab" aria-controls="v-pills-disabled" aria-selected="false">Teachers</button>
                            <button className="nav-link w-full btn btn-dark" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">Messages</button>
                            <button className="nav-link w-full btn btn-dark" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">My Reviews</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-2/3 tab-content p-0" id="v-pills-tabContent">
                <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab" tabIndex={0}>
                    <ProfileInformation />
                </div>
                <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab" tabIndex={0}>
                    <CourseInformation />
                </div>
                <div className="tab-pane fade" id="v-pills-disabled" role="tabpanel" aria-labelledby="v-pills-disabled-tab" tabIndex={0}>
                    <TeacherInformation />
                </div>
                <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab" tabIndex={0}>
                    <MessageInformation />
                </div>
                <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab" tabIndex={0}>
                    <ReviewsInformation />
                </div>
            </div>
        </div>
    );
}

export default Profile;
