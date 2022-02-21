import React, { useState, createContext, useEffect } from "react";

export const UserContext = createContext();

const UserContextProvider = (props) => {
    const localData = localStorage.getItem("demoUser");
    const data = localData ? JSON.parse(localData) : { auth: false };

    const [user, setUser] = useState(data);
    const [registered, setRegistered] = useState(false);

    useEffect(() => {
        localStorage.setItem("demoUser", JSON.stringify(user));
    }, [user]);

    return (
        <UserContext.Provider value={{ user, setUser, registered, setRegistered }}>
            {props.children}
        </UserContext.Provider>
    );
};

export default UserContextProvider;