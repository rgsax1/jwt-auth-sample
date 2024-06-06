import * as React from 'react';
import './App.css'

export default function Buttons(props) {
    return (
        <div className="row">
            <div className="col-md-12 text-center Margin">
                <button className="btn btn-primary Margin-1" onClick={props.login}>Login</button>
                <button className="btn btn-dark Margin-1" onClick={props.logout}>Logout</button>
            </div>
        </div>
    )
}