import './Profile.css'

function Profile({blogs}){


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
                            <a href="#" className="btn btn-accent">Follow</a>
                            <a href="#" className="btn btn-outline">Message</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default Profile;