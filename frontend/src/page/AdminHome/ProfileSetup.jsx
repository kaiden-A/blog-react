
import { Link } from "react-router-dom";


import ChangePassword from "./components/ChangePassword";
import ChangeProfile from "./components/ChangeProfile";
import { useState } from "react";
function ProfileSetup(){

    const[data , setData] = useState({});

    

    return(
        <>
            <title>Profile Setup</title>
            <div className="main-content">

                <div className="top-header">
                    <div className="page-title">
                        <h1>Profile Settings</h1>
                        <p>Manage your personal information and account security</p>
                    </div>
                    
                    <div className="header-actions">
                        <div className="notification-icon">
                            <span>🔔</span>
                            <span className="notification-badge">3</span>
                        </div>
                        
                        <Link to={'/admin/dashboard'} className="btn btn-outline">Back to Dashboard</Link>
                    </div>
                </div>

                <div className="profile-settings-content">

                    <ChangeProfile/>
                   <ChangePassword/>    
                </div> 
  

            </div>
        </>
    )
}

export default ProfileSetup;