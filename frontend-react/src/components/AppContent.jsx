import React from 'react';
import WelcomeContent from "./WelcomeContent.jsx";
import AuthContent from "./AuthContent.jsx";
import LoginForm from "./LoginForm.jsx";

const AppContent = () => {
    return (
        <div>
            <WelcomeContent/>
            <AuthContent/>
            <LoginForm/>
        </div>
    );
};

export default AppContent;