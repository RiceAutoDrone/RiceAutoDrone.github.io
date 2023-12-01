// Import css
import './App.css';

// Import React module
import React from "react";
import {HashRouter as Router, Route, Routes} from "react-router-dom";

// Import Components
import Main from "./Components/pages/Main/Main";

import Settings from "./Components/pages/Settings/Settings";
import Flight_Controller from "./Components/pages/Settings/Flight_Controller/Flight_Controller";
import RaspberryPi from "./Components/pages/Settings/RaspberryPi/RaspberryPi";
import MarkdownRoute from "./MarkdownRoute";
import Jetson from "./Components/pages/Settings/Jetson/Jetson";

import Hardware from "./Components/pages/Hardware/Hardware";
import Firmware from "./Components/pages/Firmware/Firmware";
import Detection from "./Components/pages/Detection/Detection";

import About from "./Components/pages/About/About";

function App() {
    return (
    <Router>
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/settings/flight_controller" element={<Flight_Controller />} />
            <Route path="/settings/raspberrypi" element={<RaspberryPi />} />
            <Route path="/settings/raspberrypi/:mdFileName" element={<MarkdownRoute />} />
            <Route path="/settings/jetson" element={<Jetson />} />
            <Route path="/hardware" element={<Hardware />} />
            <Route path="/firmware" element={<Firmware />} />
            <Route path="/detection" element={<Detection />} />
            <Route path="/about" element={<About />} />
        </Routes>
    </Router>
    );
}

export default App;
