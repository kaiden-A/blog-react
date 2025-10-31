import '../styles/DeleteBlog.css'

function DeletePopup({title , boxTitle ,  msg , isOpen , onClose , handleDelete}){

    if (!isOpen) return null

    return (

        <div className="modal" id="deleteModal">
            <div className="modal-content">
                <div className="modal-header">
                    <h3 className="modal-title">{boxTitle}</h3>
                    <button className="close-modal" onClick={onClose}>&times;</button>
                </div>
                <div className="modal-body">
                    <p>{msg}</p>
                    <p><strong>{title}</strong></p>
                </div>
                <div className="modal-footer">
                    <button className="btn btn-outline" onClick={onClose}>Cancel</button>
                    <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
                </div>
            </div>
        </div>
    )

}

export default DeletePopup;