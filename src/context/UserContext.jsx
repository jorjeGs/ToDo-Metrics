import React, {useState} from "react";

const Context = React.createContext({});

export function UserContextProvider({children}) {
    //state and hook for user
    //initialize must come from local storage or from a cookie or from a session storage
    const [user, setUser] = useState(() => {
        //we parse the string to JSON because local storage only stores strings
        //and we need to parse it to JSON to be able to use it as an object
        return JSON.parse(localStorage.getItem('user')) || null
    });

    //state for tasks
    const [userTasks, setUserTasks] = useState([]);

    //state for user recipes
    const [userTables, setUserTables] = useState([]);

    //then, send it to the provider
    return <Context.Provider value={{user, setUser, userTasks, setUserTasks, userTables, setUserTables }}>
        {children}
    </Context.Provider>
}

export default Context;