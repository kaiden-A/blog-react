import '../styles/ChangePassword.css'

function ChangePassword(){

    return(

        <div className="password-section">
                <div className="section-header">
                    <div className="section-icon">🔒</div>
                    <h2 className="section-title">Change Password</h2>
                </div>
                
                <form className="password-form" id="passwordForm">
                    <div className="form-group">
                        <label htmlFor="current-password">Current Password</label>
                        <div className="password-container">
                            <input type="password" id="current-password" className="form-control" placeholder="Enter your current password"/>
                            <button type="button" className="toggle-password" data-target="current-password">👁️</button>
                        </div>
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="new-password">New Password</label>
                        <div className="password-container">
                            <input type="password" id="new-password" className="form-control" placeholder="Enter your new password"/>
                            <button type="button" className="toggle-password" data-target="new-password">👁️</button>
                        </div>
                        <div className="password-strength">
                            <div className="strength-text" id="passwordStrengthText">Password strength</div>
                            <div className="strength-meter">
                                <div className="strength-fill" id="passwordStrengthMeter"></div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="confirm-password">Confirm New Password</label>
                        <div className="password-container">
                            <input type="password" id="confirm-password" className="form-control" placeholder="Confirm your new password"/>
                            <button type="button" className="toggle-password" data-target="confirm-password">👁️</button>
                        </div>
                        <div id="passwordMatch" className="strength-text"></div>
                    </div>
                    
                    <div className="form-actions">
                        <button type="reset" className="btn btn-outline">Clear</button>
                        <button type="submit" className="btn btn-accent">Change Password</button>
                    </div>
                </form>
        </div>
    )

}

export default ChangePassword;