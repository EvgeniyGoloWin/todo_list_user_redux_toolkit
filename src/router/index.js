import {createBrowserRouter} from "react-router-dom";

import {UserList} from "../features/users/UserList";
import {AddUser} from "../features/users/AddUser";
import {EditUser} from "../features/users/EditUser";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <UserList/>
    },
    {
        path: 'add-user',
        element: <AddUser/>
    },
    {
        path: 'edit-user/:id',
        element: <EditUser/>
    }
])