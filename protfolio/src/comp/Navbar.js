import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";

export default function Navbar() {
  return (
    <div className="nav">
        <ul>
          
            <Link  to="/">
              <img className="navimg" src="https://i.pinimg.com/564x/97/63/93/9763932614e505b3d68cbf30949919f5.jpg" />
            </Link>
          
          <li>
            <Link className="link" to="/About">About me</Link>
          </li>
          <li>
            <Link  className="link"to="Vid">My web</Link>
          </li>
        </ul>

      
    </div>
  );
}
