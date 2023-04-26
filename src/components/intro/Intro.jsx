import "./intro.css";
import Nex from "./Nex.jpg";

const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, My name is</h2>
          <h1 className="i-name">Olawale</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Front-End Developer</div>
              <div className="i-title-item">CSS</div>
              <div className="i-title-item">HTML</div>
              <div className="i-title-item">React</div>
              <div className="i-title-item">javaScript</div>
              {/* <div className="i-title-item">WordPress</div>
              <div className="i-title-item">FireBase</div>
              <div className="i-title-item">Git</div>
              <div className="i-title-item">Figma</div>
              <div className="i-title-item">PSD to Html</div> */}
            </div>
          </div>
          <p className="i-desc">
            Welcome to my portfolio website! I'm thrilled to share my work and
            experience with you. Whether you're here to learn more about me,
            explore my projects, or get in touch, I hope you find what you're
            looking for. Thank you for taking the time to visit, and I look
            forward to connecting with you!
          </p>
        </div>
        <svg
          width="75"
          height="75"
          viewBox="0 0 75 75"
          fill="none"
          stroke="black"
          className="i-scroll"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="scroll">
            <path
              id="Vector"
              d="M40.5 15L34.5 9L28.5 15"
              stroke-width="3"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              id="Vector_2"
              d="M28.5 24L34.5 30L40.5 24"
              stroke-width="3"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <g id="Group">
              <path
                id="Vector_3"
                d="M9 37.5H60"
                stroke-width="3"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <path
              id="Vector_4"
              d="M34.5 27V9"
              stroke-width="2.9895"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <g id="Group_2">
              <path
                id="Vector_5"
                d="M9 27C9 12.918 20.418 1.5 34.5 1.5C48.5859 1.5 60 12.918 60 27C60 29.8906 60 45.1094 60 48C60 62.082 48.5859 73.5 34.5 73.5C20.418 73.5 9 62.082 9 48C9 45.1094 9 29.8906 9 27Z"
                stroke-width="3"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
          </g>
        </svg>
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <img src={Nex} alt="author wearing a big smile" className="i-img" />
      </div>
    </div>
  );
};

export default Intro;
