import React, { FC, ReactNode, MouseEventHandler } from 'react';

interface ButtonProps {
    onClick: () => void;
    children: ReactNode;
}

export const Button:FC<ButtonProps> = ({onClick, children}) => {
    return (
        <button className="bg-indigo-600 text-white py-2 px-6 my-10 rounded hover:bg-grey"
                onClick={onClick}
        >
            {children}
        </button>
    )
}
