
import { useEffect, useState } from "react";
import LoadingSpinner from '../../Global/LoadingSpinner'
import "../styles/ProfileSetup.css"
function ChangeProfile(){


    const[bio , setBio] = useState("");
    const [fullName , setFullName] = useState("");
    const [email , setEmail] = useState("");
    const[username , setUsername] = useState("");
    const [loading , setLoading]= useState(true);

    useEffect(() => {

        const fetchData = async () => {

            try{

                const responses = await fetch(`http://localhost:5000/api/admin/profiles` , {
                    credentials : "include"
                })

                const data = await responses.json();
                setFullName(data.fullName);
                setBio(data.bio);
                setEmail(data.email);
                setUsername(data.author);
                setLoading(false);

            }catch(err){
                console.log(err);
            }
        }

        fetchData();
    } , []);


    if(loading){
        return <LoadingSpinner/>
    }

    return(

        <div className="profile-section">
            <div className="section-header">
                <div className="section-icon">👤</div>
                <h2 className="section-title">Profile Information</h2>
            </div>
            
            <form className="profile-form" id="profileForm">
                <div className="form-group">
                    <label htmlFor="full-name">Full Name</label>
                    <input type="text" id="full-name" 
                        className="form-control" 
                        placeholder="Enter your full name" 
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)} 
                    />
                 </div>
                
                <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input type="email" id="email" className="form-control" placeholder="Enter your email" value={email} disabled/>
                    <small style={{color: "var(--gray)" , fontSize: "0.8rem" , marginTop: "5px"}}>Email cannot be changed</small>
                </div>
                
                <div className="form-group">
                    <label htmlFor="bio">Bio</label>
                    <textarea id="bio" className="form-control" 
                        value={bio} 
                        placeholder="Tell us about yourself..."
                        onChange={(e) => setBio(e.target.value) }
                    >
                        
                    </textarea>
                </div>
                
                <div className="form-actions">
                    <button type="reset" className="btn btn-outline">Reset Changes</button>
                    <button type="submit" className="btn btn-accent">Update Profile</button>
                </div>
            </form>
            

            <div className="profile-preview">
                <div className="preview-header">
                    <div className="preview-avatar">{username[0]}</div>
                    <div className="preview-details">
                        <h3 id="previewName">{username}</h3>
                        <p id="previewRole">Super Administrator</p>
                    </div>
                </div>
                <div className="preview-bio" id="previewBio">
                    Experienced content administrator with over 5 years in digital publishing. Passionate about creating engaging content and managing online communities. Love hiking and photography in my free time.
                </div>
            </div>
        </div>
    )

}

export default ChangeProfile;