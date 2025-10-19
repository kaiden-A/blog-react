
import './styles/Sidebar.css'
import { Link } from 'react-router-dom';
function SidebarAdmin(){

    return(

        <div className="sidebar">
            <div className="sidebar-header">
                <div className="admin-logo">Blog<span>Hub</span> Admin</div>
                <div className="admin-subtitle">Personal Dashboard</div>
            </div>
            
            <div className="sidebar-nav">
                <div className="nav-item active">
                    <i>📊</i>
                    <span>Dashboard</span>
                </div>
                <div className="nav-item">
                    <i>👥</i>
                    <span>Users</span>
                </div>
                <div className="nav-item">
                    <i>📝</i>
                    <span>Posts</span>
                </div>
                <div className="nav-item">
                    <i>💬</i>
                    <span>Comments</span>
                </div>
                <div className="nav-item">
                    <i>📈</i>
                    <span>Analytics</span>
                </div>
                <div className="nav-item">
                    <i>⚙️</i>
                    <span>Settings</span>
                </div>
                <div className="nav-item">
                    <i>🛡️</i>
                    <span>Security</span>
                </div>
            </div>
            
            <div className="sidebar-footer">
                <div className="admin-info">
                    <div className="admin-avatar">AD</div>
                    <div className="admin-details">
                        <h4>Alex Johnson</h4>
                        <p>Super Administrator</p>
                    </div>
                </div>
                <Link to={'/'} className="btn btn-outline" style={{width: "100%" , textAlign: "center"}}>Back to Site</Link>
            </div>
        </div>
    )

}

export default SidebarAdmin;