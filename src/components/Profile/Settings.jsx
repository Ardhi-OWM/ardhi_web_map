import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom


// ---------------------------- THEME MODES ----------------------------
const Settings = () => {
    const [theme, setTheme] = useState('dark');

    // Function to apply the saved theme or system preference
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

    // Function to toggle between light and dark themes
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

    // ---------------------------- RETURN  FUNCTION----------------------------
    return (
        <div className="min-h-screen flex flex-col justify-start items-start p-10">
            <h1 className="text-2xl mb-5">Settings Page</h1>
            <p>Manage your settings here.</p>
            <div className="flex justify-between w-full mt-10"> 
                {/* Remove width constraint on the left */}
                <div className="flex-shrink-0"> 
                    {/* Theme Toggle */}
                    <div className="mt-5">
                        <span
                            onClick={toggleTheme}
                            className="underline cursor-pointer underline-offset-4"
                        >
                            {theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                        </span>
                    </div>
                    {/* Go back to dashboard link */}
                    <div className="mt-10">
                        <Link to="/dashboard" className="underline underline-offset-4 cursor-pointer hover:text-ourGreen">
                            Go Back to Dashboard
                        </Link>
                    </div>
                </div>
                
                {/* Right section should take up the rest of the space */}
                <div className="flex-grow">
                    {/* Add additional content here if needed */}
                </div>
            </div>
        </div>
    );
};

export default Settings;