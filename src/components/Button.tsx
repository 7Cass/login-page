import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
}

export function Button({children, ...rest}: ButtonProps) {
    return (
        <button 
            className='px-6 py-4 font-bold text-base leading-6 text-white bg-purple hover:bg-light-purple rounded-[4px]' 
            {...rest}>{children}</button>
    )
}