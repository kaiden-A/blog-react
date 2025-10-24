import './styles/login.css';
import { useState } from 'react';
import { Link , useNavigate} from 'react-router-dom';

function Login(){

    const [showPassword , setShowPassword] = useState(false);
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");

    const navigate = useNavigate();

    const handleForm = async (e) => {

        e.preventDefault();

        try{

            const responses = await fetch(`http://localhost:5000/api/login` , {
                method : 'POST',
                headers : {'Content-Type' : 'application/json'},
                body : JSON.stringify({email , password}),
                credentials : "include"
            })

            const data = await responses.json();
            
            if(data.success){
                navigate('/admin/dashboard')
            }

        }catch(err){
            console.log(err);
        }

    }

    const changeEmail = (e) => {
        setEmail(e.target.value);

    }
    const changePassword = (e) => {
        setPassword(e.target.value)
    }

    return(

        <>
            <title>Login page</title>
            <div className="auth-container">
                <div className="auth-card">
                    <div className="auth-header">
                        <div className="auth-logo">Blog<span>Hub</span></div>
                        <h1 className="auth-title">Welcome Back</h1>
                        <p className="auth-subtitle">Sign in to your account to continue</p>
                    </div>
                    
                    <form className="auth-form"  onSubmit={handleForm}>
                        <div className="form-group">
                            <label htmlFor="login-email">Email Address</label>
                            <input type="email" className="form-control" placeholder="Enter your email" value={email} required onChange={changeEmail} />
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="login-password">Password</label>
                            <div className="password-container">
                                <input type="password" className="form-control" placeholder="Enter your password" value={password} required onChange={changePassword} />
                                <button 
                                    type="button" 
                                    className="toggle-password" 
                                    onClick={() => setShowPassword(!showPassword)}
                                >{showPassword ? "👁️" :  "🔒"}
                                </button>
                            </div>
                        </div>
                        
                        <div className="form-options">
                            <a href="#" className="forgot-password">Forgot password?</a>
                        </div>
                        
                        <button type="submit" className="btn btn-accent">Sign In</button>
                    </form>
                    
                    <div className="auth-divider">
                        <span>New to BlogHub?</span>
                    </div>
                    
                    <Link to={'/singup'} className="btn btn-outline">Create an Account</Link>
                    
                    <div className="auth-footer">
                        <p>By continuing, you agree to our <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.</p>
                    </div>
                </div>
            </div>
        </>
        
    )


}

export default Login;