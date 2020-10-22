import React from 'react';
import {
    Link
} from 'react-router-dom'

import Title from '../components/Title'
import BetterAnimes from '../components/BetterAnimes'

// Assets
import Resting from '../assets/resting_1.png'

const Home = () => {
    return (
        <>
            <Title>Sua lista de animes personalizada!</Title>
            <div className="hero">
                <img src={Resting} alt="Pessoa assistindo TV" />
                <div className="home-buttons">
                    <Link 
                        to="/register" 
                        className="btn-default">Registrar</Link>
                    <Link 
                        to="/login" 
                        className="btn-default">Entrar</Link>
                </div>
            </div>
            <div className="best-animes">
                <Title>Animes mais votados</Title>
                <BetterAnimes />
            </div>
        </>
    )
}

export default Home