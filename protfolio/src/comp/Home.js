import React from "react";
import Logo from "./img/Logo.jpg"
export default function Home() {
  return (
    <div>
      <div className="home">
        <div>
          <p>Hello world</p>
          <h1>Marah Almujahed</h1>
          <h3 className="homebrwn"> Full Stack JavaScript Developer</h3>
          <p className="p"> always looking for new challenges 
persistent , full of life  </p>
          <div>
            <h4>contact me</h4>
            <p><a>almujahedmarah@gmail.com</a></p>
            <p><a href="inkedin.com/in/marah-al-mujahed">inkedin.com/in/marah-al-mujahed</a></p>
            <p><a href=""></a></p>
          </div>
        </div>
        <div>
          <img className="img" src="https://i.pinimg.com/564x/97/63/93/9763932614e505b3d68cbf30949919f5.jpg"/>
        </div>
      </div>
    </div>
  );
}
