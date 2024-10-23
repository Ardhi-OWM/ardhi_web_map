import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import SideBar from './Components/SideBar';
import MapComponent from './Components/mapComponents/MapComponent';
import Settings from './Components/Profile/Settings';
import APIConnections from './Components/APIConnections';
import Converter from './Components/Converter';

function App() {
    return (
        <Router>
            <Routes>
                {/* Route for Dashboard */}
                <Route
                    path="/dashboard"
                    element={
                        <div className="App">
                            <Header />
                            <div className="flex">
                                <SideBar />
                                <MapComponent />
                            </div>
                        </div>
                    }
                />

                {/* Route for API Connections */}
                <Route path="/api-connections" element={
                    <APIConnections />
                } />

                {/* Route for Converter */}
                <Route path="/converter" element={<Converter />} />

                {/* Standalone settings page */}
                <Route path="/settings" element={<Settings />} />
            </Routes>
        </Router>
    );
}

export default App;
