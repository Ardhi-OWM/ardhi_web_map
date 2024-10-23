import { useState, useEffect } from 'react';
import { Settings, Bell, BadgeHelp } from 'lucide-react';


const SideBar = () => {
    const [theme, setTheme] = useState('dark');

    // Function to apply the saved theme or system preference
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');

        if (savedTheme) {
            setTheme(savedTheme);
            document.documentElement.classList.add(savedTheme);
        } else {
            const prefersLightMode = window.matchMedia('(prefers-color-scheme: light)').matches;
            setTheme(prefersLightMode ? 'white' : 'dark');
            document.documentElement.classList.add(prefersLightMode ? 'white' : 'dark');
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

    return (
        <div className="flex flex-col min-h-screen justify-end">
            <div className="pb-10 pl-5">
                <div className="pb-5">
                    <span
                        id="theme-toggle"
                        onClick={toggleTheme}
                        className="underline cursor-pointer underline-offset-4"
                    >
                        {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
                    </span>
                </div>
                <div>
                    {/* Settings, Bell, and BadgeHelp Icons */}
                    <div className="flex items-center mb-5">
                        <Settings className="text-ourGreen" />
                        <span className="ml-2">Settings</span>
                    </div>
                    <div className="flex items-center mb-5">
                        <Bell className="text-ourGreen" />
                        <span className="ml-2">Notifications</span>
                    </div>
                    <div className="flex items-center mb-5">
                        <BadgeHelp className="text-ourGreen" />
                        <span className="ml-2">Help</span>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default SideBar;
