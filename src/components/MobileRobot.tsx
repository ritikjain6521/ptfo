import "./styles/MobileRobot.css";

const MobileRobot = () => {
  return (
    <div className="mobile-robot-wrapper">
      <div className="mobile-robot">
        {/* Glow aura */}
        <div className="robot-aura"></div>

        {/* Head */}
        <div className="robot-head">
          <div className="robot-antenna">
            <div className="robot-antenna-ball"></div>
          </div>
          <div className="robot-face">
            {/* Eyes */}
            <div className="robot-eyes">
              <div className="robot-eye left-eye">
                <div className="robot-pupil"></div>
                <div className="robot-eye-glow"></div>
              </div>
              <div className="robot-eye right-eye">
                <div className="robot-pupil"></div>
                <div className="robot-eye-glow"></div>
              </div>
            </div>
            {/* Mouth */}
            <div className="robot-mouth">
              <div className="robot-tooth"></div>
              <div className="robot-tooth"></div>
              <div className="robot-tooth"></div>
            </div>
            {/* Cheek lights */}
            <div className="robot-cheek left-cheek"></div>
            <div className="robot-cheek right-cheek"></div>
          </div>
          {/* Head panel */}
          <div className="robot-head-panel">
            <div className="robot-led red"></div>
            <div className="robot-led yellow"></div>
            <div className="robot-led green"></div>
          </div>
        </div>

        {/* Neck */}
        <div className="robot-neck">
          <div className="robot-neck-joint"></div>
        </div>

        {/* Body */}
        <div className="robot-body">
          {/* Chest panel */}
          <div className="robot-chest">
            <div className="robot-chest-screen">
              <div className="robot-screen-line"></div>
              <div className="robot-screen-line short"></div>
              <div className="robot-screen-line"></div>
            </div>
            <div className="robot-chest-buttons">
              <div className="robot-btn btn-red"></div>
              <div className="robot-btn btn-blue"></div>
            </div>
          </div>

          {/* Arms */}
          <div className="robot-arm left-arm">
            <div className="robot-upper-arm"></div>
            <div className="robot-elbow"></div>
            <div className="robot-lower-arm">
              <div className="robot-hand"></div>
            </div>
          </div>
          <div className="robot-arm right-arm">
            <div className="robot-upper-arm"></div>
            <div className="robot-elbow"></div>
            <div className="robot-lower-arm">
              <div className="robot-hand wave-hand"></div>
            </div>
          </div>
        </div>

        {/* Legs */}
        <div className="robot-legs">
          <div className="robot-leg left-leg">
            <div className="robot-thigh"></div>
            <div className="robot-knee"></div>
            <div className="robot-shin"></div>
            <div className="robot-foot"></div>
          </div>
          <div className="robot-leg right-leg">
            <div className="robot-thigh"></div>
            <div className="robot-knee"></div>
            <div className="robot-shin"></div>
            <div className="robot-foot"></div>
          </div>
        </div>

        {/* Shadow */}
        <div className="robot-shadow"></div>
      </div>

      {/* Floating particles */}
      <div className="robot-particles">
        <div className="robot-particle p1"></div>
        <div className="robot-particle p2"></div>
        <div className="robot-particle p3"></div>
        <div className="robot-particle p4"></div>
        <div className="robot-particle p5"></div>
      </div>
    </div>
  );
};

export default MobileRobot;
