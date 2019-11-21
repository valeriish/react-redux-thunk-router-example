import React, { Component } from 'react'
import logo from '../logo.svg'
import '../App.css'
import Menu from './Menu'

export default class Header extends Component {
    render() {
        return (
            <header className="App-header" style={{"height": "280px"}}>
                <img src={logo} className="App-logo" alt="logo" />
                <Menu />
            </header>
        )
    }
}
