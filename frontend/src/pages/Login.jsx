import React, { useState } from 'react'
// 
import axios from 'axios'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


import Title from '../components/Title'
import Input from '../components/Input'
import Button from '../components/Button'
import Header from '../components/Header'
import Footer from '../components/Footer'

const MySwal = withReactContent(Swal)

const Login = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (username === '' || password === '') {
            MySwal.fire({
                title: <p>Digite nome de usuário e senha</p>,
                icon: 'error'
            })
        }
        else {
            try {
                const res = await axios.post(`http://localhost:3333/token`, { username, password })
                MySwal.fire({
                    title: <p>Entrando ...</p>,
                    icon: 'success'
                })
            }
            catch (err) {
                MySwal.fire({
                    title: <p>Usuário não encontrado</p>,
                    icon: 'error'
                })
            }
        }
    }

    return (
        <div>
            <Header />
            <Title>Bem vindo ao WatchList</Title>
            <div className="d-flex justify-content-center">
                <div className="loginBox d-flex justify-content-center align-items-center flex-column w-30 mb-3">
                    <Input
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                        className="d-flex justify-content-center"
                        inputName="username"
                        inputPlaceholder="Digite seu nome de usuário"
                        inputType="text"
                    >
                        Nome de usuário
                    </Input>
                    <Input
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        inputName="passwd"
                        inputPlaceholder="Digite sua senha"
                        inputType="password"
                    >
                        Senha
                    </Input>
                    <a className="forgotPasswd" href="">
                        Esqueceu sua senha ?
                </a>
                    <Button onClick={handleSubmit} type="btn-default">Acessar</Button>
                </div>
            </div>
            <div className="d-flex justify-content-center mb-5 pb-5">
                <Button type="btn-default">Não tenho uma conta</Button>
            </div>
            <Footer />
        </div>
    )
}

export default Login