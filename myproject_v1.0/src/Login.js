import React, { useState } from 'react';
import "./login.css"; 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const Login = ({ setNotifications = () => {} }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const navigate = useNavigate(); 

    const handleLogin = (event) => {
        event.preventDefault();

        if (!email || !password) {
            toast.error("Please provide the required input details.", { theme: "light" });
            return;
        }

        toast.success("Welcome", { theme: "light" });

        // Manage notifications
        const newNotifications = JSON.parse(localStorage.getItem('notifications')) || []; 
        newNotifications.push(`Welcome ${email.split('@')[0].split('.')[0]}`);
        localStorage.setItem('notifications', JSON.stringify(newNotifications));
        setNotifications(newNotifications); 

        // Navigate to home after a delay
        setTimeout(() => {
            navigate("/my/home", { state: { name: email.split('@')[0].split('.')[0], notifications: newNotifications } });
            window.location.href = "/my/home";
        }, 1000);

    }; 

    return (
        <>
            <div id="imagelogfile">
                <div id="imgshadow">
                    <button 
                        type="button" 
                        style={{ 
                            marginTop: "19%", 
                            marginLeft: "120px",
                            height: "50px", 
                            width: "200px", 
                            borderRadius: "15px", 
                            backgroundColor: "#dba525", 
                            borderColor: "#dba525", 
                            color: "white", 
                            fontWeight: "bold"
                        }} 
                        data-bs-toggle="modal" 
                        data-bs-target="#loginModal"
                    >
                        Login 
                    </button>

                    <div className="modal fade" id="loginModal" tabIndex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="loginModalLabel" style={{ paddingLeft: "185px", fontSize: "30px" }}>
                                        Login
                                    </h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <form onSubmit={handleLogin}>
                                        <div className="mb-3">
                                            <label htmlFor="email" className="form-label">Email address</label>
                                            <input 
                                                type="email" 
                                                className="form-control" 
                                                id="email" 
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                aria-describedby="emailHelp" 
                                            />
                                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="password" className="form-label">Password</label>
                                            <input 
                                                type="password" 
                                                className="form-control" 
                                                id="password" 
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                            />
                                        </div>
                                        <div className="mb-3 form-check">
                                            <input type="checkbox" className="form-check-input" id="rememberMe" />
                                            <label className="form-check-label" htmlFor="rememberMe">Check me out</label>
                                        </div>
                                        <button 
                                            type="submit" 
                                            className="btn btn-warning" 
                                            style={{ marginLeft: "150px", width: "150px" }}
                                        >
                                            Login
                                        </button>
                                        <ToastContainer />
                                    </form>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    ); 
}

export default Login;