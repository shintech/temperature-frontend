import React from 'react'

export default class Navigation extends React.Component {
  render () {
    return (
      <nav className='navbar navbar-custom'>
        <div className='navbar-header'>
          <a className='navbar-brand' href='#/home'><svg className='logo' /></a>

          <button type='button' className='navbar-toggle' data-toggle='collapse' data-target='#myNavbar'>
            <span className='icon-bar' />
            <span className='icon-bar' />
            <span className='icon-bar' />
          </button>
        </div>

        <div className='collapse navbar-collapse' id='myNavbar'>
          <ul className='nav navbar-nav'>
            <li className='nav-item'><a className='nav-link' href='#/home'>Home</a></li>
            <li className='nav-item'><a className='nav-link' href='#/table'>Table</a></li>
          </ul>
          <ul className='nav navbar-nav navbar-right'>
            <li><a href='#'><span className='glyphicon glyphicon-user' /> Sign Up</a></li>
            <li><a href='#'><span className='glyphicon glyphicon-log-in' /> Login</a></li>
          </ul>
        </div>
      </nav>
    )
  }
}
