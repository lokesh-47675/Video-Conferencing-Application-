
import "../css/Landing.css";
import Navbar from "../utils/Navbar";
import Img2 from"../assets/collaboration.png";
import Img3 from "../assets/third.png";
import Button from '@mui/material/Button';

import Footer from "../utils/Footer";

import {  useNavigate } from "react-router-dom";

export default function LandingPage() {

    let router = useNavigate();
    return(
        <div className="hero-bg">
            <Navbar></Navbar>

            <div className="landing-content-box">
                <h1>Discover what’s possible<br></br> when teams connect.</h1>
                <h5>The solution brings teams and customers together through streamlined communication<br></br> improving collaboration and overall productivity.</h5>
                <br></br>
                <button type="button" className="btn btn-light" onClick={()=>{router("/auth")}}><i class="fa-solid fa-paper-plane"></i> Get Started</button> &nbsp; &nbsp;
                <button type="button" className="btn btn-outline-light" onClick={()=>{router("/knowmore")}}><i className="fa-solid fa-magnifying-glass"></i> Know More..</button>
            </div>

            <div className="second-box">
                    <div className="feature">
                        <h3>Solve customer issues faster and deliver a seamless experience across every channel with AI-first contact center and CX solutions</h3>
                        <ul style={{fontSize:"1.1rem"}}>
                            <li><b>Resolve inquiries efficiently:</b>Phone, chat, email, SMS, social, and video flow into one platform for full context.</li>
                            <li><b>Automate complex interactions:</b>Virtual Agent handles multi-intent questions, so human agents can focus on high-value cases.</li>
                            <li><b>Boost self-service and loyalty:</b>Instant answers and proactive resolutions reduce friction and improve satisfaction</li>
                            <li><b>Help agents focus on what matters:</b>AI highlights key actions, suggests responses, and streamlines repetitive tasks.</li>
                            <li><b>Turn data into action:</b>Integrated CRM, real-time analytics, and conversation insights help teams spot trends and improve CX.</li>
                        </ul>
                    </div>
                    <br></br>
                    <img src={Img2} height="500px" width="1000px"></img>
            </div>


            <div className="third-box">
                    <img src={Img3} height="450px" width="800px"></img>
                    <br></br>
                    <div className="third-feature">
                        <h2><b>Hybrid Learning Modalities - A student-first approach</b></h2>
                        <h5>Conferencing’s comprehensive platform meets the dynamic needs of colleges and universities looking to connect with students to provide more accessible, personalized educational experiences.From flexible instruction to hybrid work support, enable meaningful connection at a moment’s notice with Zoom’s reliable, HD video and audio and cloud-based Phone and Room solutions.</h5>
                        <a className="btn btn-light rounded-pill me-2" onClick={()=>router("/auth")}><i class="fa-solid fa-paper-plane"></i>  <b>Get Started</b></a>

                    </div>
            </div>
            <Footer></Footer>
        </div>
    )
}


