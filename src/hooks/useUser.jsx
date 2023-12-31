import Context from "../context/UserContext";
import { useCallback, useContext } from "react";

export default function useUser() {
    const { user, setUser, userTasks, setUserTasks, userTables, setUserTables } = useContext(Context);

    const login = useCallback((user) => {
        //set token and user data in local storage (hybrid storage)
        //we save the user data as a string because local storage only stores strings
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('tables', JSON.stringify({}));
        localStorage.setItem('tasks', JSON.stringify({}));
        setUser(user);
    }, [setUser]);

    const logout = useCallback(() => {
        //logout logic

        setUser(null);
        setUserTables(null);
        setUserTasks(null);
    }, [setUser]);

    return {
        isLogged: Boolean(user),
        login,
        logout,
        user,
        userTasks,
        userTables
    };
}