'use client';

import { Eye, EyeSlash} from '@phosphor-icons/react';

import { InputHTMLAttributes, useState } from "react";

export default function Input({type, name, ...rest}: InputHTMLAttributes<HTMLInputElement>) {
    const [showPassword, setShowPassword] = useState(false);

    const toggleShowPassword = () => setShowPassword(!showPassword);

    return (
            <label className='block relative text-gray-800 font-semibold text-sm leading-5 mb-4'>
                <p className='flex justify-between items-center mb-2'>{name} {type === 'password' && <span className='text-purple font-semibold text-sm leading-5 cursor-pointer hover:underline'>Esqueceu sua senha?</span>}</p>
                <input className='w-full px-3 py-4 bg-white text-gray-800 hover:outline hover:outline-purple focus:outline focus:outline-purple border border-gray-200 rounded-[4px] placeholder:text-gray-400 placeholder:text-sm placeholder:font-normal' type={showPassword ? 'text' : type} {...rest} />
                { type === 'password' && ( showPassword ? <Eye className='absolute top-[55%] left-[90%] text-gray-400' width={20} height={20} onClick={toggleShowPassword} /> : <EyeSlash className='absolute top-[55%] left-[90%] text-gray-400' width={20} height={20} onClick={toggleShowPassword}/> )}
            </label>
    )
}