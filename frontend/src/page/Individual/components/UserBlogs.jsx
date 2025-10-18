import { useState , useEffect } from "react";
import { useParams } from "react-router-dom";

function UserBlogs(){

    
    const {username} = useParams();

    const [blogs , setBlogs] = useState({                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              })

    useEffect(() => {

        const getData = async() => {
            
            const responses = await fetch(`http://localhost:5000/api/front/${username}`);
            const data = await responses.json();

            setBlogs(data);
        }

        getData();

    } , [username]);

    useEffect(() => {
        console.log(blogs)
    }, [blogs])


    return(
        <>
            <title>{`${blogs.author} Homepage`}</title>

        </>
    )

}

export default UserBlogs;