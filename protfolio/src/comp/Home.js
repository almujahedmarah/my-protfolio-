import React from "react";
import About from "./About";
// import EmailIcon from '@mui/icons-material/Email';
import Vid from "./Vid";
export default function Home() {
  return (
    <div>
      <div className="home">
      <div data-aos="fade-down-right">
        <div className="hello">
          <p>Hello world</p>
          <h1>Marah Almujahed</h1>
          <h3 className="homebrwn"> Full Stack JavaScript Developer</h3>
          <p className="p"> always looking for new challenges 
              persistent , full of life  </p>
        </div>
        </div>
        <div>
          <img className="img" src="https://i.pinimg.com/564x/97/63/93/9763932614e505b3d68cbf30949919f5.jpg"/>
        </div>
      </div>
        <About />
        <Vid/>
    </div>
  );
}
