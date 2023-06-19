import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/common/Navbar/Navbar";
import ExplorePage from "./pages/ExplorePage/ExplorePage";
import UnderConstruction from "./pages/ExplorePage/Error";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<ExplorePage />} />
        <Route path="/explore" element={<ExplorePage/>}/>
        <Route path="*" element={<UnderConstruction />} />
      </Routes>
    </Router>
  );
}

export default App;
