import React from 'react'

import Input from '../components/Input'
import Button from '../components/Button'

import Header from '../components/Header'
import Footer from '../components/Footer'

const Register = () => {
    return (
        <div>
            <Header />
            <div className="mt-5 d-flex justify-align-center flex-column">
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
                <div className="d-flex justify-content-center">
                    <div className="registerButtons d-flex justify-content-between mb-5 p-5">
                        <Button type="btn-default">Já tenho uma conta</Button>
                        <Button type="btn-default">Registrar</Button>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default Register