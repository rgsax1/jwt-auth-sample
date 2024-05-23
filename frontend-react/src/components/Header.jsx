import React from 'react'
import PropTypes from 'prop-types'

const Header = props => {
  return (
    <div>
        <header>
            <img src={props.logoSrc} alt="logo"/>
            <h1>{props.pageTitle}</h1>
        </header>
    </div>
  )
}

Header.propTypes = {}

export default Header