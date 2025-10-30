import './styles/signup.css'
import {Link  ,  useNavigate } from 'react-router-dom';
import { useState} from 'react';

function Signup(){

    const [username , setUsername] = useState("");
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");
    const [checkPassword , setCheckPassword] = useState(""); 
    const [openToggelSign , setOpenToggleSign] = useState(false);
    const [openToggelConfirm , setOpenToggleConfirm] = useState(false);

    const navigate = useNavigate();


    const handleForm = async(e) => {

        e.preventDefault();

        try{

            const responses = await fetch(`http://localhost:5000/api/signup/` , {
                method : 'POST',
                credentials : 'include',
                headers : {'Content-Type' : 'application/json'},
                body : JSON.stringify({email , username , password})
            })

            const data = await responses.json();

            if(data.error){
                alert(data.error);
            }

            if(data.success){
                navigate('/admin/dashboard')
            }

        }catch(err){
            console.log(err);
        }
    }

    return(
        
        <>
            <title>Signup Page</title>
            <div className="auth-container">
                <div className="auth-card">
                    <div className="auth-header">
                        <div className="auth-logo">Blog<span>Hub</span></div>
                        <h1 className="auth-title">Join BlogHub</h1>
                        <p className="auth-subtitle">Create your account to start sharing your stories</p>
                    </div>
                    
                    <form className="auth-form" onSubmit={handleForm}>
                        <div className="form-group">
                            <label htmlFor="signup-username">Username</label>
                            <input type="text"  
                                className="form-control" 
                                placeholder="Choose a username"
                                value={username} 
                                required 
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="signup-email">Email Address</label>
                            <input type="email" 
                                className="form-control" 
                                placeholder="Enter your email" 
                                value={email}
                                required 
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="signup-password">Password</label>
                            <div className="password-container">
                                <input type={openToggelSign ?  "text" : "password" }
                                    className="form-control" 
                                    placeholder="Create a password" 
                                    value={password}
                                    required 
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <button type="button" 
                                    className="toggle-password" 
                                    onClick={() => setOpenToggleSign(!openToggelSign)}
                                >
                                    {openToggelSign ?  "🔒" : "👁️" }
                                </button>
                            </div>
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="confirm-password">Confirm Password</label>
                            <div className="password-container">
                                <input type={openToggelConfirm ? "text" : "password"}
                                    className="form-control" 
                                    placeholder="Confirm your password" 
                                    value={checkPassword}
                                    required 
                                    onChange={(e) => setCheckPassword(e.target.value)}
                                />
                                <button type="button" 
                                    className="toggle-password" 
                                    onClick={() => setOpenToggleConfirm(!openToggelConfirm)}
                                >
                                    {openToggelConfirm ? "🔒" : "👁️" }
                                </button>
                            </div>
                            <div id="password-match" className="password-strength"></div>
                        </div>
                        
                        <div className="terms-agreement">
                            <input type="checkbox" id="terms" required />
                            <label htmlFor="terms">I agree to the <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a></label>
                        </div>
                        
                        <button type="submit" className="btn btn-accent">Create Account</button>
                    </form>
                    
                    <div className="auth-divider">
                        <span>Already have an account?</span>
                    </div>
                    
                    <Link to={'/login'} className="btn btn-outline">Sign In</Link>
                    
                    <div className="auth-footer">
                        <p>By creating an account, you agree to our <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.</p>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Signup;