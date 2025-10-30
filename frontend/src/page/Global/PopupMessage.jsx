import { useEffect } from "react";
import "./styles/PopupMessage.css";

const PopupMessage = ({ type = "success", message, show, onClose }) => {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => onClose && onClose(), 3000);
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  return (
    <>
      {show && (
        <div className={`popup-message ${type}`}>
          <span className="popup-icon">
            {type === "success" ? "✔️" : "❌"}
          </span>
          <span className="popup-text">{message}</span>
          <button className="popup-close" onClick={onClose}>
            ×
          </button>
        </div>
      )}
    </>
  );
};

export default PopupMessage;
