import '../styles/DeleteBlog.css'

function DeleteBlog({title , isOpen , onClose , handleDelete}){

    if (!isOpen) return null

    return (

        <div className="modal" id="deleteModal">
            <div className="modal-content">
                <div className="modal-header">
                    <h3 className="modal-title">Confirm Deletion</h3>
                    <button className="close-modal" onClick={onClose}>&times;</button>
                </div>
                <div className="modal-body">
                    <p>Are you sure you want to delete this blog post? This action cannot be undone.</p>
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

export default DeleteBlog;