import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ConcertApp from "./pages/Concerts";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/concerts" element={<ConcertApp />} />
      </Routes>
    </Router>
  );
};

export default App;
