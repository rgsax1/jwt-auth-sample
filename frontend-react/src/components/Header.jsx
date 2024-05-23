import React from 'react'
import PropTypes from 'prop-types'

const Header = props => {
  return (
    <div>
        <header className='App-header'>
            <img src={props.logoSrc} className="App-logo" alt="logo"/>
            <h1 className='App-title'>{props.pageTitle}</h1>
        </header>
    </div>
  )
}

Header.propTypes = {}

export default Header