// Import css
import './App.css';

// Import React module
import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

// Import Components
import Main from "./Components/pages/Main/Main";

function App() {
  return (
    <Router>
        <Routes>
            <Route exact path="/" element={<Main />} />
            {/*<Route exact path="/About" element={<Main />} />*/}
            {/*<Route exact path="/profile" element={<Profile />} />*/}
        </Routes>
    </Router>
  );
}

export default App;
