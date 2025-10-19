import Home from "./page/Home/Home"
import UserPage from "./page/Individual/UserPage";
import {BrowserRouter , Routes , Route } from 'react-router-dom';
import IndividualBlogs from "./page/Blogs/IndividualBlogs";

function App() {
  

  return (
    <BrowserRouter>
          <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/:username" element={<UserPage/>}/>
                <Route path="/:username/:id" element={<IndividualBlogs/>} />
          </Routes>
    </BrowserRouter>
    
  )
}

export default App
