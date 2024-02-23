import { Routes, Route  } from 'react-router-dom';
import Home from './pages/Home';
import LogIn from './pages/Login';
import SignUp from './pages/SignUp';
import LogOut from './components/LogOut';
import Feed from './pages/Feed';
import Profile from './pages/Profile';
import Guest from './components/Guest';
import Auth from './components/AuthComponent';
import AuthRoute from './components/AuthRoute';



function App() {

  return (
    <>
        <Routes>
          <Route path="/guest" element={<Guest />} />

          <Route element={<AuthRoute />}>
            <Route path="/authtest" element={<Auth />} />
            <Route path="/logout" element={<LogOut />} />
            <Route path="/feed" element={<Feed />} />
            <Route path="/profile/:username" element={<Profile />} />        
          </Route>

          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
          
        </Routes>
    </>
  )
}

export default App
