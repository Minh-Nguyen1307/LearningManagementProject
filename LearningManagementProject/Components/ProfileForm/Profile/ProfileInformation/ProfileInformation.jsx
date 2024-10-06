import React, { useState, useEffect } from 'react';

const ProfileInformation = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [description, setDescription] = useState('');
  const [language, setLanguage] = useState('english');
  const [avatar, setAvatar] = useState('');

  // Social Media Links State
  const [facebookLink, setFacebookLink] = useState('');
  const [linkedinLink, setLinkedinLink] = useState('');
  const [youtubeLink, setYoutubeLink] = useState('');

  // Fetch the data from localStorage when the component mounts
  useEffect(() => {
    const storedUserData = localStorage.getItem('loggedInUser');
    if (storedUserData) {
      const parsedUserData = JSON.parse(storedUserData);
      setFirstName(parsedUserData.firstName || '');
      setLastName(parsedUserData.lastName || '');
      setEmail(parsedUserData.email || '');
      setJobTitle(parsedUserData.jobTitle || '');
      setDescription(parsedUserData.description || '');
      setLanguage(parsedUserData.language || 'english');
      setAvatar(parsedUserData.avatar || '');
      // Set social media links if they exist
      setFacebookLink(parsedUserData.facebookLink || '');
      setLinkedinLink(parsedUserData.linkedinLink || '');
      setYoutubeLink(parsedUserData.youtubeLink || '');
    }
  }, []);

  // Handle file input change
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatar(reader.result); // Update avatar state with Base64 string
      };
      reader.readAsDataURL(file); // Read file as Data URL
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Create an updated user object
    const updatedUserData = {
      firstName,
      lastName,
      email,
      jobTitle,
      description,
      language,
      avatar,
      facebookLink,
      linkedinLink,
      youtubeLink,
    };

    // Update localStorage with the new data
    localStorage.setItem('loggedInUser', JSON.stringify(updatedUserData));
    const existingUserData = JSON.parse(localStorage.getItem('userData')) || [];
    const userIndex = existingUserData.findIndex(user => user.email === email);

    if (userIndex !== -1) {
      // Update existing user data
      existingUserData[userIndex] = { ...existingUserData[userIndex], ...updatedUserData };
    } else {
      // If the user doesn't exist, you might want to add them as a new user
      existingUserData.push(updatedUserData);
    }

    localStorage.setItem('userData', JSON.stringify(existingUserData));

    alert('Profile updated successfully!');
  };

  return (
    <div className='border rounded-xl pb-2'>
      <form className="d-flex flex-col justify-around item h-[900px]" onSubmit={handleSubmit}>
        <div>
          <p className="text-gray-950 font-medium text-xl my-2 mx-5">Full Name</p>
          <input
            type="text"
            placeholder="First Name"
            className="border rounded-md pl-4 w-1/3 h-9 mx-5"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Last Name"
            className="border rounded-md pl-4 w-1/3 h-9"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>

        <div>
          <p className="text-gray-950 font-medium text-xl my-2 mx-5">Email</p>
          <input
            type="email"
            placeholder="Email"
            className="border rounded-md pl-4 h-9 mx-5 w-1/3"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <p className="text-gray-950 font-medium text-xl my-2 mx-5">Job Title</p>
          <input
            type="text"
            placeholder="Job Title"
            className="border rounded-md w-1/2 pl-4 h-9 mx-5"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
          />
        </div>

        <div>
          <p className="text-gray-950 font-medium text-xl my-2 mx-5">Description</p>
          <textarea
            placeholder="Description"
            className="border rounded-md w-11/12 pl-4 h-20 mx-5"
            style={{ resize: "none", wordWrap: "break-word" }}
            rows={5}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div>
          <p className="text-gray-950 font-medium text-xl my-2 mx-5">Language</p>
          <select
            className="border rounded-md w-1/4 pl-4 h-9 mx-5"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option value="english">English</option>
            <option value="vietnamese">Vietnamese</option>
          </select>
        </div>

        <div>
          <p className="text-gray-950 font-medium text-xl my-2 mx-5">Avatar</p>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="border mx-5"
          />
          {avatar && (
            <img src={avatar} alt="Avatar Preview" className="mt-2 w-24 h-24 rounded-full border mx-5" />
          )}
        </div>

        {/* Social Media Links */}
        <div>
          <p className="text-gray-950 font-medium text-xl my-2 mx-5">Social Media Links</p>
          <input
            type="url"
            placeholder="Facebook Link"
            className="border rounded-md pl-4 w-1/2 h-9 mx-5"
            value={facebookLink}
            onChange={(e) => setFacebookLink(e.target.value)}
          />
          <input
            type="url"
            placeholder="LinkedIn Link"
            className="border rounded-md pl-4 w-1/2 h-9 mx-5 my-2"
            value={linkedinLink}
            onChange={(e) => setLinkedinLink(e.target.value)}
          />
          <input
            type="url"
            placeholder="YouTube Link"
            className="border rounded-md pl-4 w-1/2 h-9 mx-5"
            value={youtubeLink}
            onChange={(e) => setYoutubeLink(e.target.value)}
          />
        </div>

        <div className='d-flex w-full justify-end'>
          <button type="submit" className="btn btn-dark mt-4 text-xl w-1/3 mx-4">Update your Information</button>
        </div>
      </form>
    </div>
  );
};

export default ProfileInformation;
