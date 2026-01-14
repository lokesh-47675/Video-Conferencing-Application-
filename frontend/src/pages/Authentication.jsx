import * as React from 'react';
import { AuthContext } from '../context/AuthContext';

import Navbar from "../utils/Navbar"
import "../css/Authentication.css"

// TODO remove, this demo shouldn't need to reset the theme.

// const defaultTheme = createTheme();

export default function Authentication() {

    const [username, setUsername] = React.useState();
    const [password, setPassword] = React.useState();
    const [name, setName] = React.useState();
    const [error, setError] = React.useState();
    const [message, setMessage] = React.useState();


    const [formState, setFormState] = React.useState(0);

    const [open, setOpen] = React.useState(false)


    const { handleRegister, handleLogin } = React.useContext(AuthContext);

    let handleAuth = async () => {
        try {
            if (formState === 0) {

                let result = await handleLogin(username, password);
                console.log(result);
                setUsername("");
                setPassword("");
            }
            if (formState === 1) {
                let result = await handleRegister(name, username, password);
                console.log(result);
                setUsername("");
                setMessage(result);
                setOpen(true);
                setError("")
                setFormState(0)
                setPassword("")
            }
        } catch (err) {

            console.log(err);
            let message = (err.response.data.message);
            setError(message);
        }
    }


    return (
        <div className="hero-bg">
            <Navbar></Navbar>
            <div className="row mt-3 form-content">

                {formState == 0 ? <h1 className="col-6 offset-3">Login on Meetify</h1> : <h1 className="col-6 offset-3">Register on Meetify</h1> }
                {open ? <span>{message}</span> : ''}
                <div className="col-6 offset-3">

                    <form  className="needs-validation" noValidate>
                        {
                            formState == 1 ?
                            <div class="mb-3">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input placeholder="Name" id="name" name="name" type="text" className="form-control" required onChange={(e) => setName(e.target.value)}></input>
                            </div > : ''
                        }
                        <div className="mb-3">
                            <label htmlFor="username" className="form-label">Username</label>
                            <input placeholder="Username" id="username" name="username" type="text" className="form-control" required onChange={(e) => setUsername(e.target.value)}></input>
                            <div className="valid-feedback">Looks good!</div>
                        </div >

                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input placeholder="Password" id="password" name="password" type="password" className="form-control" required onChange={(e) => setPassword(e.target.value)}></input>
                        </div >
                        <p style={{ color: "red" }}>{error}</p>
                        {formState == 0 ? <button className="btn btn-light add-btn " type="button" onClick={handleAuth}>Login</button> : <button className="btn btn-light add-btn " type="button" onClick={handleAuth}>Register</button> }

                        {formState == 0 ? <p>New User? <span role='button' onClick={()=>{ setFormState(1)}}>Register</span></p> : ''}
                    </form>

                </div>

            </div>
        </div>
    );
}
