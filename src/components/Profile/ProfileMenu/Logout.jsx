import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';  // If you're using React Router

const Logout = () => {
    const navigate = useNavigate();

    useEffect(() => {
        // Example logout logic: Clear user session, tokens, etc.
        localStorage.removeItem('userToken'); // Remove token from local storage or session
        localStorage.removeItem('userInfo');  // Any other user data

        // Navigate to login page after logout
        navigate('/login'); // Redirect to login page
    }, [navigate]);

    return (
        <div className="flex justify-center items-center h-screen">
            <h2 className="text-lg font-semibold">Logging out...</h2>
        </div>
    );
};

export default Logout;
