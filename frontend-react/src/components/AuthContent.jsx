import React from 'react'
import PropTypes from 'prop-types'
import { request } from '../axios_helper'

const AuthContent = props => {
    constructor(props){
        super(props);
        this.state = {
            data : []
        };
    };

    componentDidMount(){
        request(
            "GET",
            "/messages",
            {}
        ).then((response) => {
            this.setState({data: response.data})
        })
    }


  return (
    <div>AuthContent</div>
  )
}

AuthContent.propTypes = {}

export default AuthContent