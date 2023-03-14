// import React, {useState} from 'react';
// import {useNavigate, useParams} from "react-router";
// import {Field} from "../../componets/TexxField";
// import {Button} from "../../componets/Button";
// import {useDispatch, useSelector} from "react-redux";
// import {editUser} from "../userSlice";
//
// export const EditUser = () => {
//     const params = useParams();
//     const dispatch = useDispatch();
//     const users = useSelector(store => store.users);
//     const navigate = useNavigate();
//     const existingUser = users.filter(user => user.id === params.id);
//     const {name, email} = existingUser[0];
//     const [values, setValues] = useState({
//         name,
//         email
//     })
//
//     const handleEditUser = () => {
//         setValues({name: "", email: ""})
//         dispatch(editUser({
//             id: params.id,
//             name: values.name,
//             email: values.email
//         }))
//         navigate('/');
//     }
//
//     return (
//         <form className="mt-10 max-w-xl mx-auto">
//             <Field
//                 label="Name"
//                 value={values.name}
//                 onChange={(e) => setValues({...values, name: e.target.value})}
//                 inputProps={{type: 'text', placeholder: "папапапапа"}}
//             />
//             <Field
//                 label="Email"
//                 value={values.email}
//                 onChange={(e) => setValues({...values, email: e.target.value})}
//                 inputProps={{type: 'email', placeholder: "папапапапа@gmail.com"}}
//             />
//             <Button onClick={handleEditUser}>Edit</Button>
//         </form>
//     );
// };
