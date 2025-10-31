import Home from "./page/Home/Home"
import UserPage from "./page/Individual/UserPage";
import {BrowserRouter , Routes , Route } from 'react-router-dom';
import IndividualBlogs from "./page/Blogs/IndividualBlogs";
import AdminPage from "./page/AdminHome/AdminPage";
import LogSignPage from "./page/sign/logSignPage";
import Dashboard from "./page/AdminHome/Dashboard";
import CreatePost from "./page/AdminHome/CreatePost";
import ManageBlogs from "./page/AdminHome/ManageBlogs";
import ProfileSetup from "./page/AdminHome/ProfileSetup";
import ManageFollowers from "./page/AdminHome/ManageFollowers";

function App() {
  

  return (
    <BrowserRouter>
          <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/:username" element={<UserPage/>}/>
                <Route path="/:username/:id" element={<IndividualBlogs/>} />

                <Route path="/login" element={<LogSignPage login={true}/>} />
                <Route path="/signup" element={<LogSignPage login={false}/>} />

                <Route path="/admin" element={<AdminPage/>}>
                    <Route path="dashboard" element={<Dashboard/>}/>
                    <Route path="post" element={<CreatePost/>} />
                    <Route path="blogs" element={<ManageBlogs/>} />
                    <Route path="profile" element={<ProfileSetup/>} />
                    <Route path="follower" element={<ManageFollowers/>} />
                </Route>
          </Routes>
    </BrowserRouter>
    
  )
}

export default App
