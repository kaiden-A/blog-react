import Header from "../Global/Header";
import Footer from "../Global/Footer";

import Login from './components/login';
import SignUp from './components/signup';

function LogSignPage({login}){

    return(
        <>
            <Header/>
                {
                    login ? <Login/> : <SignUp/>
                }
            <Footer/>
        </>
    )
}

export default LogSignPage;