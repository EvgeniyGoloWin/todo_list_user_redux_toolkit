// import {useState} from 'react';
// import {Field} from "../../componets/TexxField";
// import {Button} from "../../componets/Button";
// import {useNavigate} from "react-router";
// import {v4 as uuidv4} from 'uuid'
// import {useDispatch} from "react-redux";
// import {addUser} from "../userSlice";
//
// export const AddUser = () => {
//     const dispatch = useDispatch();
//     const navigate = useNavigate();
//     const [values, setValues] = useState({
//         name: '',
//         email: ''
//     });
//
//     const handleAddUser = () => {
//         setValues({name: '', email: ''});
//         dispatch(addUser({
//             id: uuidv4(),
//             name: values.name,
//             email: values.email
//         }));
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
//             <Button onClick={handleAddUser}>Submit</Button>
//         </form>
//     );
// };
