import {createBrowserRouter} from "react-router-dom";

import {UserList} from "../features/users/userList";
import {UserForm} from "../features/users/userForm";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <UserList/>
    },
    {
        path: 'add-user',
        element: <UserForm type="add"/>
    },
    {
        path: 'edit-user/:id',
        element: <UserForm type='edit'/>
    },
]);
