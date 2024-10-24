import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import Header from './Components/Header';
import SideBar from './Components/SideBar';
import MapComponent from './Components/mapComponents/MapComponent';
import Settings from './Components/Profile/Settings';
import APIConnections from './Components/APIConnections';
import Converter from './Components/Converter';
import ViewAnalytics from './Components/ViewAnalytics';


// Layout component with only the Header
function Layout({ children }) {
    return (
        <div className="App">
            <Header />
            <div className="w-full">{children}</div>
        </div>
    );
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};
// Layout with Header and SideBar (for Dashboard only)
function DashboardLayout() {
    return (
        <div className="App">
            <Header />
            <div className="flex">
                <SideBar />
                <div className="content-container">
                    <MapComponent />
                    <ViewAnalytics />
                </div>
            </div>

        </div>
    );
}

function App() {
    return (
        <Router>
            <Routes>
                {/* Redirect from "/" to "/dashboard" */}
                <Route path="/"
                    element={
                        <Navigate to="/dashboard" />
                    }
                />


                {/* Route for Dashboard with SideBar */}
                <Route path="/dashboard"
                    element={<DashboardLayout />
                    }
                />

                {/* Other routes with only the Header */}
                <Route path="/api-connections"
                    element={
                        <Layout>
                            <APIConnections />
                        </Layout>}
                />
                <Route path="/converter"
                    element={
                        <Layout>
                            <Converter />
                        </Layout>}
                />

                {/* Standalone settings page */}
                <Route path="/settings"
                    element={<Settings />}
                />

                {/* Catch-all route for 404s */}
                <Route path="*"
                    element={
                        <h1>Page Not Found</h1>
                    }
                />
            </Routes>
        </Router>
    );
}
export default App;
