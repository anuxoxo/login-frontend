import React, { useState } from 'react';
import axios from 'axios';

function Form({ actionName }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleClick = () => {
        axios.post(`http://localhost:8000/${actionName.toLowerCase()}`, { email, password })
            .then(function (response) {
                console.log(response.data);
            })
            .catch(function (error) {
                console.log(error.response.data);
            });
    }

    return <div>
        <h1>{actionName}</h1>
        <div>
            <input type="text" name="email" value={email}
                onChange={(e) => { setEmail(e.target.value) }}
            />
        </div>
        <div>
            <input type="password" name="password" value={password}
                onChange={(e) => { setPassword(e.target.value) }}
            />
        </div>
        <button onClick={handleClick}>{actionName}</button>

    </div>
}

export default Form;
