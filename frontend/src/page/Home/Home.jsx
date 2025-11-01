import Header from "../Global/Header";
import Hero from "./components/Hero";
import Footer from "../Global/Footer";
import UserCard from "./components/UserCard";
import { useEffect, useState } from "react";
import LoadingSpinner from "../Global/LoadingSpinner";
function Home(){

    const [loading , setLoading] = useState(true);

    //activate the backend
    useEffect(() => {

        let intervalId;
        const activateBackend = async() => {

            try{

                const responses = await fetch('https://backend-service-pmqg.onrender.com/');
                
                if(responses.ok){
                    setLoading(false);
                    clearInterval(intervalId);
                }


            }catch(err){
                console.log("backend still sleep...")
            }
        }

        activateBackend()
        intervalId = setInterval(activateBackend , 2000);
        
        return () => clearInterval(intervalId);
    })

    if(loading){
        return <LoadingSpinner text="connecting to database..." size="large"/>
    }

    return(
        <>
            <title>Welcome to BlogHub</title>
            <Header/>
            <Hero/>
            <UserCard/>
            <Footer/>
        </>
    )
}

export default Home;