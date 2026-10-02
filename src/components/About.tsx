import "./styles/About.css";
import { config } from "../config";

const About = () => {
  // Split the description by double newlines to create paragraphs
  const paragraphs = config.about.description.split('\n\n');

  return (
    <div className="about-section" id="about">
      {/* Mobile-only robot character — mirrors the desktop 3D character on the left */}
      <div className="about-mobile-image">
        <div className="about-mobile-image-glow"></div>
        <div className="about-robot-scanline"></div>
        <img src="/images/robot_about.jpg" alt="Robot Character" className="about-robot-img" />
      </div>
      <div className="about-me">
        <h3 className="title">{config.about.title}</h3>
        <div className="about-content">
          {paragraphs.map((paragraph, index) => (
            <p key={index} className="para">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
