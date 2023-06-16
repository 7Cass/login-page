import { FormEvent } from "react";
import { Button } from "./Button";
import Input from "./Input";

export default function Form() {

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        console.log(event);
    }

    return (
        <form className="w-96 my-[7.125rem]">
            <div className="mb-10">
                <h1 className="text-gray-800 font-bold text-4xl leading-[54px] mb-4">Acesse a plataforma</h1>
                <h2 className="text-gray-600 font-normal text-base leading-6">Faça login ou registre-se para começar a construir seus projetos ainda hoje.</h2>
            </div>
            <div className="flex flex-col gap-4">
                <Input type="email" name="E-mail" placeholder="Digite seu e-mail" />
                <Input type="password" name="Senha" placeholder="Digite sua senha"/>
                <Button type="submit">Entrar</Button>

                <p className='text-base text-gray-600 leading-6'>Ainda não tem uma conta? <span className="text-base font-bold text-purple leading-6 cursor-pointer hover:underline">Inscreva-se</span></p>
            </div>
        </form>
    )
}