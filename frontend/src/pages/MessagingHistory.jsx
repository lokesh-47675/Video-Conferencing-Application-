import  { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context/AuthContext'
// import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import Navbar from "../utils/Navbar";
import "../css/MessagingHistory.css";
export default function MessagingHistory() {


    const { getHistoryOfUser } = useContext(AuthContext);

    const [meetings, setMeetings] = useState([])


    // const routeTo = useNavigate();

    useEffect(() => {
        const fetchHistory = async () => {
            try {
                const history = await getHistoryOfUser();
                console.log(history);
                setMeetings(history);
            } catch (err){
                console.error(err);
            }
        }

        fetchHistory();
    }, []);

    let formatDate = (dateString) => {

        const date = new Date(dateString);
        const day = date.getDate().toString().padStart(2, "0");
        const month = (date.getMonth() + 1).toString().padStart(2, "0")
        const year = date.getFullYear();

        return `${day}/${month}/${year}`

    }

    return (
        <div className='page'>
            <Navbar></Navbar>
            {
                (meetings.length !== 0) ? meetings.map((e, i) => {
                        return <div key={i} className="history">
                                <p >Code: {e.meetingCode}</p>
                                <p>Date: {formatDate(e.date)}</p>
                               <hr></hr>
                        </div>
                }) : <></>
            }
        </div>
    )
}
