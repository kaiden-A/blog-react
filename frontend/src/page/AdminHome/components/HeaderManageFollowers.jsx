

function HeaderManageFollowers(){

   return(

         <div className="top-header">
            <div className="page-title">
                <h1>Followers Management</h1>
                <p>Manage your followers and who you're following</p>
            </div>
            
            <div className="header-actions">
                <div className="search-box">
                    <span className="search-icon">🔍</span>
                    <input type="text" placeholder="Search followers..."/>
                </div>
                
                <div className="notification-icon">
                    <span>🔔</span>
                    <span className="notification-badge">3</span>
                </div>
                
                <a href="admin-dashboard.html" className="btn btn-outline">Back to Dashboard</a>
            </div>
        </div>
   )
    
}

export default HeaderManageFollowers;