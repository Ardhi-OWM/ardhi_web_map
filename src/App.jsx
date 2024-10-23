
//import React from 'react';
import MapComponent from './Components/mapComponents/MapComponent';
import Header from './Components/Header';
import SideBar from './Components/SideBar';

function App() {
    return (
        <div className="App">
            < Header />
            <div className="flex">
                <SideBar />
                <MapComponent />
            </div>

        </div>
    );
}

export default App;