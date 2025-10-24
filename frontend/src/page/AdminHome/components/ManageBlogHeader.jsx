import { Link } from "react-router-dom"

function ManageBlogHeader(){

    return (

        <div className="top-header">
            <div className="page-title">
                <h1>Blog Management</h1>
                <p>Manage all blog posts created by users</p>
            </div>
            
            <div className="header-actions">
                <div className="search-box">
                    <span className="search-icon">🔍</span>
                    <input type="text" placeholder="Search blogs..." />
                </div>
                
                <div className="notification-icon">
                    <span>🔔</span>
                    <span className="notification-badge">5</span>
                </div>
                
                <Link to={'/admin/post'} className="btn btn-accent">+ Create New</Link>
            </div>
        </div>
    )
}

export default ManageBlogHeader