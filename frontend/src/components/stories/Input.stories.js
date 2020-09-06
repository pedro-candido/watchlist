import React from 'react';
import Input from '../Input'

export default{
    title: 'Components/Input',
    component: Input
}

export const InputStory = () => <Input inputName="name" inputType="text" inputPlaceholder="Ex.:Pedro Ferreira Candido">Nome</Input>

export const AllInputsStory = () => <div className="registerForm">
    <Input 
        inputType="text" 
        inputName="name" 
        inputPlaceholder="Ex.:Pedro Candido">Nome</Input>
    <Input
        inputType="date"
        inputName="dateNasc"
        inputPlaceholder="Ex.:09/05/1998"
        >Data de nascimento</Input>
    <Input
        inputType="text"
        inputName="username"
        inputPlaceholder="Ex.:pedroferreira123"
        >Nome de usuário</Input>
    <Input 
        inputType="password" 
        inputName="passwd" 
        inputPlaceholder="Mínimo de 8 caracteres">Senha</Input>
    <Input 
        inputType="password" 
        inputName="confirmPasswd" 
        inputPlaceholder="Digite a mesma senha">Confirme a senha</Input>
</div>