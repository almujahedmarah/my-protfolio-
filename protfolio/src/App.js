import "./App.css";
import Home from "./comp/Home";
import Navbar from "./comp/Navbar";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from "./comp/About";
import Vid from "./comp/img/Vid";

function App() {
  return (
    <div className="App">
      <Navbar />
      
      <Routes>
     <Route exact="true" path="/" element={<Home />}></Route>
     <Route path="/About" element={<About />}></Route>
     <Route path="/Vid" element={<Vid />}></Route>
        </Routes>
    </div>
  );
}

export default App;
