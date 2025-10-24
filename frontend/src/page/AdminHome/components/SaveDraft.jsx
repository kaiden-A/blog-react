import "../styles/SaveDraft.css";

const SaveDraft = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <h2>Save Draft</h2>
        <p>Successfully save the blog </p>
        <button className="close-modal" onClick={onClose}>&times;</button>
      </div>
    </div>
  );
};

export default SaveDraft;
