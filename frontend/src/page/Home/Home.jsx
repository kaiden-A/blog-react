import Header from "../Global/Header";
import Hero from "./components/Hero";
import Footer from "../Global/Footer";
import UserCard from "./components/UserCard";
function Home(){

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