import '../styles/ChangePassword.css';

import Success from '../../Global/Success';
import Error from '../../Global/Error';

import { useState } from 'react';


function ChangePassword(){

    const [success , setSuccess] = useState(false);

    const [password , setPassword] = useState("");
    const [newPassword , setNewPassword] = useState("");
    const [checkPass , setCheckPass] = useState("")

    const [seePass , setSeePass] = useState(false);
    const [seeNewPass , setSeeNewPass] = useState(false);

    const [errPass , setErrPass] = useState(false);
    
    const [errEqual , setErrEqual ] = useState(false);

    const handleForm = async (e) => {

        e.preventDefault();

        try{

            if(checkPass !== newPassword){
                setErrEqual(true);
                return;
            }

            const responses = await fetch(`http://localhost:5000/api/admin/passwords` , {
                method : 'PUT',
                credentials : "include",
                headers : {'Content-Type' : 'application/json'},
                body : JSON.stringify({password , newPassword})
            });

            const data = await responses.json();

            if(data.error && data.type == 'password'){
                setErrPass(true);
            }

            if(data.success){
                setErrPass(false);
                setErrEqual(false);
                setSuccess(true);
            }

        }catch(Err){
            console.log(Err);
        }
    }

    
    return(

        <div className="password-section">
                <div className="section-header">
                    <div className="section-icon">🔒</div>
                    <h2 className="section-title">Change Password</h2>
                </div>
                
                <form className="password-form" onSubmit={handleForm}>
                    <div className="form-group">
                        <label htmlFor="current-password">Current Password</label>
                        <div className="password-container">
                            <input type="password" 
                                className="form-control" 
                                placeholder="Enter your current password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <button type="button" 
                                className="toggle-password" 
                                onClick={() => setSeePass(!seePass)}
                            >{seePass ?  "🔒" : "👁️"}
                            </button>
                        </div>
                        <Error
                            open={errPass}
                            message={'wrong password'}
                        />

                </div>
                    
                    <div className="form-group">
                        <label htmlFor="new-password">New Password</label>
                        <div className="password-container">
                            <input type="password"  
                                className="form-control" 
                                placeholder="Enter your new password"
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                            />
                            <button type="button" className="toggle-password" 
                                onClick={() => setSeeNewPass(!seeNewPass)}
                            >{seeNewPass ?  "🔒" : "👁️"}
                            </button>
                        </div>
                        <Error
                            open={errEqual}
                            message={'Please recheck your password'}
                        />
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
                            <input type="password" 
                                className="form-control" 
                                placeholder="Confirm your new password"
                                value={checkPass}
                                onChange={(e) => setCheckPass(e.target.value)}
                            />
                            <button type="button" className="toggle-password">👁️</button>
                        </div>
                        <div id="passwordMatch" className="strength-text"></div>
                    </div>
                    
                    <div className="form-actions">
                        <button type="reset" className="btn btn-outline">Clear</button>
                        <button type="submit" className="btn btn-accent">Change Password</button>
                    </div>
                </form>

                <Success
                    open={success}
                    message={"Password Upadate Succesfully"}
                />
        </div>
    )

}

export default ChangePassword;