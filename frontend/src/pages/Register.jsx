import React, { useState, setState } from 'react'
import axios from 'axios'

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

import Input from '../components/Input'
import Button from '../components/Button'
import SubmitButton from '../components/SubmitButton'

import Header from '../components/Header'
import Footer from '../components/Footer'

const MySwal = withReactContent(Swal)

const Register = () => {
    const [name, setName] = useState("")
    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [dateNasc, setDateNasc] = useState("")
    const [sex, setSex] = useState("")
    const [interest, setInterest] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i)

    const handleSubmit = (e) => {
        e.preventDefault()

        if (
            !name ||
            !fullName ||
            !email ||
            !dateNasc ||
            !sex ||
            !interest ||
            !username ||
            !password ||
            !confirmPassword
        )
            return MySwal.fire({
                title: <p>Preencha todos os campos</p>,
                icon: 'error'
            })

        if (!email.match(pattern)) {
            return MySwal.fire({
                title: <p>Digite o e-mail corretamente</p>,
                icon: 'error'
            })
        }

        if (password !== confirmPassword)
            return MySwal.fire({
                title: <p>As senhas digitadas estão diferentes</p>,
                icon: 'error'
            })

        axios.post('http://localhost:3333/users', { name, email, fullName, dateNasc, sex, interest, username, password, confirmPassword })
        MySwal.fire({
            title: <p>Boa, usuário criado!</p>,
            icon: 'success'
        })
    }


    return (
        <div>
            <div className="mt-5 d-flex justify-align-center flex-column">
                <form onSubmit={handleSubmit}>
                    <Input
                        value={name}
                        onChange={e => setName(e.target.value)}
                        inputType="text"
                        inputName="name"
                        inputPlaceholder="Ex.:Pedro">Nome</Input>
                    <Input
                        value={fullName}
                        onChange={e => setFullName(e.target.value)}
                        inputType="text"
                        inputName="name"
                        inputPlaceholder="Ex.:Candido">Sobrenome</Input>
                    <Input
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        inputType="text"
                        inputName="name"
                        inputPlaceholder="Ex.:pedroferreirac@hotmail.com">E-mail</Input>
                    <Input
                        value={dateNasc}
                        onChange={e => setDateNasc(e.target.value)}
                        inputType="date"
                        inputName="dateNasc"
                        inputPlaceholder="Ex.:09/05/1998"
                    >Data de nascimento</Input>
                    <Input
                        value={sex}
                        onChange={e => setSex(e.target.value)}
                        inputType="text"
                        inputName="sex"
                        inputPlaceholder="M ou F">Sexo</Input>
                    <Input
                        value={interest}
                        onChange={e => setInterest(e.target.value)}
                        inputType="text"
                        inputName="interest"
                        inputPlaceholder="M ou F | T(Os 2)"
                    >Interesse</Input>
                    <Input
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                        inputType="text"
                        inputName="username"
                        inputPlaceholder="Ex.:pedroferreira123"
                    >Nome de usuário</Input>
                    <Input
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        inputType="password"
                        inputName="passwd"
                        inputPlaceholder="Mínimo de 8 caracteres">Senha</Input>
                    <Input
                        value={confirmPassword}
                        onChange={e => setConfirmPassword(e.target.value)}
                        inputType="password"
                        inputName="confirmPasswd"
                        inputPlaceholder="Digite a mesma senha">Confirme a senha</Input>

                    <div className="d-flex justify-content-center">
                        <div className="registerButtons d-flex justify-content-between mb-5 p-5">
                            <Button
                                type="btn-default">Já tenho uma conta</Button>
                            <SubmitButton />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register