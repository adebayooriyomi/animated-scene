import {ReactNode} from 'react'

type ButtonProps = {
    children: ReactNode;
    onClick: ()=> void;
    disabled?: boolean;
}

export const Button = ({children, onClick, disabled }:ButtonProps) => {
    return(
        <button onClick={onClick} disabled={disabled}>
            {children}
        </button>
    )
}