import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Navbar() {
  return (
    <div className="nav">
      <ul>
        <Link to="/">
          <img
            className="navimg"
            src="https://i.pinimg.com/564x/97/63/93/9763932614e505b3d68cbf30949919f5.jpg"
          />
        </Link>

        <li>
          {/* <Link className="link" to="/About"> */}
           <a className="link" href="#x"> About Me</a>
          {/* </Link> */}
        </li>
        <li>
          {/* <Link className="link" to="Vid">
            My Project */}
           <a className="link" href="#r"> My Project</a>

          {/* </Link> */}
        </li>
        <li>
        <a href="https://www.linkedin.com/in/marah-al-mujahed-79409a200/" className="link"> <LinkedInIcon /> </a>
        </li>
        <li>
          <a href="https://github.com/almujahedmarah" className="link"><GitHubIcon /></a>
              </li>
      </ul>
    </div>
  );
}
