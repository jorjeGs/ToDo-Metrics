import Context from "../context/UserContext";
import { useCallback, useContext } from "react";

export default function useUser() {
    const { user, setUser, userTables, setUserTables } = useContext(Context);

    const login = useCallback((user) => {
        //set token and user data in local storage (hybrid storage)
        //we save the user data as a string because local storage only stores strings
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('tables', JSON.stringify([]));
        setUser(user);
    }, [setUser]);

    const logout = useCallback(() => {
        //logout logic

        setUser(null);
        setUserTables(null);
    }, [setUser]);

    const addTable = useCallback((table) => {
        //add table to the user tables
        setUserTables([...userTables, table]);
        //add table to the local storage
        localStorage.setItem('tables', JSON.stringify([...userTables, table]));
    } , [userTables, setUserTables]);

    const addTask = useCallback((task) => {
        //since the task is an element of a table, we need to find the table to add the task to it
        const tableId = task.table_id;
        //find the table
        const table = userTables.find(table => table.id == tableId);
        //add task to the table
        table.tasks.push(task);
        //update the table in the user tables
        setUserTables(userTables.map(table => table.id == tableId ? table : table));
        //update the table in the local storage
        localStorage.setItem('tables', JSON.stringify(userTables.map(table => table.id == tableId ? table : table)));

    } , [userTables, setUserTables]);

    const updateTable = useCallback((table) => {
        const tableId = table.id;
        //update table from the user tables
        setUserTables(userTables.map(table => table.id == tableId ? table : table));
        //update table from the local storage
        localStorage.setItem('tables', JSON.stringify(userTables.map(table => table.id == tableId ? table : table)));
    } , [userTables, setUserTables]);

    const updateTask = useCallback((task) => {
        //since the task is an element of a table, we need to find the table to add the task to it
        const tableId = task.table_id;
        //find the table
        const table = userTables.find(table => table.id == tableId);
        //find the task
        const taskId = task.id;
        //update task from the table
        table.tasks = table.tasks.map(prevTask => prevTask.id == taskId ? task : prevTask);
        //update table from the user tables
        setUserTables(userTables.map(table => table.id == tableId ? table : table));
        //update table from the local storage
        localStorage.setItem('tables', JSON.stringify(userTables.map(table => table.id == tableId ? table : table)));

    } , [userTables, setUserTables]);

    return {
        isLogged: Boolean(user),
        login,
        logout,
        user,
        userTables,
        addTable,
        addTask,
        updateTable,
        updateTask
    };
}