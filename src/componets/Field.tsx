import React, {ChangeEventHandler, InputHTMLAttributes} from 'react'

export interface FieldProps {
    label: string;
    inputProps: InputHTMLAttributes<HTMLInputElement>;
    onChange: (event:any) => void;
    value: string;
}

export const Field: React.FC<FieldProps> = ({label, inputProps, onChange, value}) => {
    return (
        <div className='flex flex-col'>
            <label className='mb-2 text-base text-gray-800'>{label}</label>
            <input
                className='bg-gray-200 py-2 px-3 border-2 outline-none'
                {...inputProps}
                onChange={onChange}
                value={value}
            />
        </div>
    )
}
