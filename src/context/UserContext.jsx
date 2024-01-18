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
    const [userTasks, setUserTasks] = useState(() => {
        //we parse the string to JSON because local storage only stores strings
        //and we need to parse it to JSON to be able to use it as an object
        return JSON.parse(localStorage.getItem('tasks')) || []
    });

    //state for user recipes
    const [userTables, setUserTables] = useState(() => {
        //we parse the string to JSON because local storage only stores strings
        //and we need to parse it to JSON to be able to use it as an object
        return JSON.parse(localStorage.getItem('tables')) || []
    });

    //state for theme
    const [theme, setTheme] = useState(() => {
        //check if the user has a preference, getting the item from local storage
        const localTheme = localStorage.getItem('theme');
        //if the user has a preference, return it
        if (localTheme) return localTheme;
        //if the user doesn't have a preference, return the default theme
        else{
            //check if the user's browser has a preference
            if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                return "dark"
            } else {
                return "light"
            }
        }
    })

    //then, send it to the provider
    return <Context.Provider value={{user, setUser, theme, setTheme, userTasks, setUserTasks, userTables, setUserTables }}>
        {children}
    </Context.Provider>
}

export default Context;