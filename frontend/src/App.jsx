import Authentication from './pages/Authentication'

import {BrowserRouter as Router , Routes ,Route} from "react-router-dom"
import Landing from './pages/LandingPage';


import Home from "./pages/Home";
import KnowMore from "./pages/KnowMore";
import VideoMeet from "./pages/VideoMeet";
import { AuthProvider } from './context/AuthContext';
import MessagingHistory from "./pages/MessagingHistory";
import EndCall from './pages/EndCall';
import Footer from './utils/Footer'

function App() {
  return (
    <>
        <Router>

        <AuthProvider>

            <Routes>
                <Route path='/' element={<Landing></Landing>}></Route>
                <Route path='/knowmore' element={<KnowMore></KnowMore>}></Route>
                <Route path='/auth' element={<Authentication></Authentication>}></Route>
                <Route path='/history' element={<MessagingHistory></MessagingHistory>} />
                <Route path='/home' element={<Home></Home>}></Route>
                <Route path='/endcall' element={<EndCall></EndCall>} ></Route>
                <Route path='/footer' element={<Footer></Footer>} ></Route>
                <Route path='/:url' element={<VideoMeet></VideoMeet>}></Route>
            </Routes>

        </AuthProvider>
        </Router>
    </>
  )
};


export default App;
