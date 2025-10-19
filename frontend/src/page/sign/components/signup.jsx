import './styles/signup.css'

function Signup(){

    return(
        
        <>
            <title>Signup Page</title>
            <div class="auth-container">
                <div class="auth-card">
                    <div class="auth-header">
                        <div class="auth-logo">Blog<span>Hub</span></div>
                        <h1 class="auth-title">Join BlogHub</h1>
                        <p class="auth-subtitle">Create your account to start sharing your stories</p>
                    </div>
                    
                    <form class="auth-form" id="signupForm">
                        <div class="form-group">
                            <label for="signup-username">Username</label>
                            <input type="text" id="signup-username" class="form-control" placeholder="Choose a username" required />
                        </div>
                        
                        <div class="form-group">
                            <label for="signup-email">Email Address</label>
                            <input type="email" id="signup-email" class="form-control" placeholder="Enter your email" required />
                        </div>
                        
                        <div class="form-group">
                            <label for="signup-password">Password</label>
                            <div class="password-container">
                                <input type="password" id="signup-password" class="form-control" placeholder="Create a password" required />
                                <button type="button" class="toggle-password" id="toggleSignupPassword">👁️</button>
                            </div>
                            <div class="password-strength">
                                <div id="password-strength-text">Password strength</div>
                                <div class="strength-meter">
                                    <div class="strength-fill" id="password-strength-meter"></div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="form-group">
                            <label for="confirm-password">Confirm Password</label>
                            <div class="password-container">
                                <input type="password" id="confirm-password" class="form-control" placeholder="Confirm your password" required />
                                <button type="button" class="toggle-password" id="toggleConfirmPassword">👁️</button>
                            </div>
                            <div id="password-match" class="password-strength"></div>
                        </div>
                        
                        <div class="terms-agreement">
                            <input type="checkbox" id="terms" required />
                            <label for="terms">I agree to the <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a></label>
                        </div>
                        
                        <button type="submit" class="btn btn-accent">Create Account</button>
                    </form>
                    
                    <div class="auth-divider">
                        <span>Already have an account?</span>
                    </div>
                    
                    <a href="login.html" class="btn btn-outline">Sign In</a>
                    
                    <div class="auth-footer">
                        <p>By creating an account, you agree to our <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.</p>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Signup;