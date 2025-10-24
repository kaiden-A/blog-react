import React from "react";
import "./styles/Unavailable.css";

const Unavailable = ({ 
  title = "This feature is not available yet", 
  description = "We're working on it! Stay tuned for updates." 
}) => {
  return (
    <div className="feature-unavailable">
      <div className="feature-box">
        <div className="feature-icon">🚧</div>
        <h2>{title}</h2>
        <p>{description}</p>
      <div className="feature-glow"></div>
      </div>
    </div>
  );
};

export default Unavailable;
