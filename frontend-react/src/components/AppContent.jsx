import React from 'react';
import WelcomeContent from "./WelcomeContent.jsx";
import AuthContent from "./AuthContent.jsx";
import LoginForm from "./LoginForm.jsx";
import Buttons from './Buttons.jsx'
import { request, setAuthToken} from "../services/axios_helper.js";

export default class AppContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            componentToShow: "welcome"
        }
    }

    login = () => {
        this.setState({componentToShow: "login"})
    }

    logout = () => {
        this.setState({componentToShow: "welcome"})
    }

    onLogin = (e, username, password) => {
        e.preventDefault();
        request("POST", "/login", {login: username, password: password}).then((response) => {
            this.setState({componentToShow: "messages"})
            setAuthToken(response.data.token);
        }).catch((error) => {
            this.setState({componentToShow: "welcome"})
        })
    }

    onRegister = (e, firstName, lastName, username, password) => {
        e.preventDefault();
        request("POST", "/register",
            {firstName: firstName, lastName: lastName, login: username, password: password}).then((response) => {
            this.setState({componentToShow: "messages"})
            setAuthToken(response.data.token);
        }).catch((error) => {
            this.setState({componentToShow: "welcome"})
        })
    }

    render(){
        return (
            <div>
                <Buttons login={this.login} logout={this.logout}/>
                {this.state.componentToShow === "welcome" && <WelcomeContent/>}
                {this.state.componentToShow === "messages" && <AuthContent/>}
                {this.state.componentToShow === "login" && <LoginForm onLogin={this.onLogin} onRegister={this.onRegister}/>}
            </div>
        );
    }
}