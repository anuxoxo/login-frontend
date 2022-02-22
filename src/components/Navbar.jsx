import React, { useContext } from "react";
import { UserContext } from "../context/userContext";
import { Link } from "react-router-dom";
import axios from 'axios';

function Navbar() {
    const { user, setUser } = useContext(UserContext);
    const logout = () => {
        try {
            axios.get(`${process.env.REACT_APP_BACKEND_URL}logout`)
                .then(function (response) {
                    if (response.data.success) {
                        setUser({ auth: false })
                    }
                })
                .catch(function (error) {
                    console.log(error.response.data);

                });
        }
        catch (err) {
            console.log(err);
        }
    }
    return (
        <nav>
            <h1><a href="/">Dominos</a></h1>
            <ul>
                {(user.auth) ? (
                    <>
                        <li>Welcome, {user.email}</li>
                        <li className="orangeRed" onClick={logout} style={{ cursor: 'pointer' }}>LOG OUT</li>
                    </>
                ) : (
                    <>
                        <li><Link to="/login">Log in</Link></li>
                        <li><Link to="/register" className="btn">Register</Link></li>
                    </>
                )}
            </ul>
        </nav>)
}

export default Navbar