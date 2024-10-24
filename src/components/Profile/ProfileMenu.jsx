import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import { CircleUser } from 'lucide-react';


const ProfileMenu = () => {
    // State to hold the profile picture URL and user info
    const [profilePicture, setProfilePicture] = useState(null);
    const [user, setUser] = useState({
        name: "John Doe",  // Replace with the real user name
        email: "johndoe@example.com",  // Replace with the real user email
    });

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

            {/* Dropdown menu with user details */}
            {dropdownOpen && (
                <div className="dropdown-menu dropdowns-container mr-20 fixed right-0 top-10 w-60 border-current rounded-md">
                    <ul className="py-1">
                        {/* User information */}
                        <li className="dropdowns flex items-center px-4 py-2 rounded-t-md">
                            {profilePicture ? (
                                <Avatar
                                    alt={user.name}
                                    src={profilePicture}
                                    sx={{ width: 40, height: 40 }}  // Adjust size as needed
                                />
                            ) : (
                                <Avatar sx={{ width: 40, height: 40, backgroundColor: '#2ecc40' }}>
                                    <CircleUser className="w-10 h-10 text-gray-100" />
                                </Avatar>
                            )}
                            {/* User's name and email */}
                            <div className="ml-3">
                                <p className="text-sm font-semibold">{user.name}</p>
                                <p className="text-xs italic text-gray-500">{user.email}</p>
                            </div>
                        </li>

                        {/* Other dropdown items */}
                        <li className="dropdowns border-t border-gray-500/[.35]">Your Profile</li>
                        <li className="dropdowns" > <a href='/settings' target='_blank' > Settings </a> </li>
                        <li className="dropdowns border-t border-gray-500/[.35]">Help us Improve</li>
                        <li className="dropdowns rounded-b-md">
                            <a href="/logout"> Log Out</a>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default ProfileMenu;
