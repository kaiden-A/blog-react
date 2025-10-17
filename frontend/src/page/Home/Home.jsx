import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
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