import { Routes, Route  } from 'react-router-dom';
import Home from './pages/Home';
import LogIn from './pages/Login';
import SignUp from './pages/SignUp';
import LogOut from './components/LogOut';
import Feed from './pages/Feed';
import Profile from './pages/Profile';
import NewPattern from './pages/NewPattern';
import Pattern from './pages/Pattern';
import AuthRoute from './components/AuthRoute';



function App() {

  return (
    <>
        <Routes>

          <Route element={<AuthRoute />}>
            <Route path="/logout" element={<LogOut />} />
            <Route path="/feed" element={<Feed />} />
            <Route path="/profile/:username" element={<Profile />} />
            <Route path="/newPattern" element={<NewPattern />}  />
            <Route path="/wips/:username/patterns/:patternId" element={<Pattern />} />      
          </Route>

          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
          
        </Routes>
    </>
  )
}

export default App
