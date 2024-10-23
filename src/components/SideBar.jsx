import { useState, useEffect, useRef } from 'react';// Import the useNavigate hook
import { Settings, Bell, BadgeHelp } from 'lucide-react';
import { Notifications as notificationData } from '../constants'; // Import notifications data


const SideBar = () => {
    const [theme, setTheme] = useState('dark');
    const [notifications, setNotifications] = useState(notificationData);
    const [showNotifications, setShowNotifications] = useState(false); // Control pop-up visibility
    const [hasNewNotifications, setHasNewNotifications] = useState(false); // Track new notifications
    const [clickedNotifications, setClickedNotifications] = useState([]); // Track clicked notifications
    const popUpRef = useRef(null); // Reference to the pop-up div

    // ---------------------------- THEME MODES ----------------------------
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            setTheme(savedTheme);
            document.documentElement.classList.add(savedTheme); // Apply saved theme on load
        } else {
            const prefersLightMode = window.matchMedia('(prefers-color-scheme: light)').matches;
            const defaultTheme = prefersLightMode ? 'white' : 'dark';
            setTheme(defaultTheme);
            document.documentElement.classList.add(defaultTheme);
        }
    }, []);

    const toggleTheme = () => {
        if (theme === 'dark') {
            document.documentElement.classList.remove('dark');
            document.documentElement.classList.add('white');
            setTheme('white');
            localStorage.setItem('theme', 'white');
        } else {
            document.documentElement.classList.remove('white');
            document.documentElement.classList.add('dark');
            setTheme('dark');
            localStorage.setItem('theme', 'dark');
        }
    };

    useEffect(() => {
        return () => {
            document.documentElement.classList.remove('dark', 'white');
        };
    }, []);

    // ---------------------------- NOTIFICATIONS ----------------------------

    const areNotificationsDifferent = (newNotifications, storedNotifications) => {
        return JSON.stringify(newNotifications) !== storedNotifications;
    };

    useEffect(() => {
        const storedNotifications = localStorage.getItem('previousNotifications');
        if (!storedNotifications) {
            localStorage.setItem('previousNotifications', JSON.stringify(notifications));
        } else if (areNotificationsDifferent(notifications, storedNotifications)) {
            setHasNewNotifications(true);
            localStorage.setItem('previousNotifications', JSON.stringify(notifications));
        }
    }, [notifications]);


    // Handle notification click and mark it as read
    const handleNotificationClick = (notificationId) => {
        const updatedClickedNotifications = [...clickedNotifications, notificationId];
        setClickedNotifications(updatedClickedNotifications); // Update the state
        localStorage.setItem('clickedNotifications', JSON.stringify(updatedClickedNotifications)); // Store in localStorage
    };

    // Load clicked notifications from localStorage when the component mounts
    useEffect(() => {
        const storedClickedNotifications = localStorage.getItem('clickedNotifications');
        if (storedClickedNotifications) {
            setClickedNotifications(JSON.parse(storedClickedNotifications));
        }
    }, []);


    const handleBellClick = () => {
        setShowNotifications(!showNotifications);
        setHasNewNotifications(false);
        localStorage.setItem('previousNotifications', JSON.stringify(notifications));
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (popUpRef.current && !popUpRef.current.contains(event.target)) {
                setShowNotifications(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [popUpRef]);
    // ---------------------------- SETTINGS ----------------------------
    const openSettingsPage = () => {
        window.open('/settings', '_blank'); // Opens /settings in a new tab
    };
    // ---------------------------- RETURN ----------------------------
    return (
        <div className="flex flex-col min-h-screen justify-end border-r border-gray-500 border-opacity-20 rounded p-3 overflow-y-auto">
            <div className="pb-10 pl-5">
                <div className="pb-5">
                    <span
                        id="theme-toggle"
                        onClick={toggleTheme}
                        className="underline cursor-pointer underline-offset-4"
                    >
                        {theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                    </span>
                </div>
                {/* Settings, Bell, and BadgeHelp Icons */}
                <div className="mb-5">
                    <div className="flex items-center mb-5 relative">
                        {/* Bell Icon with Red Dot */}
                        <div className="relative flex cursor-pointer" onClick={handleBellClick}>
                            <Bell className="text-ourGreen" />
                            <span className="ml-2">Notifications</span>
                            {hasNewNotifications && (
                                <span className="absolute top-0 right-0 bg-red-500 rounded-full h-3 w-3"></span>
                            )}
                        </div>
                        {/* Notifications Pop-up */}
                        {showNotifications && (
                            <div
                                ref={popUpRef}
                                className={`absolute top-35 w-64 bg-${theme === 'dark' ? 'gray-800' : 'white'
                                    } border border-gray-300 rounded-lg shadow-lg p-4 z-50`}
                                style={{ transform: 'translateX(10px) translateY(-10px)', maxWidth: '90vw' }}
                            >
                                <h3 className="font-bold mb-2">Latest Notifications</h3>
                                <ul>
                                    {notifications.slice(0, 5).map((notification) => (
                                        <li
                                            key={notification.id}
                                            className={`py-1 ${clickedNotifications.includes(notification.id) ? 'text-gray-500' : ''}`} // Apply gray color to clicked links
                                        >
                                            <a
                                                href={notification.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="hover:underline"
                                                onClick={() => handleNotificationClick(notification.id)} // Track clicked notification
                                            >
                                                <p className="text-sm">{notification.name}</p>
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                    <div
                        className="flex items-center mb-5 cursor-pointer"
                        onClick={openSettingsPage} // Call the function to open in new tab
                    >
                        <Settings className="text-ourGreen" />
                        <span className="ml-2">Settings</span>
                    </div>
                    <div
                        className="flex items-center mb-5 cursor-pointer"
                        onClick={() => window.open('https://ardhi.slab.com/posts/help-page-idwmu284?shr=_TwiAyo7tThV4H3IWU7pmshx', '_blank')}
                    >
                        <BadgeHelp className="text-ourGreen" />
                        <span className="ml-2">Help</span>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default SideBar;
