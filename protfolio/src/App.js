import "./App.css";
import Home from "./comp/Home";
import Navbar from "./comp/Navbar";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from "./comp/About";

function App() {
  return (
    <div className="App">
      <Navbar />
      
      <Routes>
     <Route exact="true" path="/" element={<Home />}></Route>
     <Route path="/About" element={<About />}></Route>
        </Routes>
    </div>
  );
}

export default App;
