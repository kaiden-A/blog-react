import './styles/Dashboard.css';

import { Link  , useNavigate , useLocation} from 'react-router-dom';
import { useState , useEffect } from 'react';
import LoadingSpinner from '../Global/LoadingSpinner';

function Dashboard(){
 

    const [data , setData] = useState({});
    const [loading , setLoading] = useState(true);

    const navigate = useNavigate();
    const location = useLocation();

    const changeLoc = (link) => {
        navigate(link);
    }

    useEffect(() => {

        if(location.pathname !== "/admin/dashboard") return;
        const fetchData = async () => {

            
            
            try{    

                const responses = await fetch(`https://backend-service-pmqg.onrender.com/api/admin/profile` , {
                    credentials : "include"
                });

                const data = await responses.json();
                setData(data);
                setLoading(false);

            }catch(err){
                console.log(err);
            }
        }

        fetchData()

    } , []);

    if(loading){
        return <LoadingSpinner text='fetching profile...' size='medium'/>
    }

    return(
        <>
            <title>Admin's Dashboard</title>
    
            <div className="main-content">

                <div className="top-header">
                    <div className="page-title">
                        <h1>Dashboard Overview</h1>
                        <p>{`Welcome back, ${data.author}! Here's what's happening with your blog today.`}</p>
                    </div>
                    
                    <div className="header-actions">
                        <div className="search-box">
                            <span className="search-icon">🔍</span>
                            <input type="text" placeholder="Search..." />
                        </div>
                        
                        <div className="notification-icon">
                            <span>🔔</span>
                            <span className="notification-badge">5</span>
                        </div>
                        
                        <Link to={'/admin/post'}>
                            <button className="btn btn-accent">+ New Post</button>
                        </Link>
                        
                    </div>
                </div>
                
                
                <div className="dashboard-content">
                
                    <div className="welcome-section">
                        <div className="welcome-text">
                            <h2>{`Hello, ${data.author}! `}👋</h2>
                            <p>Welcome to your admin dashboard. Here you can manage all aspects of your BlogHub platform.</p>
                        </div>
                        <div className="welcome-actions">
                            <button className="btn" style={{background: "rgba(255,255,255,0.2)" , color: "white" ,  border: "1px solid rgba(255,255,255,0.3)"}}>View Reports</button>
                            <button className="btn" style={{background: "white" , color: "var(--primary)"}}>Quick Settings</button>
                        </div>
                    </div>
                    
                    
                    <div className="stats-grid">
                        <div className="stat-card">
                            <div className="stat-icon users">👥</div>
                            <div className="stat-info">
                                <h3>{data.followers}</h3>
                                <p>Followers</p>
                            </div>
                        </div>
                        
                        <div className="stat-card">
                            <div className="stat-icon posts">📝</div>
                            <div className="stat-info">
                                <h3>{data.blog}</h3>
                                <p>Total Posts</p>
                            </div>
                        </div>
                        
                        <div className="stat-card">
                            <div className="stat-icon comments">💬</div>
                            <div className="stat-info">
                                <h3>{data.comment}</h3>
                                <p>Total Comments</p>
                            </div>
                        </div>
                        
                        <div className="stat-card">
                            <div className="stat-icon views">👁️</div>
                            <div className="stat-info">
                                <h3>{data.following}</h3>
                                <p>Following</p>
                            </div>
                        </div>
                    </div>
                    
                    
                    <div className="quick-actions-section">
                        <div className="section-header">
                            <h2 className="section-title">Quick Actions</h2>
                        </div>
                        
                        <div className="quick-actions-grid">
                            <div className="action-card" onClick={() => changeLoc('/admin/post')}>
                                <div className="action-icon">📝</div>
                                <h4>Write Post</h4>
                                <p>Create new blog content</p>
                            </div>

                            <div className="action-card" onClick={() => changeLoc('/admin/blogs')}>
                                <div className="action-icon">📊</div>
                                <h4>Manage Blogs</h4>
                                <p>Update , Delete and Review past Blog</p>
                            </div>
                            
                            <div className="action-card" onClick={() => changeLoc('/admin/follower')}>
                                <div className="action-icon">👥</div>
                                <h4>Manage Followers</h4>
                                <p>View and manage all Followers</p>
                            </div>
                            
                            <div className="action-card">
                                <div className="action-icon">💬</div>
                                <h4>Moderate Comments</h4>
                                <p>Review and manage comments</p>
                            </div>
                            
                            <div className="action-card" onClick={() => changeLoc('/admin/profile')}>
                                <div className="action-icon">👤</div>
                                <h4>Profile</h4>
                                <p>Setup and personalised your Profile</p>
                            </div>
                            
                            <div className="action-card">
                                <div className="action-icon">⚙️</div>
                                <h4>Site Settings</h4>
                                <p>Configure site options</p>
                            </div>
                            
                            <div className="action-card">
                                <div className="action-icon">🛡️</div>
                                <h4>Security</h4>
                                <p>Manage security settings</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Dashboard;