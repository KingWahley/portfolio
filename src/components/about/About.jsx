import "./about.css";
import wale from "./wale.JPG";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src={wale}
            alt="author wearing a hat while smilling"
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-desc">
          I am Olawale Peter, a front-end developer with a passion for
          developing user-friendly websites and web applications. Proficient in
          Javascript, HTML, CSS and React. Familiar with Photoshop, Figma, Adobe
          Xd and other design tools. Strong ability to create responsive and
          visually appealing designs with proven ability to work effectively in
          a team enviroment. Strong attention to detail and a passion for
          staying current with the latest technology and industry trends'
        </p>
      </div>
    </div>
  );
};

export default About;
