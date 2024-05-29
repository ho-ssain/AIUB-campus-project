import "./Welcome.scss";
import video from "../../assets/videos/v4.mp4";
import { FiFacebook, FiLinkedin, FiTwitter } from "react-icons/fi";
import ScrollDown from "../ScrollDown/ScrollDown";
import logo from "../../assets/imgs/aiub-logo.svg";

const Welcome = () => {
  return (
    <section className="welcome">
      <div className="overlay"></div>
      <video src={video} muted autoPlay loop type="video/mp4"></video>
      <div className="content container">
        <div className="textDiv">
          <span data-aos="fade-up" className="smallText">
            America International University bangladesh
          </span>

          <div className="social-media">
            <FiFacebook className="icon" />
            <FiLinkedin className="icon" />
            <FiTwitter className="icon" />
          </div>
        </div>

        <div data-aos="fade-up" className="cardDiv grid">
          <div className="desInput">
            <h1>Welcome to AIUB Campus Life</h1>
          </div>

          <div className="dateInput">
            <h4>Discover student activities, clubs, facilities, and more!</h4>
          </div>

          <div className="searchOptions flex">
            <img src={logo} alt="logo" />
          </div>
        </div>

        <div data-aos="fade-up" className="welcomeFooterIcons flex">
          <div className="rightIcons">
            <ScrollDown />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
