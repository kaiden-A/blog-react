import Home from "./page/Home/Home"
import UserPage from "./page/Individual/UserPage";
import {BrowserRouter , Routes , Route } from 'react-router-dom';
function App() {
  

  return (
    <BrowserRouter>
          <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/:username" element={<UserPage/>}/>
          </Routes>
    </BrowserRouter>
    
  )
}

export default App
