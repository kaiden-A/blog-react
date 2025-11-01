import Header from "./components/HeaderManageFollowers";
import Stat from "./components/StatGridManageFollower";
import UnfollowUser from "./components/DeletePopup";
import Success from '../Global/Success';
import './styles/ManageFollowers.css';
import { useState , useEffect } from "react";
import LoadingSpinner from "../Global/LoadingSpinner";
import {useNavigate} from 'react-router-dom' ;



function ManageFollowers(){

    const [data , setData] = useState({});
    const [loading , setLoading] = useState(true);
    const [followerTab , setFollowerTab] = useState(true);

    const [openUnfollow , setOpenUnfollow] = useState(false);
    const [unfollowUser , setUnfollowUser] = useState({username : '' , id : ''});

    const navigate = useNavigate();

    useEffect(() => {

        const fetchData = async() => {

            try{

                const responses = await fetch(`https://backend-service-pmqg.onrender.com/api/admin/followers` , {
                    credentials : 'include',
                });

                const data = await responses.json();
                setData(data);
                setLoading(false);

            }catch(err){
                console.log(err);
            }
        }

        fetchData();

    }, []);


    if(loading){
        return <LoadingSpinner text="fetching data..." size="large"/>
    }

    let usedTab = null
    if(followerTab){
        usedTab = data.followers;
    }else{
        usedTab = data.following;
    }

    const unfollow = async (id) => {

        try{

            const responses = await fetch(`https://backend-service-pmqg.onrender.com/api/admin/followers/${id}` , {
                credentials : 'include',
                method : 'PUT',
                headers : {'Content-type' : 'application/json'}
            });

            const data = await responses.json();
            console.log(data);

        }catch(err){
            console.log(err);
        }
    }

    return(
        <>
            <title>Manage Followers</title>
            <div className="main-content">

                <Header/>
                <div className="followers-content">
                    <Stat
                        followers={data.totalFollower}
                        following={data.totalFollowing}
                    />

                    <div className="tabs-container">

                        <div className="tabs-nav">
                            <button className={`tab-btn ${followerTab ? "active" : ""}`} 
                                onClick={() => setFollowerTab(!followerTab)}
                            >{`Followers (${data.totalFollower})`}</button>
                            <button className={`tab-btn ${followerTab ? "" : "active"}`} 
                                onClick={() => setFollowerTab(!followerTab)}
                            >{`Following (${data.totalFollowing})`}</button>
                            <button className="tab-btn" data-tab="suggestions">Suggestions</button>
                        </div>

                        <div className="tab-content active">

                            <div className="users-list-admin">

                                {
                                    usedTab.map( (tab , index) => 

                                        <div className="user-card-admin" key={index}>

                                            <div className="user-avatar-admin">{tab.username[0]}</div>
                                            <div className="user-details-admin">
                                                <h3>{tab.username}</h3>
                                                <p>{tab.bio}</p>
                                                <div className="user-stats-admin">
                                                    <div className="user-stat-admin">{`📝 ${tab.totalBlog} posts`}</div>
                                                    <div className="user-stat-admin">{`👥 ${tab.totalFollowers} followers`}</div>
                                                </div>
                                                <div className="follow-date">Followed you on Jan 15, 2023</div>
                                            </div>
                                            <div className="user-actions">
                                                <button className="action-btn view"
                                                    onClick={() => navigate(`/${tab.username}`)}    
                                                >View Profile</button>
                                                <button className="action-btn unfollow"
                                                    onClick={() => {
                                                        setOpenUnfollow(!openUnfollow);
                                                        setUnfollowUser({username : tab.username , id : tab.id});
                                                    }}
                                
                                                >{followerTab ? "Remove" : "Unfollow"}</button>
                                            </div>
                                        

                                        </div>
                                    )
                                }

                            </div>

                        </div>
                    </div>

                </div>

            </div>
            <UnfollowUser
                boxTitle={'Confirm Unfollow'}
                msg={'Are You Sure You Want to Unfollow This Author ?'}
                isOpen={openUnfollow}
                onClose={() => setOpenUnfollow(false)}
                title={unfollowUser.username}
                handleDelete={() => unfollow(unfollowUser.id) }
            />
        </>
    )

}

export default ManageFollowers;