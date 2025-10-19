import Header from "../Global/Header";
import Footer from "../Global/Footer";
import UserBlogs from "./components/UserBlogs";
import Profile from "./components/Profile";
import LoadingSpinner from "../Global/LoadingSpinner";

import { useState , useEffect } from "react";
import { useParams } from "react-router-dom";


function UserPage(){

    const {username} = useParams();

    const [blogs , setBlogs] = useState({blog : []})
    const [loading , setLoading] = useState(true)

    useEffect(() => {

        const getData = async() => {
            
            const responses = await fetch(`http://localhost:5000/api/front/${username}`);
            const data = await responses.json();

            setBlogs(data);
            setLoading(false);
        }

        getData();

    } , [username]);

    if(loading){
        return(
            <LoadingSpinner text="Loading data..." size="large"/>
        )
    }


    return(
        <>
            <Header/>
            <Profile blogs={blogs}/>
            <UserBlogs blogs={blogs}/>
            <Footer/>
        </>
    )
}

export default UserPage;