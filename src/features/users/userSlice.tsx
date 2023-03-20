import {createSlice} from "@reduxjs/toolkit";

export interface User {
    id: number,
    name: string,
    email: string,
}
const usersFromLocalStorage = localStorage.getItem('users');
const initialState: User[] = usersFromLocalStorage ? JSON.parse(usersFromLocalStorage) : [];
//const initialState: User[] = JSON.parse(localStorage.getItem('users')) ? JSON.parse(localStorage.getItem('users')) : [];
const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.push(action.payload);
            localStorage.setItem('users', JSON.stringify(state));
        },
        editUser: (state, action) => {
            const {id, name, email} = action.payload;
            const existingUser = state.find(user => user.id === id);
            if (existingUser) {
                existingUser.name = name;
                existingUser.email = email;
                localStorage.setItem('users', JSON.stringify(state));
            }
        },
        deleteUser: (state, action) => {
            const {id} = action.payload;
            const existingUser = state.find(user => user.id === id);
            if (existingUser) {
                const updatedState = state.filter(user => user.id !== id);
                localStorage.setItem('users', JSON.stringify(updatedState));
                return updatedState;
            }
        }
    }
})

export const {addUser, editUser, deleteUser} = userSlice.actions
export default userSlice.reducer