import React from 'react';

import Header from './components/Header'
import Footer from './components/Footer'

import Home from './pages/Home'
import HomeLogged from './pages/HomeLogged'
import Login from './pages/Login'
import Register from './pages/Register'
import RegisterAnime from './pages/RegisterAnime'
import User from './pages/User'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom"

import 'bootstrap/dist/css/bootstrap.min.css';
import './components/css/App.css'

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <Switch>

                    <Route path="/" exact>
                        <Home/>
                    </Route>

                    <Route path="/login">
                        <Login />
                    </Route>

                    <Route path="/register">
                        <Register />
                    </Route>

                    <Route path="/register-anime">
                        <RegisterAnime />
                    </Route>

                    <Route path="/logged">
                        <HomeLogged />
                    </Route>

                    <Route path="/user">
                        <User />
                    </Route>

                </Switch>
                <Footer />
            </div>
        </Router>

    );
}

export default App;
