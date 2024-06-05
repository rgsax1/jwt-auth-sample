import React from 'react';
import { request } from '../services/axios_helper.js'

export default class AuthContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data : []
        }
    }

    componentDidMount() {
        request(
            "GET",
            "/messages",
            {}
        ).then((response) => {
            this.setState({data:request.data})
        })
    }

    render() {
        return (
            <div>
                {this.state.data && this.state.data.map((line) => <p>{line}</p>)}
            </div>
        )
    }
}