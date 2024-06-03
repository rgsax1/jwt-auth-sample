import {useState} from 'react'
import logo from '/vite.svg'
import './App.css'
import Header from './Header.jsx'

import React from 'react';
import AppContent from "./AppContent.jsx";

const App = () => {
    return (
        <div>
            <Header pageTitle="Frontend authenticated with JWT" logoSrc={logo}></Header>
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <AppContent/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;