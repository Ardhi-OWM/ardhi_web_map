import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import { CircleUser } from 'lucide-react';


const ProfileMenu = () => {
    // State to hold the profile picture URL
    const [profilePicture, setProfilePicture] = useState(null);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    // Toggle dropdown
    const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

    // Function to handle image error (fallback to icon)
    const handleImageError = () => {
        setProfilePicture(null); // Reset the profile picture to null if it fails to load
    };

    return (
        <div className="profile-menu relative">
            {/* Display the profile picture or fallback to icon */}
            <div className="flex items-center cursor-pointer" onClick={toggleDropdown}>
                {profilePicture ? (
                    <Avatar
                        alt="Profile"
                        src={profilePicture}
                        onError={handleImageError} // If image fails to load, fallback
                        sx={{ width: 40, height: 40 }} // Material UI inline styles for size
                    />
                ) : (
                    <Avatar sx={{ width: 40, height: 40, backgroundColor: '#2ecc40' }}>
                        <CircleUser className="w-10 h-10 text-gray-100" /> {/* Default icon */}
                    </Avatar>
                )}
            </div>

            {/* Dropdown menu with higher z-index */}
            {dropdownOpen && (
                <div className="dropdown-menu dropdowns-container mr-20 fixed right-0 top-14 w-52 border-current rounded-md">
                    <ul className="py-1">
                        <li className="dropdowns rounded-t-md">Signed in as: </li>
                        <li className="dropdowns border-t border-gray-500/[.35]">Your Profile</li>
                        <li className="dropdowns" href= '/settings'>Settings</li>
                        <li className="dropdowns border-t border-gray-500/[.35]">Help us Improve</li>
                        <li className="dropdowns rounded-b-md">Log Out</li>
                    </ul>
                </div>

            )
            }
        </div >
    );
};

export default ProfileMenu;
