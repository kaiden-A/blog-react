import './Profile.css'
import PopupMessage from '../../Global/PopupMessage';
import { useState } from 'react';
function Profile({blogs}){

    const [success  , setSuccess] = useState(false);
    const [erroBox , setErrorBox] = useState(false);
    const [errMsg , setErrMsg] = useState("");

    const followAuthor = async () => {

        try{

            const responses = await fetch(`http://localhost:5000/api/front/follows/${blogs.id}` , {
                credentials : 'include',
                method : 'POST',
                headers : {'Content-Type' : 'application/json'},
            });

            const data = await responses.json();
            console.log(data);

            if(!data.cookies){
                setErrorBox(true);
                setErrMsg(data.msg);
            }

            if(data.error){
                setErrorBox(true);
                setErrMsg(data.msg);
            }

            if(data.success){
                setErrorBox(false);
                setSuccess(true);
            }

        }catch(err){

            console.log(err);
        }
    }


    return(
        <section className="profile-header">
            <div className="container">
                <div className="profile-info">
                    <div className="profile-avatar">{blogs.author[0]}</div>
                    <div className="profile-details">
                        <h1>{blogs.author}</h1>
                        <p className="profile-bio">{blogs.bio ? blogs.bio : "No Bio Yet"} </p>
                        <div className="profile-stats">
                            <div className="profile-stat">
                                <div className="profile-stat-value">{blogs.post}</div>
                                <div className="profile-stat-label">Posts</div>
                            </div>
                            <div className="profile-stat">
                                <div className="profile-stat-value">{blogs.followers}</div>
                                <div className="profile-stat-label">Followers</div>
                            </div>
                            <div className="profile-stat">
                                <div className="profile-stat-value">{blogs.following}</div>
                                <div className="profile-stat-label">Following</div>
                            </div>
                        </div>
                        <div className="profile-actions">
                            <button onClick={followAuthor}  className="btn btn-accent">Follow</button>
                            <button className="btn btn-outline">Message</button>
                        </div>
                    </div>
                </div>
            </div>
            <PopupMessage
                type={'success'}
                message={'Successfully Follow the Author'}
                show={success}
                onClose={() => setSuccess(false)}
            />
            <PopupMessage
                type={'error'}
                message={errMsg}
                show={erroBox}
                onClose={() => setErrorBox(false)}
            />
        </section>
    )

}

export default Profile;