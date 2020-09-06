import React from 'react';

import Header from '../components/Header'
import Footer from '../components/Footer'

import Title from '../components/Title'
import Button from '../components/Button'
import BetterAnimes from '../components/BetterAnimes'

// Assets
import Resting from '../assets/resting_1.png'

const Home = () =>{
    return(
        <>
            <Header/>
            <Title>Sua lista de animes personalizada!</Title>
            <div className="hero">
                <img src={Resting} alt="Pessoa assistindo TV"/>
                <div className="home-buttons">
                    <Button type="btn-default">Registrar</Button>
                    <Button type="btn-default">Entrar</Button>
                </div>
            </div>
            <div className="best-animes">
                <Title>Animes mais votados</Title>
                <BetterAnimes />
            </div>

            <Footer/>
        </>
    )
}

export default Home