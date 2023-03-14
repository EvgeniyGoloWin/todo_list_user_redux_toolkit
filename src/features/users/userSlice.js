import {createSlice} from "@reduxjs/toolkit";

const initialState = [];

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