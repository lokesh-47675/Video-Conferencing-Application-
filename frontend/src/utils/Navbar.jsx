import  "../css/Navbar.css";

import { useLocation ,useNavigate} from "react-router-dom";

export default function Landing() {
    const location = useLocation();

    const router = useNavigate();

    const token = localStorage.getItem("token");

    let handleLogout = () => {
        localStorage.removeItem("token");
        router("/");
    }

    return(
        <>
            <nav className="navbar navbar-expand-md navbar-light bg-body-light border-bottom sticky-top">
                <div className="container-fluid">
                    <h4 className="brand-icon"><i className="fa-solid fa-video"></i>&nbsp;Meetify</h4>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                        </div>

                        <div className="navbar-nav ms-auto">
                            {location.pathname === '/home' && token ? <a className="btn btn-primary rounded-pill me-2" onClick={()=>{router("/history")}}><i class="fa-solid fa-file"></i> <b>Get History</b> </a> : ''}
                            {location.pathname === '/home' && token ? <a className="btn btn-primary rounded-pill me-2" onClick={handleLogout} ><i class="fa-solid fa-user-minus"></i> <b>Logout</b> </a> : ''}
                            {location.pathname === '/home' && !token ? <a className="btn btn-primary rounded-pill me-2" href="/auth" ><i className="fa-solid fa-user-plus"></i> <b>Sign Up</b> </a> : ''}
                            {location.pathname === '/auth' && !(location.pathname === '/auth') && !(token)? <a className="btn btn-primary rounded-pill me-2" href="/home"> <i className="fa-solid fa-user-plus"></i> <b>Join as Guest</b></a>: ''}
                            {location.pathname === '/history' ? <a className="btn btn-primary rounded-pill me-2" onClick={()=>{router("/home")}}><i class="fa-regular fa-house"></i> <b>Go to Home</b></a> : ''}
                            {location.pathname === '/endcall' && token ? <a className="btn btn-primary rounded-pill me-2" onClick={handleLogout} ><i class="fa-solid fa-user-minus"></i> <b>Logout</b> </a> : ''}
                            {location.pathname === '/endcall' && token ? <a className="btn btn-primary rounded-pill me-2" onClick={()=>{router("/")}}><i class="fa-regular fa-house"></i> <b>Go to Home</b></a> : ''}
                            {location.pathname === '/endcall' && !token ? <a className="btn btn-primary rounded-pill me-2" onClick={()=>{router("/")}}><i class="fa-regular fa-house"></i> <b>Go to Home</b></a>: ''}
                            {location.pathname === '/' ?  <a className="btn btn-primary rounded-pill me-2" href="/home"> <i className="fa-solid fa-user-plus"></i> <b>Join as Guest</b></a> : ''}
                            {location.pathname === '/knowmore' ? <a className="btn btn-primary rounded-pill me-2" href="/auth"> <i class="fa-solid fa-paper-plane"></i> <b>Get Started</b></a> : '' }
                        </div>
                    </div>
                </div>
            </nav>
        </>
  )
}