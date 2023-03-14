import {createBrowserRouter} from "react-router-dom";

import {UserList} from "../features/users/UserList";
import {UserForm} from "../features/users/userForm";
// import {AddUser} from "../features/users/AddUser";
// import {EditUser} from "../features/users/EditUser";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <UserList/>
    },
    {
        path: 'add-user',
        element: <UserForm/>
    },
    {
        path: 'edit-user/:id',
        element: <UserForm/>
    },
    // {
    //     path: 'add-user',
    //     element: <AddUser/>
    // },
    // {
    //     path: 'edit-user/:id',
    //     element: <EditUser/>
    // }
])