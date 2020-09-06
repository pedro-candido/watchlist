import React from 'react';
import Header from '../Header'

export default {
    title: 'Structure/Header',
    component: Header
}

export const NotLoggedStory = () => <Header />
export const LoggedStory = () => <Header username="Pedro Candido"/>
