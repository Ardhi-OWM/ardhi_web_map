import React, { useState } from 'react';

const ProfileMenu = () => {
    // State to hold the profile picture URL
    const [profilePicture, setProfilePicture] = useState('https://example.com/default-profile.jpg');
    const [dropdownOpen, setDropdownOpen] = useState(false);

    // Toggle dropdown
    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    // Handle file change and update profile picture
    const handleProfileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setProfilePicture(e.target.result);  // Update state with the new profile picture URL
            };
            reader.readAsDataURL(file);  // Convert the image to a base64 URL
        }
    };

    return (
        <div className="profile-menu">
            {/* Display the profile picture */}
            <img
                src={profilePicture}
                alt="Profile"
                style={{ width: '40px', height: '40px', borderRadius: '50%', cursor: 'pointer' }}
                onClick={toggleDropdown}  // Toggle the dropdown on click
            />

            {dropdownOpen && (
                <ul className="dropdown-menu">
                    <li><a href="#profile">Profile</a></li>
                    <li><a href="#settings">Settings</a></li>
                    <li><a href="#logout">Logout</a></li>
                    {/* Change Profile Picture Option */}
                    <li>
                        <label htmlFor="fileInput" style={{ cursor: 'pointer' }}>
                            Change Profile Picture
                        </label>
                        <input
                            type="file"
                            id="fileInput"
                            style={{ display: 'none' }}  // Hide the input, show label instead
                            accept="image/*"  // Accept only image files
                            onChange={handleProfileChange}
                        />
                    </li>
                </ul>
            )}
        </div>
    );
};

export default ProfileMenu;
/* 
When a user uploads a profile picture, you send the image to the backend via an API.
Store the image URL in the user's profile data.
Fetch the profile picture URL from the backend whenever the user logs in or navigates to the profile page.
Example API Integration (Optional)
If you're handling this with an API, you can modify handleProfileChange to send the image to your backend:

___ 
const handleProfileChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append('profilePicture', file);
  
      try {
        const response = await fetch('https://your-api.com/upload-profile-picture', {
          method: 'POST',
          body: formData,
        });
  
        const result = await response.json();
        setProfilePicture(result.profilePictureUrl);  // Update state with the new profile picture URL from the server
      } catch (error) {
        console.error('Error uploading profile picture:', error);
      }
    }
  };
 */