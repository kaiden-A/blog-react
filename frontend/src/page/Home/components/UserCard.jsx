import { useState , useEffect} from 'react';
import {Link} from 'react-router-dom';
import './styles/UserCard.css';


function UserCard(){

    const [users , setUsers] = useState([]);

    useEffect(() => {

        const fetchData = async() => {
            try{

                const responses = await fetch(`http://localhost:5000/api/front`);
                const data = await responses.json();

                setUsers(data.user);
            }catch(err){
                console.log(err);
            }
        }

        fetchData();
    } , [])

    useEffect(() => {
        console.log(users);
    } , [users])

    return(
        <main className="container">

            <h2 className="section-title">Active Writers</h2>

            <div className="users-grid">
                {
                    users.map( (user , index) => 
                        <div className="user-card" key={index}>
                            <div className="user-header">
                                <div className="user-avatar">U</div>
                                <div className="user-name">{user.name}</div>
                                <div className="user-bio"></div>
                            </div>
                            <div className="user-stat">
                                
                                <div className="stat">
                                    <div className="stat-value">{user.statistic.post}</div>
                                    <div className="stat-label">POST</div>
                                </div>
                                <div className="stat">
                                    <div className="stat-value">{user.statistic.followers}</div>
                                    <div className="stat-label">FOLLOWERS</div>
                                </div>
                                <div className="stat">
                                    <div className="stat-value">{user.statistic.following}</div>
                                    <div className="stat-label">FOLLOWing</div>
                                </div>

                            </div>
                            <div className="user-blogs">

                                {
                                    user.blogs.length > 0 ? (

                                        user.blogs.map((blog , i) => 
                                            <div className="blog-preview" key={i}>
                                                <h4 className="blog-title">{blog.title}</h4>
                                                <p className="blog-excerpt">{blog.description}</p>
                                                <div className="blog-meta">
                                                <a className="read-more" href="#">
                                                    READ MORE
                                                </a>
                                                </div>
                                            </div>
                                        )

                                    ) : (
                                        <p>There are no blog yet</p>
                                    )
                                }
                            </div>
                            <div className="view-profile">
                                <Link to={`/${user.name}`}>
                                    VIEW PROFILE
                                </Link>
                            </div>

                        </div>
                    )
                }
            </div>

        </main>
    )

}

export default UserCard;
    
