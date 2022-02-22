import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios';
import { Redirect } from "react-router-dom";
import { UserContext } from "../context/userContext";

function Form({ actionName }) {
    const { user, setUser, registered, setRegistered } = useContext(UserContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setEmail("")
        setPassword("")
        setEmailError("")
        setPasswordError("")
    }, [actionName])

    const handleClick = (e) => {
        e.preventDefault();
        setLoading(true);
        // reset errors
        setEmailError("")
        setPasswordError("")
        axios.post(`${process.env.REACT_APP_BACKEND_URL}${actionName.toLowerCase()}`, { email, password })
            .then(function (response) {
                console.log(response.data);
                if (actionName.toLowerCase() === "login") {
                    setUser({ auth: true, email: response.data.email });

                } else if (actionName.toLowerCase() === "register") {
                    if (response.data.success === true) {
                        setRegistered(true);
                    }
                }
                setLoading(false);
            })
            .catch((error) => {
                if (error.response) {
                    console.log(error.response.data.errors);
                    if (error.response.data.errors.email)
                        setEmailError(error.response.data.errors.email)
                    else if (error.response.data.errors.password)
                        setPasswordError(error.response.data.errors.password)
                    else
                        setPasswordError(error.response.data.errors.msg)
                }
            });
    }
    return (
        <div>
            {registered && <Redirect to="/login" />}
            {!user.auth ? (
                <form onSubmit={handleClick}>
                    {registered && actionName === "Login" && (<p className="error">User registered successfully!</p>)}
                    <h2>{actionName}</h2>
                    <label htmlFor="email" >Email</label>
                    <input type="text" name="email" value={email} required
                        onChange={(e) => { setEmail(e.target.value) }}
                    />
                    <div className="email error">{emailError}</div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" value={password} required
                        onChange={(e) => { setPassword(e.target.value) }}
                    />
                    <div className="password error">{passwordError}</div>
                    <button>{loading ? ("Loading...") : actionName}</button>
                </form>
            ) : (
                <Redirect to="/orders" />
            )}

        </div >
    )
}

export default Form