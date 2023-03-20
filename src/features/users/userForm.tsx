import React, {useEffect, useState} from 'react';
import {Field} from '../../componets/Field';
import {Button} from '../../componets/Button';
import {useNavigate, useParams} from 'react-router';
import {v4 as uuidv4} from 'uuid';
import {useDispatch, useSelector} from 'react-redux';
import {addUser, editUser, User} from './userSlice';
import {RootState} from "../../Store";

interface UserFormProps {
    type: string;
}

export const UserForm: React.FC<UserFormProps> = ({type}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const params = useParams();
    const users = useSelector((store: RootState) => store.users);
    const [values, setValues] = useState({
        name: '',
        email: '',
    });

    useEffect(() => {
        if (type === 'edit') {
            const existingUser = users.find((user: User) => user.id === Number(params.id));
            if (existingUser) {
                setValues({
                    name: existingUser.name,
                    email: existingUser.email,
                });
            }
        }
    }, [type, params.id, users]);

    console.log(values);

    const handleSave = () => {
        if (type === 'edit') {
            dispatch(editUser({id: params.id, ...values}));
        } else {
            dispatch(addUser({id: uuidv4(), ...values}));
        }
        navigate('/');
    };

    return (
        <form className="mt-10 max-w-xl mx-auto">
            <Field
                label="Name"
                value={values.name}
                onChange={(e) => setValues({...values, name: e.target.value})}
                inputProps={{type: 'text', placeholder: 'Name'}}
            />
            <Field
                label="Email"
                value={values.email}
                onChange={(e) => setValues({...values, email: e.target.value})}
                inputProps={{type: 'email', placeholder: 'Email'}}
            />
            <Button onClick={handleSave}>{type === 'edit' ? 'Edit' : 'Submit'}</Button>
        </form>
    );
};
