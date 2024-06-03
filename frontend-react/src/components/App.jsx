import { useState } from 'react'
import logo from '/vite.svg'
import './App.css'
import Header from './Header.jsx'

import React from 'react';

const App = () => {
    return (
        <div>
            <Header pageTitle = "Frontend authenticated with JWT" logoSrc={logo}></Header>
        </div>
    );
};

export default App;